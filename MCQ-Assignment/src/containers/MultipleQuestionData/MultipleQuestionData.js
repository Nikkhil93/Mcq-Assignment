import React, {
  Component
} from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './MultipleQuestionData.css'
var data = require('../../assets/questions.json');


class StudentData extends Component {
  state = {
    questionData: data,
    selectedAnswers : []
  };

  userInputHandler = (event, valueSelected, id) => {
    let answerState = [...this.state.selectedAnswers];
    let isCorrect ="incorrect";
    if(this.state.questionData[id-1].correct === valueSelected){
      isCorrect = "Correct";
    }
    for(let i=0; i<answerState.length; i++){
      if(answerState[i].questionId=== id){
        answerState.splice(i,1);
      }
    }
    answerState.push({'questionId': id, 'answerSelected': valueSelected, 'CorrectAnswer':this.state.questionData[id-1].correct});
    this.setState({selectedAnswers: answerState});
   console.log("Question number: ", id ," Option Selected :", valueSelected , "It is: ",isCorrect);
  };

  submitHandler= (event) =>{
    event.preventDefault();
    console.log(this.state.selectedAnswers);
  }



  render() {
     let questionsSet = this.state.questionData.map((question)=>{
      let answerKeys= question.Options.map(option=>{
        return <Input 
        key = {Object.keys(option)} 
        type="radio" 
        value = {Object.keys(option)} 
        changed = { event => this.userInputHandler(event, ...Object.keys(option), question.id) } 
        name = {question.id}>
           {Object.keys(option)} : {Object.values(option)}
        </Input>
        })
       return <div key= {question.id}><h3>{question.Question}</h3>
       {answerKeys}</div>;
     });
    
    return <form onSubmit = {this.submitHandler}>{questionsSet} 
        <div className = {classes.buttonStyle}>
        <Button btnType = "Success">
      Submit </Button></div></form>;
  }
}

export default StudentData;