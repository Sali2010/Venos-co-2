import {DATA} from './actions'

const initialState = {
    getData : [],
};
const rootReducer = (state= initialState , action)=>{
    switch(action.type){
        case DATA : 
        return {...state, getdata : action.payload};

    }
    return state
}

export default rootReducer;
