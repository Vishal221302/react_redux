
const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const ReduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = ReduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAME = 'BUY_ICE_CREAME'

function buyCake() {
    return {
      type: BUY_CAKE,
      info: "first redux Actions",
    };
}

function buyiceCreame() {
    return {
        type: BUY_ICE_CREAME,
    }
}

//(previousState, action) =>NewState

const initialState = {
    nubOfCakes: 10,
    numbOfIcecreams : 20
}

const initialCake = {
    nubOfCakes:10
}
const initalIceCreame = {
    numbOfIcecreams:20
}



const Cakereducer = (state = initialCake, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            nubOfCakes: state.nubOfCakes -1
        }

        default:return state
    }
}


const buyIceCreamreducer = (state = initalIceCreame, action) => {
  switch (action.type) {
    case BUY_ICE_CREAME:
      return {
        ...state,
        numbOfIcecreams: state.numbOfIcecreams - 1,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
    cake: Cakereducer,
    iceCreame:buyIceCreamreducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState())
 const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyiceCreame())
store.dispatch(buyiceCreame());
unsubscribe()