import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questionsList from './questions.json';

class QuestionAnswer extends Component {
  render() {
    return (
      <div className="App">
        {questionsList.map(function(questions) {
          return (
            <div className="container">
              <h2>
                {questions.question}
              </h2>
              <div className="row">
                <div className="col-sm-12">
                  <div className="radio">
                    <label>
                      <input type="radio" value="option1" />
                      {questions.answers[0].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option2" />
                      {questions.answers[1].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option3" />
                      {questions.answers[2].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option4" />
                      {questions.answers[3].answer}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuestionAnswer;
