
import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import withStyles from "@material-ui/core/styles/withStyles";

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from 'components/Table/Table.jsx';

import { transactions } from 'store/actions/dashboard/action-creators';

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const header = [
    { id: 'txhash', numeric: false, disablePadding: false, label: 'Transaction Hash' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'blockid', numeric: true, disablePadding: false, label: 'Block ID' },
    { id: 'creator', numeric: false, disablePadding: false, label: 'Creator' },
    { id: 'createdt', numeric: false, disablePadding: false, label: 'Create Date' },
];

class UITable extends React.Component {

    componentDidMount() {
        this.props.dispatch(transactions());
    }

    render() {
        const { classes, transactions } = this.props;
        const transactionsLoaded = transactions ? true : false;
        console.log("Transactions: ", transactions, "Header: ", header);
        if (!transactionsLoaded) {
            return (<CircularProgress className={classes.progress} />);
        }

        return (
            <Table
                headerColor="primary"
                header={header}
                data={transactions.rows}
                orderBy='blockid'
            />
        );
    }
}

function mapStateToProps(state) {
    let transactions = state.dashboard.get('transactions').data;
    return {
        transactions
    };
}

export default compose(
    withStyles(dashboardStyle),
    connect(mapStateToProps)
)(UITable);