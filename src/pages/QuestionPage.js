import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "../components/AnsweredQuestion";
import UnansweredQuestion from '../components/UnansweredQuestion'
import {getanswered} from '../Utils/helpers'

export class QuestionPage extends Component {
  state = {
    tab: 'a'
  }
  render() {
    const { id, answered } = this.props;
    return (
      <div>
        {answered
          ? <AnsweredQuestion id={id} />
          : <UnansweredQuestion id={id} />}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id]
  const answered = question && getanswered(question, authedUser);
  return {
    id,
    answered,
  };
}

export default connect(mapStateToProps)(QuestionPage);
