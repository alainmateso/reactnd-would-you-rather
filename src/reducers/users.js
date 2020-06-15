import { RETRIEVE_USERS } from '../actions/users'
import { SAVE_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}
