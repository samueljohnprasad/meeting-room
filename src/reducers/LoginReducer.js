const initialState = {
    email:'',
    token:'',
    displayName:''
}
  
;

const loginReducer = (state = initialState, action) => {
   // console.log('input reducer',action)
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
           email:action.payload.email,
           token:action.payload.token,
           displayName:action.payload.displayName
      };

      default:
          return {
              ...state
          }
  }
};

export default loginReducer
