const initialState = {
  questions: [],
};

const questionReducer = (state = initialState, action) => {
  const { questions } = action.payload;
  return [questions];
};

export default questionReducer;
