// import { ConnectionActionType } from "constants/ActionTypes/Connection"
// import { ConnectionEntity } from "constants/StateTypes/connection"

export const connectionReducer = (state = {}, { type, payload }: any) => {
  switch(type) {
    case "FETCH_ERROR": {
      return { ...payload, ...state }
    }
    default: {
      return state
    }
  }
}
