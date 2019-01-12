//Javascript for Javq Script Quiz
//Variables
var q1_correct, q2_correct, q3_correct, q4_correct, q1_user, q2_user, q3_user, q4_user, user_score;
//Correct answers to questions declared to be evaluated
q1_correct = 0;
q2_correct = 1;
q3_correct = 0;
q4_correct = 1;
//user score declared globaly to be accesed by following functions
user_score = 0;
//Comparison function to compare user anser against correct answer
var comparison = function(){
    if (q1_user === q1_correct){
        document.getElementById("Q1").classList.add('correct')
        user_score = user_score + 1;
        console.log("1")
    } else{
        document.getElementById("Q1").classList.add('incorrect')
    }
    if (q2_user === q2_correct){
        document.getElementById("Q2").classList.add('correct')
        user_score = user_score + 1;
        console.log("2")

    } else{
        document.getElementById("Q2").classList.add('incorrect')
    }
    if (q3_user === q3_correct){
        document.getElementById("Q3").classList.add('correct')
        user_score = user_score + 1;
        console.log("3")

    } else{
        document.getElementById("Q3").classList.add('incorrect')
    }
    if (q4_user === q4_correct){
        document.getElementById("Q4").classList.add('correct')
        user_score = user_score + 1;
        console.log("4")

    } else{
        document.getElementById("Q4").classList.add('incorrect')
    }
    console.log(user_score);
}
//switch statement to set the text of the score block in HTML
var score = function(){
    switch(user_score){

        case 4: document.getElementById("score_text").innerHTML = "Well Done you scored " + user_score + " out of 4";
        break;
        case 3: document.getElementById("score_text").innerHTML = "Well Done you scored " + user_score + " out of 4";
        break;
        case 2: document.getElementById("score_text").innerHTML = "Try again, you scored " + user_score + " out of 4";
        break;
        case 1: document.getElementById("score_text").innerHTML = "Keep practicing, you scored " + user_score + " out of 4";
        break;
        default: document.getElementById("score_text").innerHTML = "Try again, you scored " + user_score + " out of 4";
    }
}
//Question 1
document.getElementById("q1t").addEventListener("click", function(){
    q1_user = 0;
    console.log(q1_user);
    document.getElementById("q1t").classList.add('selected')
    document.getElementById("q1f").classList.remove('selected');
});
document.getElementById("q1f").addEventListener("click", function(){
    q1_user = 1;
    console.log(q1_user);
    document.getElementById("q1f").classList.add('selected');
    document.getElementById("q1t").classList.remove('selected');
});
//Question 2
document.getElementById("q2t").addEventListener("click", function() {
    q2_user = 0;
    console.log(q2_user);
    document.getElementById("q2t").classList.add('selected')
    document.getElementById("q2f").classList.remove('selected');
});
document.getElementById("q2f").addEventListener("click", function() {
    q2_user = 1;
    console.log(q2_user);
    document.getElementById("q2f").classList.add('selected')
    document.getElementById("q2t").classList.remove('selected');
});
//Question 3
document.getElementById("q3t").addEventListener("click", function() {
    q3_user = 0;
    console.log(q3_user);
    document.getElementById("q3t").classList.add('selected')
    document.getElementById("q3f").classList.remove('selected');
});
document.getElementById("q3f").addEventListener("click", function() {
    q3_user = 1;
    console.log(q3_user);
    document.getElementById("q3f").classList.add('selected')
    document.getElementById("q3t").classList.remove('selected');
});
//Question 4
document.getElementById("q4t").addEventListener("click", function() {
    q4_user = 0;
    console.log(q4_user);
    document.getElementById("q4t").classList.add('selected')
    document.getElementById("q4f").classList.remove('selected');
    comparison();
    score();
});
document.getElementById("q4f").addEventListener("click", function() {
    q4_user = 1;
    document.getElementById("q4f").classList.add('selected');
    document.getElementById("q4t").classList.remove('selected');
    comparison();
    score();
});


