import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "../components/Question";

export class QuestionPage extends Component {
  render() {
    const { id, details } = this.props;
    return (
      <div>
        <Question id={id} details={details} />
      </div>
    );
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;
  const details = true;
  return {
    id,
    questions,
    details,
  };
}

export default connect(mapStateToProps)(QuestionPage);
