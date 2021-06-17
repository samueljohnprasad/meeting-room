const initialState = {
    email:'',
    token:''
}
  
;

const loginReducer = (state = initialState, action) => {
   // console.log('input reducer',action)
  switch (action.type) {
    case "SUBMIT_FORM":
      return {
           email:action.payload.email,
           token:action.payload.token
      };

      default:
          return {
              ...state
          }
  }
};

export default loginReducer
