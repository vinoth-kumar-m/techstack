import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";

const getSorting = (order, orderBy) => order === 'desc' ? (a, b) => b[orderBy] - a[orderBy] : (a, b) => a[orderBy] - b[orderBy];

class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  };

  createSortHandler = property => event => {
    this.handleRequestSort(event, property);
  };

  handleClick = (event, id) => {

  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes, header, data, orderBy, headerColor } = this.props;
    const { order, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {header !== undefined ? (
            <TableHead className={classes[headerColor + "TableHeader"]}>
              <TableRow>
                {header.map(column => {
                  return (
                    <TableCell
                      className={classes.tableCell + " " + classes.tableHeadCell}
                      key={column.id}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      <Tooltip
                        title="Sort"
                        placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={order}
                          onClick={this.createSortHandler(column.id)}
                        >
                          {column.label}
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {data
              .sort(getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    tabIndex={-1}
                    key={n.id}
                  >
                    {header.map(column => {
                      return (
                        <TableCell numeric={column.numeric} className={classes.tableCell}>
                          {n[column.id]}
                        </TableCell>)
                    }, this)}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{ 'aria-label': 'Previous Page', }}
          nextIconButtonProps={{ 'aria-label': 'Next Page', }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

CustomTable.defaultProps = {
  headerColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  orderBy: PropTypes.string.isRequired,
  headerColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};

export default withStyles(tableStyle)(CustomTable);
