const initialState = {
  bookings: [],
};

const inputReducer = (state = initialState, action) => {
  // console.log('input reducer',action)
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

const arr = [
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
  {
    name: "sam",
    time: "7",
    date: "today",
    meeting: "games",
    description: "im playing",
  },
];

export default inputReducer;
