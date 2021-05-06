window.Hangman = (function () {
    "use strict";
    var hangman = {
      
      
        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],


        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                window.console.log("The part is not valid: " + part);
                return false;
            }
            window.console.log("The part is valid: " + part);
            return true;
        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                window.console.log("Hiding part: " + part);
                this.partAsElement[part].style.display = "none";
            }
        },



        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {
            if (this.isValid(part)) {
                window.console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        }
    };

    window.console.log("You can now use the hangman object as a part of the window-object." +
    "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
    "\n\nHere are all the parts you can work on.");
    window.console.log(hangman.validParts);

    // Return the object to make it visible.
    return hangman;
})();
var obj;
var input;
var res;
var underscoreReplacment = [];


window.Hangman.hide('gallow');
window.Hangman.hide('hill');
window.Hangman.hide('body');
window.Hangman.hide('rightarm');
window.Hangman.hide('leftarm');
window.Hangman.hide('rightleg');
window.Hangman.hide('leftleg');
window.Hangman.hide('rope');
window.Hangman.hide('head');





function myList() 
      {
    var cars = ["saab", "volvo", "audi", "datsun" ,"ferrari" ,"ford" ,"chevrolet" ,"cadillac" ,"bentley","fiat","bMW","hyundai","jeep","kia","lexus","mazda","tesla","volvo"];

    obj = cars[Math.floor(Math.random() * 21)];
    for (i = 0; i < obj.length; i++) {
        underscoreReplacment.push(' _ ');
        
       }
       document.getElementById("undScore").innerHTML = underscoreReplacment;
       document.getElementById("cart").innerHTML = obj;
}

function showParts(num) {
    switch(num) {
        case 1:
            window.Hangman.show('gallow');
             break;
        case 2:
            window.Hangman.show('hill');   
            break;  
        case 3:
            window.Hangman.show('body'); 
            break;
        case 4:
            window.Hangman.show('rightarm');
            break;
        case 5:
            window.Hangman.show('leftarm');
            break;
        case 6:
            window.Hangman.show('rightleg');
            break;
        case 7:
            window.Hangman.show('leftleg');
            break;
        case 8:
            window.Hangman.show('rope');
            break;
        case 9:
            window.Hangman.show('head');
        break;
        default:
      }
}


function hideParts(num) {
    switch(num) {
        case 1:
            window.Hangman.hide('gallow');
             break;
        case 2:
            window.Hangman.hide('hill');   
            break;  
        case 3:
            window.Hangman.hide('body'); 
            break;
        case 4:
            window.Hangman.hide('rightarm');
            break;
        case 5:
            window.Hangman.hide('leftarm');
            break;
        case 6:
            window.Hangman.hide('rightleg');
            break;
        case 7:
            window.Hangman.hide('leftleg');
            break;
        case 8:
            window.Hangman.hide('rope');
            break;
        case 9:
            window.Hangman.hide('head');
        break;
        default:
      }
}


var winCounter=0;
var loseCounter;

function checkChar(){
    input = document.getElementsByClassName("txtbox")[0].value;
    loseCounter=0;
    for (i = 0; i < obj.length; i++) {
      if (obj.charAt(i)== input){
        underscoreReplacment[i] = input;
        winCounter++;
        if (winCounter == obj.length){
            alert("You Won ^_^");
      }

    }
    else 
    loseCounter ++;

      document.getElementById("undScore").innerHTML = underscoreReplacment;


    }
      lose();
}
  
  var displayHangmanCounter =0;
function lose() {
    if (loseCounter == obj.length){
        displayHangmanCounter++;
        showParts(displayHangmanCounter);
       if (displayHangmanCounter==9){
        alert("You Lost X_X");

       }
    }
}


