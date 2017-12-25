import { cable } from "websocket-utils/cable"
import { camelizeKeys } from "humps"

// actionを引数で受け取るのクソ微妙
export const articleSubscriptions = (articleId: string, actions) => cable.subscriptions.create(
  { channel: "ArticleChannel", room: articleId }, {
  connected() {
    console.log("connected")
  },
  received(data) {
    console.log("cable", data)
    // TODO: 共通化
    const camelizedContent = camelizeKeys(data)
    actions.fullfilledArticle(camelizedContent)
  },
  disconnected() {
    console.log("disconnected")
  }
})
