import Memory from './js/memory'
import dragNdrop from './js/dragNdrop'

import HangMan from './js/hangMan'
import Chat from './js/chat'




const startMemGame = document.getElementById("memGame")
const startHngmanGame= document.getElementById("hngmanGame")
const chat= document.getElementById("chat")
const settings = document.getElementById("settings")
const apply = document.getElementById("confirm-dimension")

document.getElementById("settingsWindow").style.visibility = "hidden";


var memGameID = 1;
startMemGame.addEventListener("click", () => {
  const myWindow = new dragNdrop('.windowContainer')
  const memoryGame = new Memory(4, 4, 'memoryContainer', myWindow, memGameID)
  memGameID++;
  myWindow.div.appendChild(memoryGame.div)
})

apply.addEventListener("click", () => {

  if(document.querySelector('#dimension-select').value == "2x2"){
    const myWindow = new dragNdrop('.windowContainer')
    const memoryGame =  new Memory(2, 2, 'memoryContainer', myWindow, memGameID)
    myWindow.div.appendChild(memoryGame.div)
    }

    else if (document.querySelector('#dimension-select').value == "4x4"){
      const myWindow = new dragNdrop('.windowContainer')
      const memoryGame = new Memory(4, 4, 'memoryContainer', myWindow, memGameID)
      myWindow.div.appendChild(memoryGame.div)
      }

      else if (document.querySelector('#dimension-select').value == "2x4"){
        const myWindow = new dragNdrop('.windowContainer')
        const memoryGame = new Memory(2, 4, 'memoryContainer', myWindow, memGameID)
        myWindow.div.appendChild(memoryGame.div)
        }
})



var hangmanGameID = 1;
startHngmanGame.addEventListener('click', function () {
  const myWindow = new dragNdrop('.ws')
  const myChat = new HangMan('.hangManContainer', myWindow,hangmanGameID )
  hangmanGameID++;
  myWindow.div.appendChild(myChat.div)
})

settings.addEventListener("click", () => {
  document.getElementById("settingsWindow").style.visibility = "visible";
})


var chatID = 1;
chat.addEventListener('click', function () {
  const myWindow = new dragNdrop('.windowContainer')
  const myChat = new Chat('.chatContainer', myWindow,chatID)
  myWindow.div.appendChild(myChat.div)
  chatID++;
})




    