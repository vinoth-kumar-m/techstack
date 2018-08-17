
import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import withStyles from "@material-ui/core/styles/withStyles";

import CircularProgress from '@material-ui/core/CircularProgress';
import Blocks from "@material-ui/icons/Dns";
import Transactions from "@material-ui/icons/CompareArrows";
import Contracts from '@material-ui/icons/Assignment';
import Peers from '@material-ui/icons/DeviceHub';
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import { statistics } from 'store/actions/dashboard/action-creators';

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


class UICard extends React.Component {

    componentDidMount() {
        this.props.dispatch(statistics());
    }

    render() {
        const { classes, stats } = this.props;
        const statisticsLoaded = stats ? true : false;

        if (!statisticsLoaded) {
            return (<CircularProgress className={classes.progress} />);
        }

        return (
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Blocks />
                            </CardIcon>
                            <p className={classes.cardCategory}>Blocks</p>
                            <h3 className={classes.cardTitle}>{stats.blockCount}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Just Updated
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Transactions />
                            </CardIcon>
                            <p className={classes.cardCategory}>Transactions</p>
                            <h3 className={classes.cardTitle}>{stats.txnCount}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Last 24 Hours
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Contracts />
                            </CardIcon>
                            <p className={classes.cardCategory}>Contracts</p>
                            <h3 className={classes.cardTitle}>{stats.contractCount}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Last 5 Hours
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Peers />
                            </CardIcon>
                            <p className={classes.cardCategory}>Peers</p>
                            <h3 className={classes.cardTitle}>{stats.peerCount}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Just Updated
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

function mapStateToProps(state) {
    let stats = state.dashboard.get('stats').data;
    return {
        stats
    };
}

export default compose(
    withStyles(dashboardStyle),
    connect(mapStateToProps)
)(UICard);