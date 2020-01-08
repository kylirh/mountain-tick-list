const ticks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TICK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.date
        }
      ];
    default:
      return state;
  }
};

export default ticks;
