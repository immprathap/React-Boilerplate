import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
//import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from "material-ui/Radio";
import FiberManualRecord from "material-ui-icons/FiberManualRecord";
// icons
import Check from "material-ui-icons/Check";
import Checkbox from "material-ui/Checkbox";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import applycertificatestyle from "assets/jss/material-dashboard-pro-react/components/firmwareRestoreConfigStyle";

class CertificateApply extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <GridContainer direction="column">
      
        <Typography>Select the action to perform to the selected group of devices</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel shrik htmlFor="Certificate Type">Certificate Type</InputLabel>
          <Select
            style={{ width: 500 }}
            value={this.props.Certificate1Type ? this.props.Certificate1Type : ''}
            onChange={this.props.onchangecertificate('Certificate1Type')}
            inputProps={{
              name: 'Certificate Type',
              id: 'Certificate1Type',
            }}
          >
            <MenuItem value="Citrix Profile">Citrix Certificate</MenuItem>
            <MenuItem value="Microsoft Profile">Microsoft Certificate</MenuItem>
          </Select>
        </FormControl>
        {this.props.Certificate1Type === "Microsoft Profile" ? (
          <div>
            <FormControlLabel
              control={
                <Radio
                  //checked={this.state.selectedEnabled === "a"}
                  // onChange={this.handleChangeEnabled}
                  value="a"
                  name="radio button enabled"
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
              classes={{
                label: classes.label
              }}
              label="Ignore certificate"
            />
            <Typography >
              The selected group already ignores the certificate views.Choose Revoke certificate before deploying the settings to the groups.
                                              </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  // onClick={() => this.handleToggle(4)}
                  checkedIcon={
                    <Check className={classes.checkedIcon} />
                  }
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Second Checkbox"
            />
          </div>

        ) : (
            <div>
              {this.props.Certificate1Type === "Citrix Profile" ? (
                <div>
                  <FormControlLabel
                    control={
                      <Radio
                        //checked={this.state.selectedEnabled === "a"}
                        // onChange={this.handleChangeEnabled}
                        value="a"
                        name="radio button enabled"
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
                    classes={{
                      label: classes.label
                    }}
                    label="Apply certificate"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        // checked={this.state.selectedEnabled === "a"}
                        // onChange={this.handleChangeEnabled}
                        value="a"
                        name="radio button enabled"
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
                    classes={{
                      label: classes.label
                    }}
                    label="Clear certificate"
                  /></div>
              ) : (<div></div>)
              }

            </div>

          )}
      </GridContainer>
    );
  }
}

CertificateApply.propTypes = {
  classes: PropTypes.object.isRequired,
  checkedRestoreConfiguration: PropTypes.bool,
  checkedForceUpdate: PropTypes.bool,
  checkedPatchUpdate: PropTypes.bool,
  onHandleChange: PropTypes.func
};

export default withStyles(applycertificatestyle)(CertificateApply);