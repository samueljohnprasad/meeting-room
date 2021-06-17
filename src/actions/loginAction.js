
const loginAction=(data)=>{
    return {
         type:'LOGGED_IN_USER',
         payload:data
       }
}

export default loginAction