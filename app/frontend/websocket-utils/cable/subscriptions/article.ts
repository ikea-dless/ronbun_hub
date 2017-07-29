import { cable } from "websocket-utils/cable"

interface ArticleChannel extends ActionCable.Channel {
  update(article: any): void
}

export const articleSubscriptions = (articleId: string) => cable.subscriptions.create(
  { channel: "ArticleChannel", room: articleId }, {
  connected() {
    console.log("connected")
  },
  received(data) {
    console.log(data)
  },
  disconnected() {
    console.log("disconnected")
  },
  update(article) {
    return new Promise((resolve, reject) => {
      this.perform("update", article)
    })
  }
}) as ArticleChannel
