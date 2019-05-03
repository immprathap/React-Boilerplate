import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Card from "material-ui/Card";
import CardContent from "material-ui/Card/CardContent";
import CardHeader from "material-ui/Card/CardHeader";
import Tabs from "material-ui/Tabs";
import Tab from "material-ui/Tabs/Tab";




import tabsWizardStyle from "assets/jss/material-dashboard-pro-react/components/tabsWizardStyle";

class TabsWizard extends React.Component {
  state = {
    value: 0
  };
  getTabsName = () => {
    return this.props.tabsName;
  }
  // getTabsIcon(step) {
  //   return this.props.tabsIcon[step];
  // }
  getTabs(step) {
    return this.props.tabs[step];
  }
  
 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, headerColor, title, rtlActive } = this.props;
    const cardHeader =
      classes.cardHeader +
      " " +
      classes[headerColor + "CardHeader"] +
      " " +
      cx({
        [classes.cardHeaderRTL]: rtlActive
      });
    const cardTitle =
      classes.cardTitle +
      " " +
      cx({
        [classes.cardTitleRTL]: rtlActive
      });
    const tabsContainer =
      classes.tabsContainer +
      " " +
      cx({
        [classes.tabsContainerRTL]: rtlActive
      });
    const tabWrapper =
      classes.tabWrapper +
      " " +
      cx({
        [classes.tabWrapperRTL]: rtlActive
      });
    // const tabIcon =
    //   classes.tabIcon +
    //   " " +
    //   cx({
    //     [classes.tabIconRTL]: rtlActive
    //   });
    const labelContainer = cx({ [classes.labelContainerRTL]: rtlActive });
    const labelIcon =
      classes.labelIcon +
      " " +
      cx({
        [classes.labelIconRTL]: rtlActive
      });

      const tabsName = this.getTabsName();
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: cardHeader,
            title: cardTitle,
            content: classes.cardHeaderContent
          }}
          title={title}
          action={
            <Tabs
              classes={{
                flexContainer: tabsContainer
              }}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorClassName={classes.displayNone}
              textColor="inherit"
            >
              {tabsName.map((prop, key) => {
                return (
                  <Tab
                    key={key}
                    classes={{
                      wrapper: tabWrapper,
                      rootLabelIcon: labelIcon,
                      label: classes.label,
                      rootInheritSelected: classes.rootInheritSelected,
                      labelContainer: labelContainer
                    }}
                    // icon={this.getTabsIcon(key) }
                    label={prop}
                  />
                );
              })}
            </Tabs>
          }
        />
        <CardContent>
          {tabsName.map((prop, key) => {
            if (key === this.state.value) {
              return (
                this.getTabs(key)  
              );
            }
            return null;
          })}
        </CardContent>
      </Card>
    );
  }
}

TabsWizard.defaultProps = {
  headerColor: "purple"
};

TabsWizard.propTypes = {
  tabsName: PropTypes.array,
  // tabsIcon: PropTypes.array,
  tabs: PropTypes.array,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose"
  ]),

  rtlActive: PropTypes.bool
};

export default withStyles(tabsWizardStyle)(TabsWizard);
