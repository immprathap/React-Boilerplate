import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import Datetime from "react-datetime";

// import {IoIosCheckmarkCircle as Statusnormal} from "react-icons/io";
// import {IoIosCloseCircle as Statuscritical} from "react-icons/io";
// import {IoIosWarning as Statuswarning} from "react-icons/io";
import { Warning as WarningIcon, Error as CriticalIcon, CheckCircle as NormalIcon } from "material-ui-icons";



// material-ui components
import withStyles from "material-ui/styles/withStyles";
import FormControl from "material-ui/Form/FormControl";
// import InputLabel from "material-ui/Input/InputLabel";
import Button from "components/CustomButtons/Button.jsx";
import AddAlert from "material-ui-icons/AddAlert";
//import Avatar from '@material-ui/core/Avatar';

// core components
import Snackbar from "components/Snackbar/Snackbar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";


import { events } from "variables/general.jsx";
import explorerStyle from "assets/jss/material-dashboard-pro-react/views/explorerStyle";


class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      pageSizeOptions: [100, 500, 1000],
      defaultPageSize: 100,
      data: events.dataRows.map((prop, key) => {
        return ({
          id: key,
          Eventdate: prop[0].toString(),
          NameorIP: prop[1],
          Source: prop[2],
          EventType: prop[3],
          EventData: prop[4],
          Severity: prop[5]
        })
      }),
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

  handleRetrived = (isDeployment) => {
      
    this.showNotification("success", "Events are fetched successfully");

  }

  handleUponClear = (isDeployment) => {
      
    this.showNotification("success", "Events are cleared successfully");

  }
  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
       
          <ItemGrid xs={12} sm={12} md={12}>


            <div align="center">
              {/* <InputLabel className={classes.label}>
                Event date
                                    </InputLabel> */}
              &nbsp; &nbsp; &nbsp;
                                        <FormControl >
                <Datetime
                  inputProps={{ placeholder: "Start date" }}
                />
              </FormControl>
              <FormControl >
                <Datetime
                  inputProps={{ placeholder: "End date" }}
                />
              </FormControl>
              &nbsp; &nbsp;
                                        <Button onClick={this.handleRetrived} color="info"  customClass={classes.marginRight}>
                Retrieve Events
                  </Button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <Button onClick={this.handleUponClear} color="danger" customClass={classes.marginRight}>
                Clear Log
                  </Button>


            </div>

           
                    <HeaderCardWithActions
                      headerColor="red"
                      cardTitle="Events"
                      cardSubtitle="List of Events"
                 
                          content={
                        <ReactTable
                          data={this.state.data}
                          filterable
                          defaultFilterMethod={(filter, row, column) => {
                            const id = filter.pivotId || filter.id;
                            if (typeof filter.value === "object") {
                              return row[id] !== undefined
                                ? filter.value.indexOf(row[id]) > -1
                                : true;
                            } else {
                              return row[id] !== undefined
                                ? String(row[id]).indexOf(filter.value) > -1
                                : true;
                            }
                          }}
                          columns={[
                            {
                              Header: "Severity",
                              accessor: "Severity",
                              minWidth: 50,
                              Cell: row => (
                                // <Avatar classes={{colorDefault: classes.avatarColorDefault}} className={classes.avatar}>
                                <div>
                                  
                                  
                                {row.value===0 ?(
                                  <div>
                                  {/* <Statusnormal  className={classes.healthIconNormal} /> */}
                                  <NormalIcon style={{color:'green'}}/>
                                  {" "}
                                  <label>Normal</label>
                                  </div>
                                ):
                                (
                                  row.value===1 ?(
                                    <div>
                                    {/* <Statuswarning  className={classes.healthIconAbnormal} /> */}
                                    <WarningIcon style={{color:'orange'}}/>
                                    {" "}
                                    <label>Warning</label>
                                    </div>
                                  ):
                                  (
                                      <div>
                                      {/* <Statuscritical  className={classes.healthIconDanger} /> */}
                                      <CriticalIcon color="error"/>
                                      {" "}
                                    <label>Critical</label>
                                    </div>
                                  )
                                    
                                )}
{/*                                    
                                    <div>
                                    <Statusnormal  className={row.value===0?classes.healthIconNormal:row.value===1?classes.healthIconAbnormal:classes.healthIconDanger} />
                                  <label>normal</label>
                                  </div>
                                  )} */}
                                </div>
                              
                                // </Avatar>
                              ),
                              filterMethod: (filter, row) => {
                                if (filter.value === "all") {
                                  return true;
                                }
                                if (filter.value === '0') {
                                  return row[filter.id] === 0;
                                }
                                else if (filter.value === '1') {
                                  return row[filter.id] === 1;
                                }
                                return row[filter.id] === 2;
                              },
                              Filter: ({ filter, onChange }) =>
                                <select
                                  onChange={event => onChange(event.target.value)}
                                  style={{ width: "100%" }}
                                  value={filter ? filter.value : "all"}
                                >
                                  <option value="all">All</option>
                                  <option value="0">Normal</option>
                                  <option value="1">Warning</option>
                                  <option value="2">Critical</option>
                                </select>
                            },
                            {
                              Header: "Event date",
                              accessor: "Eventdate",
                              minWidth: 50,
                              Filter: ({filter, onChange}) => (
                                <input type='text'
                                placeholder="Search Event date"
                                value={filter ? filter.value : ''}
                                onChange={event => onChange(event.target.value)}
                                />
                            )
                            },
                            {
                              Header: "Name or IP",
                              accessor: "NameorIP",
                              minWidth: 50,
                              Filter: ({filter, onChange}) => (
                                <input type='text'
                                placeholder="Search Name or IP"
                                value={filter ? filter.value : ''}
                                onChange={event => onChange(event.target.value)}
                                />
                            )
                            },
                            {
                              Header: "Source",
                              accessor: "Source",
                              minWidth: 50,
                              Filter: ({filter, onChange}) => (
                                <input type='text'
                                placeholder="Search Source"
                                value={filter ? filter.value : ''}
                                onChange={event => onChange(event.target.value)}
                                />
                            )
                            },
                            // {
                            //     Header: "Event Type",
                            //     accessor: "EventType",
                            //     minWidth: 50,
                            //     Filter: ({filter, onChange}) => (
                            //       <input type='text'
                            //       placeholder="Search Event Type"
                            //       value={filter ? filter.value : ''}
                            //       onChange={event => onChange(event.target.value)}
                            //       />
                            //   )
                            //   },
                              {
                                Header: "Event Data",
                                accessor: "EventData",
                                minWidth: 50,
                                Filter: ({filter, onChange}) => (
                                  <input type='text'
                                  placeholder="Search Event Data"
                                  value={filter ? filter.value : ''}
                                  onChange={event => onChange(event.target.value)}
                                  />
                              )
                              }
                              
                            
                          ]}
                          // defaultPageSize={10}
                          pageSizeOptions={this.state.pageSizeOptions}
                          defaultPageSize={this.state.defaultPageSize}
                          showPaginationTop={false}
                          showPaginationBottom
                          style={{
                            height: "61vh"
                          }}
                          
                        />
                      } />
                  
                
                
            
          </ItemGrid>
        </GridContainer>
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

Events.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(explorerStyle)(Events);
