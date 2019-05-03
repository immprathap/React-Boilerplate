import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Card from "material-ui/Card";
import CardContent from "material-ui/Card/CardContent";
import CardHeader from "material-ui/Card/CardHeader";
import CardActions from "material-ui/Card/CardActions";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
import ChartistPluginLegend from "chartist-plugin-legend";

import headerCardWithActionsStyle from "assets/jss/material-dashboard-pro-react/components/headerCardWithActionsStyle.jsx";

function HeaderCardWithActions({ ...props }) {
  const {
    classes,
    headerColor,
    plainCard,
    cardTitle,
    cardSubtitle,
    cardActions,
    content,
    footer,
    footerAlign,
    hasChart,
    noHeader,
    chartInputs
  } = props;
  const plainCardClasses = cx({
    [" " + classes.cardPlain]: plainCard
  });
  const cardPlainHeaderClasses = cx({
    [" " + classes.cardPlainHeader]: plainCard
  });
  const cardFooterClasses =
    classes.cardActions +
    "  " +
    cx({
      [classes[footerAlign]]: footerAlign !== undefined
    });
  return (
    <Card className={classes.card + plainCardClasses}>
      <CardHeader
        /*classes={{
          root:
            classes.cardHeader +
            " " +
            classes[headerColor + "CardHeader"] +
            cardPlainHeaderClasses,
          title: classes.cardTitle,
          subheader: classes.cardSubtitle
        }}*/
        title={(
            <GridContainer justify="space-between">
              <ItemGrid xs={12} sm={4} md={5}>
                {/*<GridContainer direction="column" justify="space-between">
                <ItemGrid xs={12} sm={12} md={12}>
                  {cardTitle}
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                  <span className={classes.cardSubtitle}>{cardSubtitle}</span>
                </ItemGrid>
        </GridContainer>*/}
        {(!noHeader ? (
                <CardHeader
                  classes={{
                    root:
                      classes.cardHeader +
                      " " +
                      classes[headerColor + "CardHeader"] +
                      cardPlainHeaderClasses,
                    title: classes.cardTitle,
                    subheader: classes.cardSubtitle
                  }}
                  title={cardTitle}
                  subheader={cardSubtitle}
                />
        ):(""))}
              </ItemGrid>
              <ItemGrid xs={12} sm={6} md={6} lg={5}>
                {cardActions}
              </ItemGrid>
            </GridContainer>
        )}
      //subheader={cardSubtitle}
      />
      <CardContent className={classes.cardContent}>{content}</CardContent>
      {footer !== undefined ? (
        <CardActions className={cardFooterClasses}>{footer}</CardActions>
      ) : null}
    </Card>
  );
}

HeaderCardWithActions.defaultProps = {
  headerColor: "purple"
};

HeaderCardWithActions.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose"
  ]),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  cardActions: PropTypes.object,
  content: PropTypes.node,
  footer: PropTypes.node,
  footerAlign: PropTypes.oneOf(["left", "center", "right"]),
  hasChart: PropTypes.bool,
  noHeader: PropTypes.bool,
  chartInputs: PropTypes.object
};

export default withStyles(headerCardWithActionsStyle)(HeaderCardWithActions);
