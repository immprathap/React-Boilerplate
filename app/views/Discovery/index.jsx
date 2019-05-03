import React from "react";

// material-ui icons
// import BugReport from "material-ui-icons/BugReport";
// import Code from "material-ui-icons/Code";
// import Cloud from "material-ui-icons/Cloud";
// import Search from "material-ui-icons/Search";
import Grid from '@material-ui/core/Grid';
import Typography from "material-ui/Typography";
import withStyles from "material-ui/styles/withStyles";
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";
import Search from "material-ui-icons/Search";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import TabsWizard from "components/TabsWizard";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomTable from "components/CustomTable";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

// icons
// import { FaTrash as Icon } from "react-icons/fa";
// import { FaSearch as Icon2 } from "react-icons/fa";
import AddAlert from "material-ui-icons/AddAlert";

import discoveryStyle from "assets/jss/material-dashboard-pro-react/views/discoveryStyle";

import { StartIpEndIp, SubnetPrefix, IPs } from "variables/general.jsx";



class Discovery extends React.Component {
    state = {
        alert: {
            isShowAlert: false
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            
            StartIpEndIp: StartIpEndIp.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    StartIP: prop[0],
                    EndIP: prop[1],
                })
            }),
            newStartIpEndIp: [],
            SubnetPrefix: SubnetPrefix.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    StartIP: prop[0],
                    Subnet: prop[1],
                })
            }),
            newSubnetPrefix: [],
            IPs: IPs.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    StartIP: prop[0],
                })
            }),
            newIPs: []
        };
    }
    showNotification(type, message) {
        //if (!this.state[alert]) {
        var x = {};
        x[alert] = { isShowAlert: true, color: type, message: message }
        this.setState({
            alert: { isShowAlert: true, color: type, message: message }
        });
        setTimeout(
            this.destroyNotification.bind(this),
            6000,
            type,
            message
        );
    }
    
    destroyNotification = (type, message) => {
        var x = { alert: { isShowAlert: false, color: type, message: message } };
        this.setState(x);
    }
    
    handleSelectIP = (rowInfo) => {
        this.setState({
            selectedIP: rowInfo.index
        })
    }
    
    
    
    handleStartIpEndIpChange = name => event => {
        var newStartIpEndIp = this.state.newStartIpEndIp;
        newStartIpEndIp[name] = event.target.value;
        this.setState({
            newStartIpEndIp
        });
    }
    handleSubnetPrefixChange = name => event => {
        var newSubnetPrefix = this.state.newSubnetPrefix;
        newSubnetPrefix[name] = event.target.value;
        this.setState({
            newSubnetPrefix
        });
    }
    handleIPsChange = name => event => {
        var newIPs = this.state.newIPs;
        newIPs[name] = event.target.value;
        this.setState({
            newIPs
        });
    }
    
    handleStartIpEndIpUpload = () => {
        const { StartIpEndIp, newStartIpEndIp} = this.state;
        var newStartIpEndIplist = StartIpEndIp;
        newStartIpEndIplist.unshift({StartIP: newStartIpEndIp['StartIP'], EndIP: newStartIpEndIp['EndIP'],   uploadedon: new Date().toLocaleString()})
        this.setState({
            StartIpEndIp: newStartIpEndIplist
        });
    }
    handleSubnetPrefixUpload = () => {
        const { SubnetPrefix, newSubnetPrefix} = this.state;
        var newSubnetPrefixlist = SubnetPrefix;
        newSubnetPrefixlist.unshift({StartIP: newSubnetPrefix['StartIP'], Subnet: newSubnetPrefix['Subnet'],  uploadedon: new Date().toLocaleString()})
        this.setState({
            SubnetPrefix: newSubnetPrefixlist
        });
    }
    handleIPsUpload = () => {
        const { IPs, newIPs} = this.state;
        var newIPslist = IPs;
        newIPslist.unshift({StartIP: newIPs['StartIP'], uploadedon: new Date().toLocaleString()})
        this.setState({
            IPs: newIPslist
        });
    }
    
    
    handleStepperFinished = (isDeployment) => {
        this.showNotification("success", "Discovery has been started in background");
    }
  render() {
    //   const classes=this.props;
      const actions=(
        <div align="left">
        
              { /* use this button to add a like kind of action */ }
              <IconButton
                onClick={() => {
                 
                }}
                // color="primaryNoBackground"
                customClass="edit">
                <Search />
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
    const startIpEndIp = (
        <Typography component="div">
                  <GridContainer justify="center" direction="column">
                        <ItemGrid xs={12} sm={12} md={12}>
                        <HeaderCardWithActions
                        noHeader={true}
                        //   headerColor="purple"
                        // //   cardTitle="Discovery"
                        //   cardSubtitle="Start IP Address - End IP Address"
                        content={
                            
                                <GridContainer direction="column" justify="center">
                                <ItemGrid>
                                    <GridContainer justify="center">
                                        <ItemGrid xs={6}>
                                        <form>
                                            <Grid container justify="space-around">
                                                <Grid item xs={11} sm={11} md={10}>
                                                    <CustomInput
                                                        id="StartIP"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            value: this.state.newStartIpEndIp.StartIP ? this.state.newStartIpEndIp["StartIP"] : '',
                                                            placeholder: "Start IP Address",
                                                            onChange: this.handleStartIpEndIpChange('StartIP')
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={11} sm={11} md={10}>
                                                    <CustomInput
                                                        id="EndIP"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            value: this.state.newStartIpEndIp.EndIP ? this.state.newStartIpEndIp["EndIP"] : '',
                                                            placeholder: "End IP Address",
                                                            onChange: this.handleStartIpEndIpChange('EndIP')
                                                        }}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={11} sm={11} md={5} />
                                                <Grid item xs={11} sm={11} md={11}>
                                                    <center><Button onClick={this.handleStartIpEndIpUpload} color="warning">Add</Button></center>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    
                                        </ItemGrid>
                                    </GridContainer>
                                </ItemGrid>
                                <ItemGrid>
                                <CustomTable columns={[
                                                {
                                                    Header: "Start IP",
                                                    accessor: "StartIP",
                                                    minWidth: 50,
                                                    Filter: ({filter, onChange}) => (
                                                        <input type='text'
                                                        placeholder="Search Start IP"
                                                        value={filter ? filter.value : ''}
                                                        onChange={event => onChange(event.target.value)}
                                                        />
                                                    )
                                                },
                                                {
                                                    Header: "End IP",
                                                    accessor: "EndIP",
                                                    minWidth: 50,
                                                    Filter: ({filter, onChange}) => (
                                                        <input type='text'
                                                        placeholder="Search End IP"
                                                        value={filter ? filter.value : ''}
                                                        onChange={event => onChange(event.target.value)}
                                                        />
                                                    )
                                                },
                                                {
                                                    Header: "Actions",
                                                    accessor: "",
                                                    minWidth: 50,
                                                    Cell: row => (
                                                    //     <div style={{display: 'flex', justifyContent: 'center'}}>
                                                    //     <Icon2  className={classes.grey} onClick={this.profileactivate}/>
                                                    //     &nbsp;
                                                    //     <Icon  className={classes.grey}/>     
                                                    // </div>
                                                    actions
                                                        
                                                    ) 
                                                }]}
                                                data={this.state.StartIpEndIp}
                                                height="45vh"
                                                selected={this.state.selectedIP}
                                                onSelect={this.handleSelectIP}
                                            />
                                            </ItemGrid>
                                </GridContainer>
                        }
                        />
                        </ItemGrid>
                        </GridContainer>
                </Typography>
    );
    const startIpSubnetPrefix = (
        <Typography component="div">
                  <GridContainer justify="center" direction="column">
                        <ItemGrid xs={12} sm={12} md={12}>
                        <HeaderCardWithActions
                        noHeader={true}
                        //   headerColor="purple"
                        //   cardTitle="Discovery"
                        //   cardSubtitle="IP Address - SubnetPrefix"
                        content={
                            
                                <GridContainer direction="column" justify="center">
                                <ItemGrid>
                                    <GridContainer justify="center">
                                        <ItemGrid xs={6}>
                                        <form>
                                            <Grid container justify="space-around">
                                                <Grid item xs={11} sm={11} md={10}>
                                                    <CustomInput
                                                        id="StartIP"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            value: this.state.newSubnetPrefix.StartIP ? this.state.newSubnetPrefix["StartIP"] : '',
                                                            placeholder: "Start IP Address",
                                                            onChange: this.handleSubnetPrefixChange('StartIP')
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={11} sm={11} md={10}>
                                                <CustomInput
                                                        id="SubnetPrefix"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            value: this.state.newSubnetPrefix.Subnet ? this.state.newSubnetPrefix["Subnet"] : '',
                                                            placeholder: "Subnet Prefix",
                                                            onChange: this.handleSubnetPrefixChange('Subnet')
                                                        }}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={11} sm={11} md={5} />
                                                <Grid item xs={11} sm={11} md={11}>
                                                    <center><Button onClick={this.handleSubnetPrefixUpload} color="warning">Add</Button></center>
                                                </Grid>
                                            </Grid>
                                        </form>
                                  
                                        </ItemGrid>
                                    </GridContainer>
                                </ItemGrid>
                                <ItemGrid>
                                <CustomTable columns={[
                                                {
                                                    Header: "Start IP",
                                                    accessor: "StartIP",
                                                    minWidth: 50,
                                                    Filter: ({filter, onChange}) => (
                                                        <input type='text'
                                                        placeholder="Search Start IP"
                                                        value={filter ? filter.value : ''}
                                                        onChange={event => onChange(event.target.value)}
                                                        />
                                                    )
                                                },
                                                {
                                                    Header: "Subnet Prefix",
                                                    accessor: "Subnet",
                                                    minWidth: 50,
                                                    Filter: ({filter, onChange}) => (
                                                        <input type='text'
                                                        placeholder="Search Subnet"
                                                        value={filter ? filter.value : ''}
                                                        onChange={event => onChange(event.target.value)}
                                                        />
                                                    )
                                                },
                                                {
                                                    Header: "Actions",
                                                    accessor: "",
                                                    minWidth: 50,
                                                    Cell: row => (
                                                    //     <div style={{display: 'flex', justifyContent: 'center'}}>
                                                    //     <Icon2 className={classes.grey} onClick={this.profileactivate}/>
                                                    //     &nbsp;
                                                    //     <Icon className={classes.grey} />     
                                                    // </div>
                                                    actions  
                                                    ) 
                                                }]}
                                                data={this.state.SubnetPrefix}
                                                height="45vh"
                                                selected={this.state.selectedIP}
                                                onSelect={this.handleSelectIP}
                                            />
                                            </ItemGrid>
                                </GridContainer>
                        }
                        />
                        </ItemGrid>
                        </GridContainer>
                </Typography>
    );
    const singleIp = (
        <Typography component="div">
                  <GridContainer justify="center" direction="column" >
                        <ItemGrid xs={12} sm={12} md={12}>
                        <HeaderCardWithActions
                        noHeader={true}
                        //   headerColor="purple"
                        // //   cardTitle="Discovery"
                        //   cardSubtitle="Single IP Address"
                        content={
                            
                                <GridContainer direction="column" justify="center">
                                <ItemGrid>
                                    <GridContainer justify="center">
                                        <ItemGrid xs={6}>
                                        <form>
                                    <Grid container justify="space-around">
                                        <Grid item xs={11} sm={11} md={10}>
                                            <CustomInput
                                                id="StartIP"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.newIPs.StartIP ? this.state.newIPs["StartIP"] : '',
                                                    placeholder: "IP Address",
                                                    onChange: this.handleIPsChange('StartIP')
                                                }}
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={11} sm={11} md={5} />
                                        <Grid item xs={11} sm={11} md={11}>
                                            <center><Button onClick={this.handleIPsUpload} color="warning">Add</Button></center>
                                        </Grid>
                                    </Grid>
                                </form>
                                   
                                        </ItemGrid>
                                    </GridContainer>
                                </ItemGrid>
                                <ItemGrid>
                                <CustomTable columns={[
                                               {
                                                Header: "IP",
                                                accessor: "StartIP",
                                                minWidth: 50,
                                                Filter: ({filter, onChange}) => (
                                                    <input type='text'
                                                    placeholder="Search Start IP"
                                                    value={filter ? filter.value : ''}
                                                    onChange={event => onChange(event.target.value)}
                                                    />
                                                )
                                            },
                                            {
                                                Header: "Actions",
                                                accessor: "",
                                                minWidth: 50,
                                                Cell: row => (
                                                    // <div style={{display: 'flex', justifyContent: 'center'}}>
                                                    // <Icon2 className={classes.grey}  onClick={this.profileactivate}/>
                                                    // &nbsp;
                                                    // <Icon  className={classes.grey} />     
                                                // </div>
                                                actions 
                                                ) 
                                            }]}
                                            data={this.state.IPs}
                                            height="45vh"
                                            selected={this.state.selectedIP}
                                            onSelect={this.handleSelectIP}
                                            />
                                            </ItemGrid>
                                </GridContainer>
                        }
                        />
                        </ItemGrid>
                        </GridContainer>
                </Typography>
    );
    return (
      <div>
        <GridContainer>
          
          <ItemGrid xs={12} sm={12} md={12}>
            <TabsWizard
              headerColor="rose"
              title="Discovery:"
              tabsName={['Start IP - End IP', 'IP Address - Subnet Prefix', 'Single IP Address']}
            //   tabsIcon={[Search, Search, Search]}
              tabs={[
                startIpEndIp,
                startIpSubnetPrefix,
                singleIp
              ]}
            />
          </ItemGrid>
        </GridContainer>
        <Grid container justify="space-around">
                                    
            <Grid item xs={11} sm={11} md={5} />
            <Grid item xs={11} sm={11} md={11}>
                <center><Button onClick={this.handleStepperFinished} color="success">Discover</Button></center>
            </Grid>
        </Grid>
        <Snackbar
                    place="bl"
                    color={this.state.alert && this.state.alert.color ? this.state.alert.color : undefined}
                    icon={AddAlert}
                    message={this.state.alert && this.state.alert.message ? this.state.alert.message : ''}
                    open={this.state.alert && this.state.alert.isShowAlert ? this.state.alert.isShowAlert : false}
                    closeNotification={() => this.setState({ alert: { isShowAlert: false } })}
                    close
                />
      </div>
    );
  }
}

export default withStyles(discoveryStyle) (Discovery);

