import React from 'react'
import { buyCake } from '../../Redux/All'
import { connect } from 'react-redux'
 const  Home  = (props) => {
  return (
    <div>
      <h2>Number Of Cake{props.numbOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      numbOfCake: state.numbOfCake,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() =>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);