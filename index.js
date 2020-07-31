

//creating an empty function to pull from and create from
function question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//need a prototype all the questions can use.
question.prototype.displayQuestion = 
    function(){
    console.log(this.question);

    //loops through answers and prints them to console to choose from.
    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ': ' + this.answers[i]);
    }
}

//creating another prototype function for the question to see if the answer is the same as the prompt answer
question.prototype.checkAnswer = 
function(ans){
    if (ans === this.correct){
        console.log('correct answer!');
    } else {
        console.log('wrong answer. try again');
    }
}

//creating a new verion of this object and including all inputs questions answers correct
let q1 = new question('Is javascript the best programming language?', ['yes', 'no'], 0);
let q2 = new question('how many languages do you know', ['none', 'all'], 0);
let q3 = new question('what is your boyfriends name', ['bill', 'alex', 'george'], 1);

//array of all the questions
var questions = [q1, q2, q3];

//write something that gives us a number between zero and the number of questions we have in case we add more questions.
var n = Math.floor(Math.random() * questions.length);

//this prints the questions answers for the specific question created by n
questions[n].displayQuestion();

//gives the prompt with the question and parseInt makes sure it is a number not a string asnwer
var answer = parseInt(prompt('please select the correct answer'));

// uses the prototype and enters the answer to compare
questions[n].checkAnswer(answer);
