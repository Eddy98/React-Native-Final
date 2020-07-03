import {
  FETCH_HEADLINES,
  FETCH_HEADLINES_FAILED,
  FETCH_HEADLINES_SUCCEED,
  FETCH_CATEGORY_NEWS,
  FETCH_SEARCH_NEWS,
} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_HEADLINES_SUCCEED:
      return merge(state, { data: action.payload, loading: false })
    case FETCH_HEADLINES_FAILED:
      return merge(state, { error: action.payload, loading: false })
    case FETCH_CATEGORY_NEWS:
      return merge(state, { data: action.payload, loading: false })
    case FETCH_HEADLINES:
      return merge(state, { loading: true })
    case FETCH_SEARCH_NEWS:
      return merge(state, { dataSearch: action.payload, loading: false })
    default:
      return state
  }
}

export default reducer
