import React from "react";
import { connect } from "react-redux";

export class Question extends React.Component {
  render() {
    const { question, users } = this.props;
    const { author, optionOne } = question;

    return (
      <div className="question">
        <div className="card" key={question.id}>
          <div className="card-header">
            <h4>{users[author].name} asks:</h4>
          </div>
          <div className="card-body">
            <div className="question-body">
              <div className="question-avatar">
                <img
                  src={users[author].avatarURL}
                  alt={`avatar of ${users[author].name}`}
                />
              </div>
              <div className="question-content">
                <h4>Would You Rather</h4>
                <span>...{optionOne.text}...</span>
                <button className="btn btn-poll">View Poll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  return {
    question,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
