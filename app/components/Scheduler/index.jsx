import React from "react";
import PropTypes from "prop-types";

// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import FormControl from "material-ui/Form/FormControl";
import FormControlLabel from "material-ui/Form/FormControlLabel";
import InputLabel from "material-ui/Input/InputLabel";
import Radio from "@material-ui/core/Radio";

// material-ui-icons
import Today from "material-ui-icons/Today";
import FiberManualRecord from "material-ui-icons/FiberManualRecord";

// DateTime components
import DateUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider/*, TimePicker, DatePicker*/ } from 'material-ui-pickers';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import IconCard from "components/Cards/IconCard.jsx";

import schedulerStyle from "assets/jss/material-dashboard-pro-react/components/schedulerStyle";

class Scheduler extends React.Component {

    state = {
        isNow: true
    }

    handleChangeScheduleType = (isNow) => {
        this.setState({
            isNow
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <MuiPickersUtilsProvider utils={DateUtils}>
                <GridContainer>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={this.state.isNow}
                                    onChange={this.handleChangeScheduleType.bind(this, 1)}
                                    value="a"
                                    name="Schedule now"
                                    aria-label="A"
                                    icon={
                                        <FiberManualRecord
                                            className={classes.radioUnchecked}
                                        />
                                    }
                                    checkedIcon={
                                        <FiberManualRecord
                                            className={classes.radioChecked}
                                        />
                                    }
                                    classes={{
                                        checked: classes.radio
                                    }}
                                />
                            }
                            label="Deploy now"
                        />
                        <FormControlLabel
                            control={
                                <Radio
                                    checked={!this.state.isNow}
                                    onChange={this.handleChangeScheduleType.bind(this, 0)}
                                    value="later"
                                    name="schedule later"
                                    aria-label="A"
                                    icon={
                                        <FiberManualRecord
                                            className={classes.radioUnchecked}
                                        />
                                    }
                                    checkedIcon={
                                        <FiberManualRecord
                                            className={classes.radioChecked}
                                        />
                                    }
                                    classes={{
                                        checked: classes.radio
                                    }}
                                />
                            }
                            label="Deploy later"
                        />

                        {!this.state.isNow ? (
                            <IconCard
                                icon={Today}
                                iconColor="orange"
                                title="Schedule the deployment"
                                content={
                                    <div>
                                        <InputLabel className={classes.label}>
                                            Datetime
                                    </InputLabel>
                                        <br />
                                        <FormControl fullWidth>
                                            <Datetime
                                                inputProps={{ placeholder: "Pick Here" }}
                                            />
                                        </FormControl>
                                    </div>
                                }
                            />
                        ) : ""}
                    </ItemGrid>
                </GridContainer>
            </MuiPickersUtilsProvider>
        );
    }
}

Scheduler.propTypes = {
    classes: PropTypes.object.isRequired,
    scheduledDate: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default withStyles(schedulerStyle)(Scheduler);
