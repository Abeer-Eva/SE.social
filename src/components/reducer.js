export const initialState = { //hur datan initiellt ser ut
    user: null
}

export const actionTypes = { 
    SET_USER: 'SET_ USER',
    SET_LIKE:'SET_LIKE',
    GET_USRES:' GET_USRES',
}



const reducer = (state, action) =>{ //lyssnar på om vi fått en action, så returnerar vi hur den ser ut just nu med den nya datan till state i detta fall användardatan ändras
    switch (action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
                
            }
        case actionTypes.SET_LIKE:
            return{
                ...state,
                user:action.payload
            }
            case actionTypes.GET_USRES:
                return{
                    ...state,
                    user:action.payload
                }
            default:
                return state;
    }
}

export default reducer;