import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";

// import LocalOffer from "@material-ui/icons/LocalOffer";


// import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

// import compose from 'recompose/compose';
// import { connect } from 'react-redux';


// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
// import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
//import CardFooter from "components/Card/CardFooter.jsx";

// Dashboard Components
import UICard from 'components/Dashboard/UICard.jsx';
import UIChart from 'components/Dashboard/UIChart.jsx';
import UITable from 'components/Dashboard/UITable.jsx';

import { bugs, website, server } from "variables/general";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cards</h4>
            </CardHeader>
            <CardBody>
              <UICard />
            </CardBody>
          </Card>
        </GridContainer>
        <GridContainer>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Charts</h4>
            </CardHeader>
            <CardBody>
              <UIChart />
            </CardBody>
          </Card>
        </GridContainer>
        <GridContainer>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Table</h4>
              <p className={classes.cardCategoryWhite}>Recent transactions from Blockchain Network</p>
            </CardHeader>
            <CardBody>
              <UITable />
            </CardBody>
          </Card>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);