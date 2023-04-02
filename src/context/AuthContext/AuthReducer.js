// here in our reducer  we are going to have the actions "LOGIN" AND "LOGOUT"

export const AuthReducer=(state, action)=>{
    switch(action.type){
        case "LOGIN":{
            return{
                currentUser:action.payload
            }
        }

        case "LOGOUT":
            {
                return{
                    currentUser:null
                }
            }
default :
return state;

    }
}