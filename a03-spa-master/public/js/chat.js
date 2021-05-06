export default class chat {
  constructor(container, myWindow, id) {

    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)
    //initialize new socket
    this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')
    this.userName = localStorage.getItem('username')

    this.getUserName = this.div.childNodes[3]
    this.showMessageDiv = this.div.childNodes[1]
    this.msgTextArea = this.div.childNodes[5]

    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'Chat' + id
    divRepresentWindow.className = 'representWindow'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)
    //Display user name
    this.getUserName.innerText = 'User:-' + this.userName
    this.addUserName(myWindow)
    //Display messages
    this.socket.onmessage = (event) => {
      this.displayMessages(event)
    }

    this.msgTextArea.addEventListener('keypress', (event) => {
      this.userName = localStorage.getItem('username')
      //If the user typed a message and pressed Enter, convert this message to string and send it to the server via socket
      if (event.keyCode === 13) {
        this.message = {
          type: 'message',
          data: event.target.value,
          username: this.userName,
          key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
        }
        this.sendJsonMessage = JSON.stringify(this.message)
        this.socket.send(this.sendJsonMessage)
      }
    })
  }

  displayMessages(event) {
    this.messageDiv = document.createElement('div')
    this.message = event.data
    this.message = JSON.parse(this.message)
    this.userName = this.message.username
    this.data = this.message.data
    this.messageDiv.innerHTML = this.userName + ':' + '<br>' + this.data
    this.messageDiv.className = 'container'
    this.showMessageDiv.appendChild(this.messageDiv)
  }

  addUserName(myWindow) {
    //If there is no registered user add Add Username button
    const addUserName = document.createElement('button')
    if (this.userName == null) {
      addUserName.innerText = 'Add Username'
      addUserName.className = 'addUserName'
    }

    //If there is already registered user add Change Username button
    else if (this.userName != null) {
      addUserName.innerText = 'Change Username'
      addUserName.className = 'addUserName'
    }
    myWindow.div.appendChild(addUserName)
    // If any button from above pressed remove that button and show textBox
    addUserName.addEventListener('click', (event) => {
      addUserName.remove()
      const textBox = document.createElement('input')
      textBox.placeholder = 'Enter UserName'
      textBox.className = 'UserNameTextBox'
      myWindow.div.appendChild(textBox)

      // If Enter pressed, get the user name from the textBox and save it
      textBox.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
          this.name = document.querySelector('.UserNameTextBox').value
          localStorage.setItem('username', this.name)
          this.getUserName.style.display = 'block'
          this.getUserName.innerText = 'User Nmae :' + '( ' + this.name + ' )'
          textBox.remove()
        }
      })
    })
  }
}