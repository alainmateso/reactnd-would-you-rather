export const RETRIEVE_QUESTIONS = 'RETRIEVE_QUESTIONS'

export function retrieveQuestions(questions) {
  return {
    type: RETRIEVE_QUESTIONS,
    questions
  }
}
