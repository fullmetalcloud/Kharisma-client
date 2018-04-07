import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './questions.json';

class QuestionAnswer extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>
            This is the question.
          </h1>
          <div className="row">
            <div className="col-sm-12">
              <div className="radio">
                <label>
                  <input type="radio" value="option1" />
                  Option 1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" />
                  Option 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" />
                  Option 3
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option4" />
                  Option 4
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Quiz extends Component {
  renderQA(i) {
    return <QuestionAnswer />;
  }

  render() {
    return (
      <div>
        {this.renderQA(0)};
        {this.renderQA(1)};
        {this.renderQA(2)};
        {this.renderQA(3)};
        {this.renderQA(4)};
        {this.renderQA(5)};
      </div>
    );
  }
}

export default Quiz;
