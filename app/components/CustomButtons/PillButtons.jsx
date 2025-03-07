import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
//import SwipeableViews from "react-swipeable-views";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Tab from "material-ui/Tabs/Tab";
import Tabs from "material-ui/Tabs";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
//import Button from "components/CustomButtons/Button.jsx";

import pillButtonsStyle from "assets/jss/material-dashboard-pro-react/components/pillButtonsStyle.jsx";

class PillButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active ? props.active : false
    };
  }
  handleCloseTab = () => {
    this.setState({ active:false });
  };
  handleChange = (event, active) => {
    this.setState({ active });
  };
  handleChangeIndex = index => {
    this.setState({ active: index });
  };
  handleonclick = index => {
    this.setState({ active: index });
  };
  render() {
    const {
      classes,
      tabs,
      //direction,
      color,
      horizontal,
      alignCenter
    } = this.props;
    const flexContainerClasses =
      classes.flexContainer +
      " " +
      cx({
        [classes.horizontalDisplay]: horizontal !== undefined
      });
    const tabButtons = (
      <Tabs
        classes={{
          root: classes.root,
          fixed: classes.fixed,
          flexContainer: flexContainerClasses
        }}
        indicatorClassName="primary"
        value={this.state.active}
        //onChange={this.handleChange}
        centered={alignCenter}
      >
        {tabs.map((prop, key) => {
          var icon = {};
          if (prop.tabIcon !== undefined) {
            icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
          }
          const pillsClasses =
            classes.pills +
            " " +
            cx({
              [classes.horizontalPills]: horizontal !== undefined,
              [classes.pillsWithIcons]: prop.tabIcon !== undefined
            });
          return (
            <Tab
              label={prop.tabButton}
              key={key}
              {...icon}
              classes={{
                root: pillsClasses,
                labelContainer: classes.labelContainer,
                label: classes.label,
                rootInheritSelected: classes[color]
              }}
              onClick={prop.onclick}
            />
          );
        })}
      </Tabs>
    );
    /*const tabContent = (
      <div className={classes.contentWrapper}>
        <SwipeableViews
          axis={direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.active}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabs.map((prop, key) => {
            return (
              <div className={classes.tabContent} key={key}>
                <GridContainer justify="flex-end">
                  <ItemGrid xs={12} sm={1} md={1}>
                  <Button onClick={this.handleCloseTab} justIcon color="twitterNoBackground">
                        <i
                          className={
                            classes.socialButtonsIcons +
                            " " +
                            classes.marginRight +
                            " fa fa-times"
                          }
                        />
                      </Button>
                  </ItemGrid>
                </GridContainer>
                {prop.tabContent}
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );*/
    return horizontal !== undefined ? (
      <GridContainer justify="center">
        <ItemGrid {...horizontal.tabsGrid}>{tabButtons}</ItemGrid>
      </GridContainer>
    ) : (
        <div>
          {tabButtons}
          
        </div>
      );
  }
}

PillButtons.defaultProps = {
  //active: 0,
  color: "primary"
};

PillButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      //tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};

export default withStyles(pillButtonsStyle)(PillButtons);
