const initialState = {
  bookings: [],
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return {
        bookings: [...state.bookings, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};


export default inputReducer;
