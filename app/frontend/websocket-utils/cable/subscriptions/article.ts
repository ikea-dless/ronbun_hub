import { cable } from "websocket-utils/cable"

// actionを引数で受け取るのクソ微妙
export const articleSubscriptions = (articleId: string, actions) => cable.subscriptions.create(
  { channel: "ArticleChannel", room: articleId }, {
  connected() {
    console.log("connected")
  },
  received(data) {
    console.log("cable", data)
    actions.fullfilledArticle(data)
  },
  disconnected() {
    console.log("disconnected")
  }
})
