/*eslint-disable*/
import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
import ChartistPluginLegend from "chartist-plugin-legend";

// @material-ui components
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';

// icons
import Refresh from "material-ui-icons/Refresh";
import Edit from "material-ui-icons/Edit";
import ArrowUpward from "material-ui-icons/ArrowUpward";
import AccessTime from "material-ui-icons/ArrowUpward";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import ChartCard from "components/Cards/ChartCard.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import { withStyles } from "material-ui";

import fixedPluginStyle from "assets/jss/material-dashboard-pro-react/components/fixedPluginStyle";
import "assets/css/fixedPluginStyle.css";

var chartLabels = [{label:"Running", totalItems: 5}, {label: "Success", totalItems: 3}, {label: "Failed", totalItems: 2}];

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
      bg_checked: true,
      bgImage: this.props.bgImage,
      chartLabels:['Running', 'Success', 'Failed']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }
  render() {
    const { classes } = this.props;
    return (
      <div
        className={classnames("fixed-plugin", {
          "rtl-fixed-plugin": this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <Tooltip title="Tasks" aria-label="tasks">
            <div style={{ cursor: "pointer" }} onClick={this.handleClick}>
              <i className="fa fa-list-alt fa-2x" style={{ color: "white", padding: "5px 0" }} />
            </div>
          </Tooltip>
          <ul className="dropdown-menu">
            <li className="header-title">
              <Typography classes={{ root: classes.taskHeader }} variant="h6">TASKS</Typography>
            </li>
            <li className="chart">
              <GridContainer>
                <ItemGrid xs={12} sm={12} md={12}>
                  <ChartistGraph
                    className="ct-chart-white-colors"
                    data={{
                      series: [{
                        value: 50,
                        className: "pie-running-task"
                      },
                      {
                        value: 30,
                        className: "pie-suceeded-task"
                      },
                      {
                        value: 20,
                        className: "pie-failed-task"
                      }
                      ],
                    }}
                    type="Pie"
                    options={{
                      donut: true,
                      donutWidth: 15,
                      total: 100,
                      showLabel: true,
                      stackBars: true,
                       labelInterpolationFnc: function(value, idx) {
                         var percentage = Math.round(value / 100 * 100) + '%';
                         return chartLabels[idx].totalItems + ' ' + chartLabels[idx].label + ' (' + percentage + ')';
                       }
                    }}
                  />
                </ItemGrid>
              </GridContainer>
            </li>
            <li className="task-list-parent">
              {this.props.taskList}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FixedPlugin.propTypes = {
  taskList: PropTypes.object.isRequired,
}

export default withStyles(fixedPluginStyle)(FixedPlugin);
