import * as React from "react"
import styles from "./Note.css"
// import Textarea from "material-ui/Input"

interface PropsType {
  onChange: Function
  content: string
}

export const Note: React.SFC<PropsType> = ({ onChange, content }) => (
  <div>
    <textarea className={ styles.note }
      onChange={ (e) => onChange(e) }
      value={ content }
      // rows適当
      rows={ 10 }
    />
  </div>
)
