import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import CustomTable from "components/CustomTable";
// import IconButton from "components/CustomButtons/IconButton.jsx";


// icons
import { FaRegClone as GroupIcon } from "react-icons/fa"
// import { FaTrash as Icon } from "react-icons/fa";
// import { FaEdit as Icon2 } from "react-icons/fa";


import addftpStyle from "assets/jss/material-dashboard-pro-react/components/addftpStyle";

class AddFtpProfile extends React.Component {

    render() {
        // const { classes } = this.props;
        const actions=(
            <div align="left">
            
                  { /* use this button to add a like kind of action */ }
                 
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
                    <GridContainer justify="center">
                        <ItemGrid xs={6}>
                            <form>
                                
                                <Grid container justify="space-around">
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="ftpname"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.ftpname ? this.props.values["ftpname"] : '',
                                                placeholder: "FTP Server",
                                                onChange: this.props.onChange('ftpname')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="port"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.port ? this.props.values["port"] : '',
                                                placeholder: "Port Number",
                                                onChange: this.props.onChange('port')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="username"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.username ? this.props.values["username"] : '',
                                                placeholder: "Username",
                                                onChange: this.props.onChange('username')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="password"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.password ? this.props.values["password"] : '',
                                                placeholder: "Password",
                                                type: "password",
                                                onChange: this.props.onChange('password')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="ftppath"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.ftppath ? this.props.values["ftppath"] : '',
                                                placeholder: "File Path",
                                                onChange: this.props.onChange('ftppath')
                                            }}
                                        />
                                    </Grid>
                                    
                                   
                                    
                                    <Grid item xs={11} sm={11} md={5} />
                                    <Grid item xs={11} sm={11} md={11}>
                                        <center><Button onClick={this.props.onUpload} color="warning">Add</Button></center>
                                    </Grid>
                                </Grid>
                               
                            </form>
                        </ItemGrid>
                    </GridContainer>
                </ItemGrid>
                <ItemGrid>
                    <IconCard
                        icon={GroupIcon}
                        title="List of FTP Profiles"
                        iconColor="red"
                        content={

                            <CustomTable columns={[
                                {
                                    Header: "FTP Name",
                                    accessor: "ftpname",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search FTP Name"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Port",
                                    accessor: "port",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Port Number"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Username",
                                    accessor: "username",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Username"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "FTP Path",
                                    accessor: "ftppath",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search FTP Path"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                // {
                                //     Header: "Actions",
                                //     accessor: "",
                                //     minWidth: 50,
                                //     Cell: row => (
                                //         <div>
                                //         <Icon2 className={classes.healthIconNormal} onClick={this.profileactivate}/>
                                //         &nbsp;
                                //           <Icon className={classes.healthIconDanger} />     
                                //       </div>
                                          
                                //       ) 
                                // }
                                {
                                    Header: "Actions",
                                    accessor: "actions",
                                    minWidth: 50,
                                    Cell: row => (
                                      actions
                                    ),
                                    
                                }
                            ]}
                                data={this.props.tableData}
                                height="45vh"
                                selected={this.props.tableRowSelected}
                                onSelect={this.props.onSelectTableRow}
                            />
                        }
                    />

                </ItemGrid>

            </GridContainer>
        );
    }
}

AddFtpProfile.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    tableRowSelected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onSelectTableRow: PropTypes.func.isRequired
};

export default withStyles(addftpStyle)(AddFtpProfile);