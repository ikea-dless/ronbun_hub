import * as ActionCable from "actioncable";
var App = ActionCable.createConsumer();
var roomChannel = App.subscriptions.create("RoomChannel", {
    connected: function () {
        console.log("connected");
    },
    disconnected: function () {
        console.log("disconnected");
    },
    speak: function (message) {
        this.perform("speak", { message: message });
    },
    received: function (data) {
        console.log(data["message"]);
    }
});
document.querySelector("[data-behavior~=room_speaker]").addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        roomChannel.speak(e.target.value);
    }
}, false);
