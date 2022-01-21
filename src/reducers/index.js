import { LOADING, FETCH_ERROR, SUCCESS, ADD_SMURF, ERROR } from "../actions";

export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: "", 
}

export const reducer = ( state = initialState, action)=>{
    switch (action.type) {
        case LOADING:
            return{
                ...state,
                smurfs: [],
                isLoading: true,
                errorMessage: ""
        };
        case FETCH_ERROR:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                errorMessage: action.payload
            };
        case SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errorMessage: ""
            };
        case ADD_SMURF:
            const newSmurf = {
                id: Math.random(),
                name: action.payload.name,
                nickname: action.payload.nickname,
                position: action.payload.position,
                description: action.payload.description,
            };
            return{
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            };
        case ERROR:
            return{
                ...state,
                errorMessage: 'Name, Position, and Nickname Fields Are Required!'
            };
    default:
        return state;
    }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.