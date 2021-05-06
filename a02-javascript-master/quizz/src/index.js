
import Quizz from './modules/quizz.js'
import User from './modules/user.js'




const start = document.getElementById("start")
const answer = document.getElementById("answer")
const nxtQuestion = document.getElementById("nxtquestion")
const ans = document.getElementById("anstxtbox")

    User.disable("cbox1")
    User.disable("cbox2")
    User.disable("cbox3")
    User.disable("cbox4")

var options = false;

User.disable("answer");
User.disable("nxtquestion");





let 
nextUrl = null;


/**
 * Update the webpage with some content.
 */
function updateContent(str) {
    // content.innerHTML = str
    document.getElementById("content").innerHTML = str;
    
}



/**
 * Start
 */
start.addEventListener("click", () => {
    User.setNickName();
    let status = "Clicked Start"
    User.active("answer");
    User.disable("start");
    User.startSecCounter();


    
    updateContent(status)
    console.log(status)

    Quizz.getFirstQuestion()
        .then(response => {
            console.log(response)

            response.json().then((data) => {


                updateContent(JSON.stringify(data.question, null, 4))



                nextUrl = data.nextURL
            });
        })
        .catch((err) => {
            console.log('Fetch Error :-S', err)
        });
})



/**
 * answer
 */
var counter =0;
answer.addEventListener("click", () => {
    let status = "Try Again"
    var id
    let body
    counter++;
 
    if (!options){
        id = ans.value
    }
    else if (options){
      id  =  document.querySelector('.check:checked').value;
    }

    body = {
        answer: id
    }
  
   
    if (counter==7){
        nextUrl = "http://1dv525.mikaelroos.se:3000/answer/326"
    }
    updateContent(status)
    console.log(status + id)

    
    Quizz.sendQuestionResponsePost(nextUrl, body)
        .then(response => {
            console.log(response)


            response.json().then((data) => {



                updateContent(JSON.stringify(data.message, null, 4))
                
                User.active("nxtquestion");
                console.log(data)
                nextUrl = data.nextURL
                User.stopSecCounter();
                User.scoreUp()
                User.totalTime()

                if (counter==7){
                    var result = User.getNickName()+"'s"+" Score Is: " +User.scoreUp() + 
                    " Time Taken: " + User.totalTime();
                    updateContent(result)
                    User.win()

                }
                


            });
        })
        .catch((err) => {
            console.log('Fetch Error :-S', err);
            User.lsoe();
        });
})



/**
 * nxtQuestion
 */
nxtQuestion.addEventListener("click", () => {
    let status = "Try Again"
    let id = ans.value

    User.disable("cbox1")
    User.disable("cbox2")
    User.disable("cbox3")
    User.disable("cbox4")
    User.removeValues("alt1")
    User.removeValues("alt2")
    User.removeValues("alt3")
    User.removeValues("alt4")

    updateContent(status)
    console.log(status + id)
    User.startSecCounter();
    options = false

    Quizz.getQuestion(nextUrl)
        .then(response => {
            console.log(response)

            response.json().then((data) => {
                User.resetCounter();
                updateContent(JSON.stringify(data.question));
               
                nextUrl=data.nextURL

                if (data.hasOwnProperty('alternatives')) {
                    User.active("cbox1")
                    User.active("cbox2")
                    User.active("cbox3")
                    User.active("cbox4")

                        document.getElementById("alt1").innerHTML = data.alternatives.alt1;
                        document.getElementById("alt2").innerHTML = data.alternatives.alt2;
                        document.getElementById("alt3").innerHTML = data.alternatives.
                        alt3;

                    if (data.alternatives.alt4 != null){
                     document.getElementById("alt4").innerHTML = data.alternatives.alt4;}
                     else if (data.alternatives.alt4 == null){
                     User.disable("cbox4");
                     User.removeValues("alt4")
                    }

                    options = true;

                }
              



            });
        })

        .catch((err) => {
            console.log('Fetch Error :-S', err)
        });
})








