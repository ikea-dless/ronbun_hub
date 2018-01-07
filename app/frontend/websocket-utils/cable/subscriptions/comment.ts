import { cable } from "websocket-utils/cable"
import { camelizeKeys } from "humps"

export const articleCommentSubscriptions = (articleId: string, actions) => cable.subscriptions.create(
  { channel: "CommentChannel", room: articleId }, {
    connected() {
      console.info("cc connected")
    },
    received(data) {
      console.log("cc", data)
      const camelizeComments = camelizeKeys(data)
      actions.fullfilledComments(camelizeComments)
    },
    disconnected() {
      console.info("cc disconnected")
    }
  }
)
