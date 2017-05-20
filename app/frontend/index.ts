import * as ActionCable from "actioncable"

const App = ActionCable.createConsumer()

interface RoomChannel extends ActionCable.Channel {
  speak(data: any): void
}

const roomChannel = App.subscriptions.create("RoomChannel", {
  connected(): void {
    console.log("connected")
  },
  disconnected(): void {
    console.log("disconnected")
  },
  speak(message: string): void {
    this.perform("speak", {message: message})
  },
  received(data: any): void {
    console.log(data["message"])
  }
}) as RoomChannel

document.querySelector("[data-behavior~=room_speaker]").addEventListener("keypress", (e: any): void => {
  if (e.keyCode === 13) {
    roomChannel.speak(e.target.value)
  }
}, false)
