const initialState = {
  accessToken: {}
}

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ACCESS_TOKEN':
      return {
        ...state, accessToken: payload
      }
      break;

    default:
      break;
  }

  return state;
}

export default rootReducer;