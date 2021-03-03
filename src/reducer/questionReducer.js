const initialState = {
  questions: [],
};

export default (state = initialState, action) => {
  const { questions } = action.payload;
  return [questions];
};
