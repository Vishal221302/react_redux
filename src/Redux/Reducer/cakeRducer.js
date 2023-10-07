import { BUY_CAKE } from "../Actions/Types/cakeType"

const initailState = {
    numbOfCake : 10
}

const cakeRducer = (state = initailState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numbOfCake:state.numbOfCake - 1
        }
        default : return state

    }
}
export default cakeRducer;