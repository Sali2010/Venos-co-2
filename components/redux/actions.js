export const DATA = "DATA";

const API_URL = "https://jsonplaceholder.typicode.com/users"


export const getUser = ()=>{
    try {
        return async dispatch => {
            const result = await fetch(API_URL,{
                method: "GET",
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            const json = await result.json();
            if(json){
                dispatch({
                    type : 'DATA',
                    payload: json,
                })
            }else{
                console.log('Unable to fetch DATA')   
            }
        }
        
    } catch (error) {
        console.log(error);
    }
}