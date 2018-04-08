import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questionsList from './questions.json';

class QuestionAnswer extends Component {
  constructor(props) {
  super(props);

  this.state = {
    userSolutions : [{
      "str" : 0,
      "dex" : 0,
      "con" : 0,
      "int" : 0,
      "wis" : 0,
      "cha" : 0
    }]
  };
}

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
                      <input type="radio" name={questions.question} />
                      {questions.answers[0].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name={questions.question} />
                      {questions.answers[1].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name={questions.question} />
                      {questions.answers[2].answer}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name={questions.question} />
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
