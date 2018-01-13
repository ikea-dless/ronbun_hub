import * as React from "react"
import { ArticleEntities } from "constants/StateTypes/article"
import { values } from "lodash"
// import { Link } from "react-router-dom"
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"

export const Articles: React.SFC<any> = (props) => (
  <Paper style={{ padding: "2% 2% 1% 2%" }}>
    <Typography type="title">自分の文章リスト</Typography>
    <Table>
      <TableBody>
        { values(props.articles).map((article, index) => (
          <TableRow key={ index }>
            <TableCell>
              <Typography>{ article.content }</Typography>
            </TableCell>
            <TableCell>
              {/* <Link to={ `/articles/${ article.id }` }>編集する</Link> */}
              { /* react router linkがうまく動かないのでいったんhref */}
              <Button
                raised
                color="primary"
                href={ `/client/articles/${ article.id }` }
              >
              編集する
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)
