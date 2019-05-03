import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import Edit from "material-ui-icons/Edit";
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import CustomTable from "components/CustomTable";
import RegularCard from "components/Cards/RegularCard.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

// icons
import { FaRegClone as GroupIcon } from "react-icons/fa";
import Info from "material-ui-icons/Info";
import LocationOn from "material-ui-icons/LocationOn";
import Gavel from "material-ui-icons/Gavel";
import HelpOutline from "material-ui-icons/HelpOutline";
import Wifi from "material-ui-icons/Wifi";


import SettingWizardStyle from "assets/jss/material-dashboard-pro-react/components/firmwareUploadStyle";

class SettingsRepo extends React.Component {

    render() {
        // const { classes } = this.props;

        const actions=(
          <div align="left">
          
                { /* use this button to add a like kind of action */ }
                <IconButton
                  onClick={() => {
                   
                  }}
                  // color="primaryNoBackground"
                  customClass="edit">
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() => {
                    
                  }}
                  // color="dangerNoBackground"
                  customClass="delete">
                  <DeleteIcon />
                </IconButton>{" "}
                </div>
  )


        return (
            <GridContainer direction="column" justify="center">
                <ItemGrid>
                    <form>
                         <Grid container justify="space-around">
                            <Grid item xs={11} sm={11} md={10}>
                                <CustomInput
                                    id="Settings Name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        value: this.props.values.settings_name ? this.props.values["settings_name"] : '',
                                        placeholder:  "Name",
                                        onChange: this.props.onChange("settings_name")
                                    }}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11} md={10}>
                                <CustomInput
                                    id="Description"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        value: this.props.values.settings_desc ? this.props.values["settings_desc"] : '',
                                        placeholder: "Description",
                                        onChange: this.props.onChange('settings_desc')
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                               <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Display",
                  tabIcon: Info,
                  tabContent: (
                    <RegularCard
                      content={
                        <div>
                          <FormControlLabel
                          // classes={{
                          //   root: classes.checkboxLabelControl,
                          //   label: classes.checkboxLabel
                          // }}
                          control={
                            <Checkbox
                              value="acceptTerms"
                              color="primary"
                            />
                          }
                          label={
                            <label>
                             
                                Monitor1
                             
                            </label>
                          }
                        />
                         <FormControlLabel
                          // classes={{
                          //   root: classes.checkboxLabelControl,
                          //   label: classes.checkboxLabel
                          // }}
                          control={
                            <Checkbox
                              value="acceptTerms"
                              color="primary"
                            />
                          }
                          label={
                            <label>
                              
                                Monitor2
                              
                              
                            </label>
                          }
                        />
                          <br />
                          <FormControlLabel
                          // classes={{
                          //   root: classes.checkboxLabelControl,
                          //   label: classes.checkboxLabel
                          // }}
                          control={
                            <Radio
                              value="acceptTerms"
                              color="primary"
                            />
                          }
                          label={
                            <label>
                             
                                Auto detect screen size
                             
                             
                            </label>
                          }
                        />
                          <br />
                          <FormControlLabel
                          // classes={{
                          //   root: classes.checkboxLabelControl,
                          //   label: classes.checkboxLabel
                          // }}
                          control={
                            <Radio
                              value="acceptTerms"
                              color="Secondary"
                            />
                          }
                          label={
                            <label>
                             
                                Custom  screen size
                              
                            </label>
                          }
                        />
                        <br/>
                        
                        <ItemGrid xs={12} sm={6} md={5} lg={4}>
                          <CustomDropdown
                            dropdown
                            buttonColor="danger"
                            buttonText="Resolution"
                            buttonProps={{
                              round: true,
                              fullWidth: true,
                              style: { marginBottom: "0" }
                            }}
                            dropdownList={[
                              "1024 × 768",
                               "1280 × 1024"
                            ]}
                          />
                        </ItemGrid>
           
                         
                        </div>
                      }
                    />
                  )
                },
                {
                  tabButton: "Remote Resourse",
                  tabIcon: LocationOn,
                  tabContent: (
                    <RegularCard
                      cardTitle="Need to add"
                      
                      content={
                        <span>
                         
                        </span>
                      }
                    />
                  )
                },
                {
                  tabButton: "Date and Time",
                  tabIcon: Gavel,
                  tabContent: (
                    <RegularCard
                      cardTitle="Need to add"
                      content={
                        <span>
                         
                        </span>
                      }
                    />
                  )
                },
                {
                  tabButton: "Wifi",
                  tabIcon: Wifi,
                  tabContent: (
                    <RegularCard
                      cardTitle="Need to add"
                      content={
                        <span>
                          
                        </span>
                      }
                    />
                  )
                },
                {
                  tabButton: "more",
                  tabIcon: HelpOutline,
                  tabContent: (
                    <RegularCard
                      cardTitle="Need to add"
                      content={
                        <span>
                          
                        </span>
                      }
                    />
                  )
                },
              ]}
            />
                           </Grid>
                            <Grid item xs={11} sm={11} md={11}>
                                <center><Button onClick={this.props.onUpload} color="warning">Add</Button></center>
                            </Grid>
                        </Grid>
                    </form>
                </ItemGrid>
                <ItemGrid>
                    <IconCard
                        icon={GroupIcon}
                        title="List of Settings"
                        iconColor="red"
                        content={

                            <CustomTable columns={[
                                {
                                    Header: " Name",
                                    accessor: "name",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                      <input type='text'
                                             placeholder="Search Name"
                                             value={filter ? filter.value : ''}
                                             onChange={event => onChange(event.target.value)}
                                      />
                                    )
                                },
                                // {
                                //     Header: "Uploaded file",
                                //     accessor: "uploadedfile",
                                //     minWidth: 50
                                // },
                                {
                                    Header: "Description",
                                    accessor: "description",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                      <input type='text'
                                             placeholder="Search Description"
                                             value={filter ? filter.value : ''}
                                             onChange={event => onChange(event.target.value)}
                                      />
                                    )
                                },
                                {
                                    Header: "Actions",
                                    accessor: "actions",
                                    minWidth: 50,
                                    Cell: row => (
                                      actions
                                    ),
                                    
                                }]}
                                data={this.props.tableData}
                                selected={this.props.tableRowSelected}
                                onSelect={this.props.onSelectTableRow}
                                actions={actions}
                            />
                        }
                    />

                </ItemGrid>

            </GridContainer>
        );
    }
}

SettingsRepo.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(PropTypes.array).isRequired,
    tableRowSelected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onSelectTableRow: PropTypes.func.isRequired
};

export default withStyles(SettingWizardStyle)(SettingsRepo);