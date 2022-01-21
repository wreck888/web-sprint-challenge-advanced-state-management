import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => (dispatch) => {
    dispatch(isLoading());
    axios.get('http://localhost:3333/smurfs')
        .then(resp =>{
            // console.log('axios:',resp)
             dispatch(fetchSuccess(resp.data))
        })
        .catch(err =>{
            dispatch(fetchError(err))
        })
}

export const isLoading = () => {
    return ({type: LOADING});
}

export const fetchSuccess = (smurfs) => {
    return({type: SUCCESS, payload: smurfs})
}

export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload: smurf})
}
export const setError = () => {
    return({type:ERROR})
}
export const fetchError = (error) => {
    return({type:FETCH_ERROR, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.