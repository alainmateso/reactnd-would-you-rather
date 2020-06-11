import { RETRIEVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}
