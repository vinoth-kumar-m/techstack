
import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import moment from 'moment-timezone';

// react plugin for creating charts
import ChartistGraph from "react-chartist";

import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import AccessTime from "@material-ui/icons/AccessTime";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import { txnPerHour, txnPerMin, txnPerOrg } from 'store/actions/dashboard/action-creators';

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

var Chartist = require("chartist");
var delays = 80,
    durations = 500;
var delays2 = 80,
    durations2 = 500;

const txnsPerHourChart = {
    options: {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: 150, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    // for animation
    animation: {
        draw: function (data) {
            if (data.type === "line" || data.type === "area") {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if (data.type === "point") {
                data.element.animate({
                    opacity: {
                        begin: (data.index + 1) * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: "ease"
                    }
                });
            }
        }
    }
};

const txnsPerMinChart = {
    options: {
        axisX: {
            showGrid: false
        },
        low: 0,
        high: 10,
        chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }
        ]
    ],
    animation: {
        draw: function (data) {
            if (data.type === "bar") {
                data.element.animate({
                    opacity: {
                        begin: (data.index + 1) * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: "ease"
                    }
                });
            }
        }
    }
};

class UIChart extends React.Component {

    componentDidMount() {
        this.props.dispatch(txnPerHour());
        this.props.dispatch(txnPerMin());
        this.props.dispatch(txnPerOrg());
    }

    getChartData = (chartData = []) => {
        let labels = [],
            series = [];

        chartData.map(data => {
            labels.push(moment(data.key)
                .tz(moment.tz.guess())
                .format('h:mm A'));
            series.push(data.value);
            return null;
        });

        return {
            'labels': labels,
            'series': [series]
        };
    };

    getPieData = (chartData = []) => {
        let labels = [],
            series = [];

        chartData.map(data => {
            labels.push(data.key);
            series.push(data.value);
            return null;
        });

        return {
            'labels': labels,
            'series': series
        };
    };

    render() {
        const { classes, txnPerHour, txnPerMin, txnPerOrg } = this.props;
        const txnPerHourloaded = txnPerHour ? true : false;
        const txnPerMinLoaded = txnPerMin ? true : false;
        const txnPerOrgLoaded = txnPerOrg ? true : false;
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    {!txnPerHourloaded && <CircularProgress className={classes.progress} />}
                    {txnPerHourloaded &&
                        <Card chart>
                            <CardHeader color="success">
                                <ChartistGraph
                                    className="ct-chart"
                                    data={this.getChartData(txnPerHour.rows)}
                                    type="Line"
                                    options={txnsPerHourChart.options}
                                    listener={txnsPerHourChart.animation}
                                />
                            </CardHeader>
                            <CardBody>
                                <h4 className={classes.cardTitle}>Transactions Per Hour</h4>
                                <p className={classes.cardCategory}>
                                    <span className={classes.successText}>
                                        <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                                    higher compared to yesterday.
                </p>
                            </CardBody>
                            <CardFooter chart>
                                <div className={classes.stats}>
                                    <AccessTime /> updated 4 minutes ago
                </div>
                            </CardFooter>
                        </Card>}
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            {!txnPerMinLoaded && <CircularProgress className={classes.progress} />}
                            {txnPerMinLoaded &&
                                <ChartistGraph
                                    className="ct-chart"
                                    data={this.getChartData(txnPerMin.rows)}
                                    type="Bar"
                                    options={txnsPerMinChart.options}
                                    responsiveOptions={txnsPerMinChart.responsiveOptions}
                                    listener={txnsPerMinChart.animation}
                                />}
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Transactions Per Minute</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <ArrowDownward className={classes.upArrowCardCategory} /> 20%
                  </span>{" "}
                                lower compared to last hour.
                </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> updated 10 minutes ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader>
                            {!txnPerOrgLoaded && <CircularProgress className={classes.progress} />}
                            {txnPerOrgLoaded &&
                                <ChartistGraph
                                    className="ct-chart"
                                    data={this.getPieData(txnPerOrg.rows)}
                                    type="Pie"
                                />
                            }
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Transactions Per Organization</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    {" "}
                                </span>
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> updated 5 hours ago
                </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

function mapStateToProps(state) {
    let txnPerHour = state.dashboard.get('txnPerHour').data;
    let txnPerMin = state.dashboard.get('txnPerMin').data;
    let txnPerOrg = state.dashboard.get('txnPerOrg').data;
    return {
        txnPerHour,
        txnPerMin,
        txnPerOrg
    };
}

export default compose(
    withStyles(dashboardStyle),
    connect(mapStateToProps)
)(UIChart);