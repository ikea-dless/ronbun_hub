import { ConnectionEntity } from "constants/StateTypes/connection"
import { ConnectionActionType } from "constants/ActionTypes/Connection"

interface FetchError {
  type: ConnectionActionType,
  payload: ConnectionEntity
}

export const fetchError = (status: number, response?: string): FetchError => (
  {
    type: "FETCH_ERROR",
    payload: { status, response }
  }
)

export default {
  fetchError
}
