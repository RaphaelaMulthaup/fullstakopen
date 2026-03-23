
const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = (filterTerm) => {
  return {
    type: "FILTER",
    payload: filterTerm,
  };
};

export default filterReducer;