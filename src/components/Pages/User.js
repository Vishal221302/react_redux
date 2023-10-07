import React, { useEffect } from 'react'
import { fetchUsers } from '../../api/api';
import { connect } from 'react-redux'


function User(props) {
  
  const { userData} = props;
  useEffect(() => {
    props.fetchUsers();
  }, []);

  // console.log(userData.users);
  
  return userData.loading ? (
    <h2>Loading User</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
          <div>{
            userData.users.map((list, i) => {
              return (
                <div key={i}>
                  <h3>{list.name}</h3>
                  <h4>{list.phone}</h4>
                  <h4>{list.website}</h4>
                  <h4>{list.address.geo.lat}</h4>
                  <h4>{list.address.geo.lng}</h4>
                </div>
              );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
    return {
      userData: state.user,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () =>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
