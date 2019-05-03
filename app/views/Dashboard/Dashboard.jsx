import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Tooltip from "material-ui/Tooltip";

// material-ui-icons
import InfoOutline from "material-ui-icons/InfoOutline";
import DateRange from "material-ui-icons/DateRange";
import ArrowUpward from "material-ui-icons/ArrowUpward";
import AccessTime from "material-ui-icons/AccessTime";
import Refresh from "material-ui-icons/Refresh";
import Edit from "material-ui-icons/Edit";
import { Warning as WarningIcon, Error as CriticalIcon } from "material-ui-icons";
import ExploreIcon from "material-ui-icons/Explore";
import { FaUser as UsersIcon, FaRegListAlt as TasksIcon } from "react-icons/fa";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import StatsCard from "components/Cards/StatsCard.jsx";
import ChartCard from "components/Cards/ChartCard.jsx";
import IconCard from "components/Cards/IconCard.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";
import { events } from "variables/general.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  constructor(props) {
    super(props);
    var criticalEvents = events.dataRows.filter((prop, key) => {
      if (prop[5]!==0) {
        return 1
      }
      return 0;
    });
    criticalEvents.sort(this.array_sort_by_date);
    this.state={
      data: criticalEvents.map((data, index)=>{
        return ([
          data[5]===1?<WarningIcon style={{color:'orange'}}/>:<CriticalIcon color="error"/>,
          data[0].toString(),
          data[1],
          data[2],
          // data[3],
          data[4],
          
        ])
      }),
      value: 0
    }; 
  }

  array_sort_by_date = (date1, date2) => {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order. As you can see, JavaScript's native comparison operators
    // can be used to compare dates. This was news to me.
    if (date1[0] > date2[0]) return -1;
    if (date1[0] < date2[0]) return 1;
    return 0;
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
          <ItemGrid xs={12} sm={6} md={6} lg={3}>
            <StatsCard
              icon={WarningIcon}
              iconColor="orange"
              title="Groups"
              description="2 Warning"
              small=""
              statIcon={ExploreIcon}
              statIconColor="gray"
              statLink={{ text: "More info...", href: "/home/explorer" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={3}>
            <StatsCard
              icon={UsersIcon}
              iconColor="green"
              title="Active users"
              description="19, 503"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Unreachable clients"
              description="124"
              statIcon={ExploreIcon}
              statLink={{ text: "More info...", href: "/home/explorer" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6} lg={3}>
            <StatsCard
              icon={TasksIcon}
              iconColor="blue"
              title="Tasks running"
              description="22"
              statIcon={AccessTime}
              statText="Just Updated"
            />
          </ItemGrid>
        </GridContainer>
        <GridContainer>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              underChart={
                <div>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="infoNoBackground" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="defaultNoBackground" justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
              }
              hover
              chartColor="blue"
              title="Active Users"
              text={
                <span>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 22%
                  </span>{" "}
                  increase in today's production.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 4 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              underChart={
                <div>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="infoNoBackground" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="defaultNoBackground" justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
              }
              hover
              chartColor="orange"
              title="Critical Events"
              text="Occured Last Week"
              statIcon={AccessTime}
              statText="more info in Events"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              }
              underChart={
                <div>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="infoNoBackground" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="defaultNoBackground" justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
              }
              hover
              chartColor="red"
              title="Tasks Failed"
              text="Today's Stats"
              statIcon={AccessTime}
              statText="more info in Task Console"
            />
          </ItemGrid>
        </GridContainer>  
        <GridContainer>
          <ItemGrid xs={12}>
            <IconCard
              icon={InfoOutline}
              title="Recent Events - Attention required"
              // iconColor="green"
              iconColor="orange"
              content={
                <GridContainer justify="space-between">
                  <ItemGrid xs={12} sm={12} md={12}>
                    <Table
                      tableData={this.state.data}
                    />
                  </ItemGrid>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
