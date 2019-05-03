import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// icons
import Check from "material-ui-icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import firmwareRestoreConfigStyle from "assets/jss/material-dashboard-pro-react/components/firmwareRestoreConfigStyle";

class FirmwareRestoreConfig extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <GridContainer direction="column">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.checkedRestoreConfiguration}
                            onClick={() => this.props.onHandleChange('restore_configuration')}
                            checkedIcon={
                                <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                                checked: classes.checked
                            }}
                        />
                    }
                    label="Restore Configuration"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.checkedForceUpdate}
                            onClick={() => this.props.onHandleChange('force_update')}
                            checkedIcon={
                                <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                                checked: classes.checked
                            }}
                        />
                    }
                    label="Force Update"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.checkedPatchUpdate}
                            onClick={() => this.props.onHandleChange('patch_update')}
                            checkedIcon={
                                <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                                checked: classes.checked
                            }}
                        />
                    }
                    label="Patch Update"
                />
            </GridContainer>
        );
    }
}

FirmwareRestoreConfig.propTypes = {
    classes: PropTypes.object.isRequired,
    checkedRestoreConfiguration: PropTypes.bool,
    checkedForceUpdate: PropTypes.bool,
    checkedPatchUpdate: PropTypes.bool,
    onHandleChange: PropTypes.func
};

export default withStyles(firmwareRestoreConfigStyle)(FirmwareRestoreConfig);