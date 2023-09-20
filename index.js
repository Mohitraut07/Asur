
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please enter your name . ");
console.log("Hello "+ userName +" Welcome to my game .");

// questionOne = {
//   question: "Who is my favorite superhero?",
//   answer: "Dhruv"
// }

// questionTwo = {
//   question: "Which is my favorite sad song?",
//   answer: "Channa Meraya"
// }

var questions = [{
  question: "In which country Nikhil was teaching forensic science?",
  answer: "America"
},{
  question: "Who was Shubh?",
  answer: "Rasool Sheikh"
},{
  question: "Who was the next victim after Aditya Jalan?",
  answer: "Dhananjay Rajput"
},{
  question: "From where second Dead body was found?",
  answer: "Dimapur"
},{
  question: "What was Nikhil's daughter's name?",
  answer: "Riya"
},{
  question: "In which year Jail was caught on fire?",
  answer: "2008"
},{
  question: "From which municipal database the killer was taking information?",
  answer: "NIC database"
}]

var highestScores = [
  {
    name:"Mohit Raut",
    scores:1
  }
]


function quiz(questions,highestScores,userName){
  var score = 0;
  for(i=0;i<questions.length;i++){
    var userAnswer = readlineSync.question(questions[i].question);
    if(questions[i].answer.toUpperCase() ===  userAnswer.toUpperCase()){
      console.log("Right!!!");
      score++;
    }
    else{
      console.log("Wrong!!!");
      score--;
    }
  }
  console.log("Your score is : " + score);

  var player = {
    name:userName,
    scores:score
  }
  if(player.scores > highestScores[0].scores){
    console.log("Highest score is of " + player.name);
    console.log("Highest score is : " + player.scores);
    highestScores.pop();
    highestScores.push(player);
  }
  else if(player.scores === highestScores[0].scores){
    highestScores.push(player);
    console.log(highestScores);
  }
  else{
    console.log("Highest score is of " + highestScores[0].name);
    console.log("Highest score is : " + highestScores[0].scores);
    
  }
}



quiz(questions,highestScores,userName);