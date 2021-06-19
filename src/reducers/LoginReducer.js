const initialState = {
    email:'',
    token:'',
    displayName:'',
    photoURL:''
}
  
;

const loginReducer = (state = initialState, action) => {
   // console.log('input reducer',action)
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
         ...action.payload
      };

      default:
          return {
              ...state
          }
  }
};

export default loginReducer
