import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class surveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
    console.log(this.props.surveys);
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div key={survey._id} className="card blue-grey darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>yes: {survey.yes}</a>
            <a>no: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(surveyList);
