'use strict'
// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?');
// User guesses "yes/no" or "Y/N"

// if (condition is true){
    //  do this stuff
    // } else {
        // do this stuff
        // }
        if(answer1 ==='yes' || answer1 ==='y'){
        //  right answer
        alert('You got it right!!!');
        console.log('The user got it right (Yes, I have a sibling.');        
        } else {
            // wrong answer
            alert('FAIL');
            console.log('The user got the wrong answwer (No, I have non siblings.)');
        }

        // Next question