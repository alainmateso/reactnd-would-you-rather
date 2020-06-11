import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { getanswered } from "../Utils/helpers";

export class Categories extends Component {
  state = {
    tab: "unanswered",
  };
  handleUnanswered = (e) => {
    this.setState(() => ({
      tab: "unanswered",
    }));
  };

  handleAnswered = (e) => {
    this.setState(() => ({
      tab: "answered",
    }));
  };

  render() {
    const { unanswered, answered } = this.props;
    const { tab } = this.state;
    return (
      <div className="tabs">
        <div className="tabs-header">
          <div
            className="tab-item selected-tab"
            onClick={this.handleUnanswered}
          >
            Unanswered Questions
          </div>
          <div className="tab-item" onClick={this.handleAnswered}>
            Answered Questions
          </div>
        </div>
        <div className="tabs-body">
          {tab === "answered"
            ? answered.map((id) => <Question key={id} id={id} />)
            : unanswered.map((question) => (
                <Question key={question.id} id={question.id} />
              ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const answers = users[authedUser].answers;
  const noAnswers = Object.values(questions).filter(
    (question) => !getanswered(question, authedUser)
  );
  return {
    answered: answers.length === 0 ? [] : Object.keys(answers),
    unanswered: noAnswers.length === 0 ? [] : noAnswers,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Categories);
