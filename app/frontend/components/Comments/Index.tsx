import * as React from "react"
import { values } from "lodash"
import { CommentEntity } from "constants/StateTypes/comments"
import { articleCommentSubscriptions } from "websocket-utils/cable/subscriptions/comment"
import List, { ListItem, ListSubheader, ListItemText } from "material-ui/List"
import Card, { CardHeader, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"
import Avatar from "material-ui/Avatar"
import { grey } from "material-ui/colors"

// TODO: 型付け
interface PropTypes {
  comments: CommentEntity[]
  // actions: { [key: number]: Function }
  actions: any
  articleSelection?: string
  articleId: string
}

export class Comments extends React.PureComponent<PropTypes> {
  componentWillMount() {
    this.props.actions.fetchComments(this.props.articleId)
    articleCommentSubscriptions(this.props.articleId, this.props.actions)
  }

  render() {
    const primaryGrey = grey["50"]
    return (
      <List
        subheader={ <div /> }
        style={{
          position: "relative",
          overflow: "auto",
          maxHeight: "800px", // TODO: 決め打ちダサい
        }}
      >
        <ListSubheader style={ { backgroundColor: primaryGrey } }>コメントリスト</ListSubheader>
        { values(this.props.comments).map((comment: CommentEntity, index) => {
          const targetText: string | null = comment.target ? `「${ comment.target }」についてのコメント` : null
          return (
            <ListItem key={ index }>
              <Card style={{width: "100%"}}>
                <CardHeader
                  title={ comment.user.username }
                  subheader={ targetText }
                  avatar={ <Avatar>{ comment.user.username.slice(0, 1) }</Avatar> }
                />
                <CardContent>
                  <Typography component="p" style={ { whiteSpace: "pre-wrap"} }>{ comment.body }</Typography>
                </CardContent>
              </Card>
            </ListItem>
          )
        })}
      </List>
    )
  }
}
