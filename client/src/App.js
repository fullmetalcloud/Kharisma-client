import React, { Component } from 'react';
import qs from 'qs';
import axios from 'axios';
import './App.css';
import questionsList from './questions.json';
const url = 'http://0.0.0.0:3001';

function Answer(props) {
  return(
    <label>
      <input type="radio" name={props.question} value={props.ansvalue} onChange={props.onChange} />
      {props.answer}
    </label>
  );
}

class Question extends Component {
  handleChange(changeEvent) {
      let num = this.props.questionnumber
      this.props.questionvalue[num] = changeEvent.target.value
  }
  renderQuestion(i) {
    return(
      <Answer 
        question={this.props.questions.question}
        answer={this.props.questions.answers[i].answer}
        ansvalue={i}
        onChange={(changeEvent) => this.handleChange(changeEvent)}
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
    this.state = {
      questions: Array(questionsList.length).fill(0),
      response: {
        data: Array(5).fill({Name: "Character"})
      }
    };
  }

  onChange(i, j) {
    let newResponse = this.state.response.slice() //copy the array
    newResponse[j] = i //execute the manipulations
    this.setState({
      response: newResponse
    })
  }

  SubmitAnswers() {
    var answers = this.state.questions
    var list = {
        "Str" : 0,
        "Dex" : 0,
        "Con" : 0,
        "Int" : 0,
        "Wis" : 0,
        "Cha" : 0
      }
    let value;
    for (let i = 0; i < questionsList.length;i++) {
      value = questionsList[i].answers[answers[i]].modifiers
      for (let v in value) {
        list[value[v]]++;
      }
    }
    axios.post(url + "/api", qs.stringify(list))
      .then(res => {
        this.setState({
          response: res
        })
      }).catch(err => { 
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        {questionsList.map((question, j) => {
          return (
            <Question key={j}
              questionvalue={this.state.questions}
              questions={question}
              questionnumber={j}
            />
          )
        })}
        <button className="btn btn-default" type="submit" onClick={() => this.SubmitAnswers()}>Submit</button>
        <div>
          <ul>
          {this.state.response.data.map((info,i) => {
              return(
                <li>{info.Name}</li>
              );
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default Questionnaire;
