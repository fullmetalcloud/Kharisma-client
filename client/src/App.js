import React, { Component } from 'react';
import './App.css';
import questionsList from './questions.json';

function Answer(props) {
  return(
    <label>
      <input type="radio" name={props.question} onChange={() => props.onChange} />
      {props.answer}
    </label>
  );
}

class QuestionSet extends Component {
  renderQuestion(i) {
    return(
      <Answer 
        question={this.props.questions.question}
        answer={this.props.questions.answers[i].answer}
        onChange={() => this.props.onChange(i)}
      />
    )
  }


  render() {
    return (
    <div className="container"> 
      <h2>
        {this.props.questions.question}
      </h2>
      <div className="row">
        <div className="col-sm-12">
          <div className="radio"> 
            {this.renderQuestion(0)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="radio"> 
            {this.renderQuestion(1)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="radio"> 
            {this.renderQuestion(2)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="radio"> 
            {this.renderQuestion(3)}
          </div>
        </div>
      </div>

    </div>
    )
  }
  // this.props.questions.answers.map((answer, i) => {
  //   return (
  //     this.renderQuestion(answer, i)
  //   );
  // })     
}

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.ChangeResponse.bind(this);
    this.state = {
      response: Array(questionsList.length).fill(null),
      userSolutions : [{
        "Str" : 0,
        "Dex" : 0,
        "Con" : 0,
        "Int" : 0,
        "Wis" : 0,
        "Cha" : 0
      }]
    };
  }

  ChangeResponse(i, j) {
    let newResponse = this.state.response.slice() //copy the array
    newResponse[j] = i //execute the manipulations
    this.setState({
      response: newResponse
    })
  }

  render() {
    return (
      <div className="App">
        {questionsList.map(function(questions, j) {
          return (
            <QuestionSet key={j}
              questions={questions}
              onChange={(i) => {this.ChangeResponse(i, j)}}
            />
          )
        })}
      </div>
    );
  }
}

export default Questionnaire;
