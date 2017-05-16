import * as ActionCable from "actioncable"

const App = ActionCable.createConsumer("ws://localhost:3000/cable")

App.room = App.subscriptions.create("RoomChannel", {
  connected: function(): void {
  },
  speak: function(message: string): void {
    this.perform("speak", {message: message})
  },
  received: function(data: any): void {
    console.log(data["message"])
  }
})

document.querySelector("[data-behavior~=room_speaker]").addEventListener("keypress", (e: any): void => {
  if (e.keyCode === 13) {
    App.room.speak(e.target.value)
  }
}, false)
