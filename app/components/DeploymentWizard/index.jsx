import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
// import StepIcon from "@material-ui/core/StepIcon";
import Typography from '@material-ui/core/Typography';

// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

/*
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import WavesIcon from "@material-ui/icons/Waves";
*/
import deploymentWizardStyle from "assets/jss/material-dashboard-pro-react/components/deploymentWizardStyle";

/*
const iconStep = {
  1: AccessAlarmIcon,
  2: FlightTakeoffIcon,
  3: WavesIcon
};

function StepIconComponent(props) {
  if (props.error || props.completed) {
    return <StepIcon {...props} />;
  }

  const Icon = iconStep[props.icon];

  return <Icon />;
}*/


class HorizontalNonLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
  };

  getSteps = () => {
    return this.props.steps;
  }

  getStepContent(step) {
    return this.props.stepsContent[step];
  }

  getStepDescription(step) {
    return this.props.stepsDescription[step];
  }

  totalSteps = () => this.getSteps().length;

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = this.getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step  key={label}>
              <StepLabel classes={{active:classes.stepLabelActive}} optional={<Typography variant="caption">{this.getStepDescription(index)}</Typography>}>{label}</StepLabel>

              <StepContent>
                {this.getStepContent(index)}
                <GridContainer>
                  <ItemGrid xs={4}>
                    {activeStep !== 0 ? (
                      <Button
                        variant="flat"
                        onClick={this.handleBack}
                        color="grey"
                        className={classes.button}
                      >
                        Back
                    </Button>) : ""}
                    {activeStep !== steps.length - 1 ? (
                      <Button
                        variant="flat"
                        color="info"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        Next
                    </Button>) : ""}
                    {activeStep === 0 ? (
                      <Button
                        variant="flat"
                        color="success"
                        onClick={this.props.onFinish.bind(this,0)}
                        className={classes.button}
                      >
                        Finish
                    </Button>
                    ) : ""}

                  </ItemGrid>
                </GridContainer>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep + 1 === steps.length && (
          <Paper square elevation={2} >
            <GridContainer justify="center">
              <ItemGrid xs="1">
                <Button variant="flat" onClick={this.props.onFinish.bind(this,1)} color="success" className={classes.button}>
                  Finish
            </Button>
              </ItemGrid>
            </GridContainer>
          </Paper>
        )}
      </div>
    );
  }
}

HorizontalNonLinearStepper.propTypes = {
  classes: PropTypes.object,
  steps: PropTypes.array,
  stepsContent: PropTypes.array,
  stepsDescription: PropTypes.array,
  onFinish: PropTypes.func
};

export default withStyles(deploymentWizardStyle)(HorizontalNonLinearStepper);
