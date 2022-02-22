export const initialState = { //hur datan initiellt ser ut
    user: null
}

export const actionTypes = { 
    SET_USER: 'SET_ USER',
}

const reducer = (state, action) =>{ //lyssnar på om vi fått en action, så returnerar vi hur den ser ut just nu med den nya datan till state i detta fall användardatan ändras
    switch (action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
                
            }

            default:
                return state;
    }
}

export default reducer;