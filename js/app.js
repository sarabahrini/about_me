'use strict'
// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?').toLowerCase ();
// User guesses "yes/no" or "Y/N or "Yes/No" or "y/n"

// if (condition is true){
    //  do this stuff
    // } else {
        // do this stuff
        // }

    function question1() {

        if(answer1 ==='no' || answer1 ==='n'){
        //  right answer
        alert('You got it right!!!');
        console.log('The user got it right (Right, I have non sibliings ')
        ;        
        } else {
            // wrong answer
            alert('FAIL');
            console.log('The user got the wrong answer (No, I have non siblings)');
        } 
    }
    question1();
    
 // question 2
var answer2 = prompt ('Do I have natural curly hair?').toLowerCase ();

function question2() {

    if(answer2 === 'yes' || answer2 === 'y'){
    alert('Right!! How did you know!');
    console.log('The user got it right (Yes, I have natural curly hair)');
    }else{
      alert('FAIL');
      console.log('The user got the wrong answer (I have natural curly hair)')
    }
}
    question2();

// question 3 

var answer3 = prompt ('Is blue my favoit color or red?').toLowerCase();

function question3() {

    if(answer3 === 'blue'){
    alert('Yes! Blue Baby BLue....!');
    console.log('The user got it right (Yes, I like blue color.');
    } else {
    alert('FAIL again!');
    console.log('The user got it wrong. (No, I don\'t like red)')
    }
}

    question3();
// question 4

var answer4 = prompt('Do I like snowboard or ski?').toLowerCase();
    if(answer4 === 'ski'){
    alert('True! I love skiing but I don\'t know how')
    console.log('User got it right. (I like ski more than snowboard')
    } else {
        alert('Wrong Wrong..')
        console.log('I know how to snowboard but I like ski')
    }
// question 5

var answer5 = prompt('Did I know English when I moved to the USA?').toLowerCase();
if(answer5 === 'no' || answer5 === 'n'){
    alert('Right!');
    console.log('User got it right. (I did not know English when I moved to the USA)')
    } else {
        alert('Wrong Wrong..')
        console.log('User got it wrong (I did not know English when I moved to the USA')
    }
// question 6

var answer6 = prompt('What is my favorit meal?').toLowerCase();
if(answer6 === 'lunch'){
    alert('Right!');
    console.log('User got it right. (Lunch is my favorit meal)')
    } else {
        alert('Wrong Wrong..');
        console.log('User got it wrong (Dinner and breakfast are not my favorit meals)')
    }