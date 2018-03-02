let defaultState = {
  news: []
}

const mainReducer = (state=defaultState, action) => {
  if(action.type === 'TAKE_NEWS') {
    return {
      ...state,
      news: action.news
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;
