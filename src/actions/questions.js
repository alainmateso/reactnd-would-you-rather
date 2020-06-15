import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer } from '../Utils/_DATA'

export const RETRIEVE_QUESTIONS = 'RETRIEVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function retrieveQuestions(questions) {
  return {
    type: RETRIEVE_QUESTIONS,
    questions
  }
}

function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function handleSaveAnswer(details) {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(saveAnswer(details))
    dispatch(hideLoading())
    return _saveQuestionAnswer(details)
      .catch(() => {
        alert('An error occured trying to save your answer. Try again!')
      })
  }
}
