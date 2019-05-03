import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";

// material-ui-icons
import PowerIcon from "material-ui-icons/PowerSettingsNew";
//import LockIcon from "material-ui-icons/Lock";
// import { IoMdLock as LockIcon } from "react-icons/io";
import LockIcon from "material-ui-icons/LockOpen";
import { TiKeyOutline as KeyIcon } from "react-icons/ti";
//import KeyIcon from "material-ui-icons/VpnKey";
import ResetIcon from "material-ui-icons/SettingsBackupRestore";
//import SaveIcon from "material-ui-icons/Save";
//import RemoteScreenIcon from 'material-ui-icons/ScreenShare';
// import { IoMdHeartEmpty as HealthEmptyIcon } from "react-icons/io";
// import { IoMdHeartHalf as HealthHalfIcon } from "react-icons/io";
// import { IoMdHeart as HealthFullIcon } from "react-icons/io";
import { FaRegFilePdf as SaveIcon, FaRegShareSquare as RemoteScreenIcon } from "react-icons/fa";
import { IoMdRadioButtonOn as Status } from "react-icons/io";
import Tooltip from '@material-ui/core/Tooltip';
import AddAlert from "material-ui-icons/AddAlert";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';
import Checkbox from "@material-ui/core/Checkbox";
import Edit from "material-ui-icons/Edit";
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';

// MUI Datatable
import MUIDataTable from "mui-datatables";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import PillButtons from "components/CustomButtons/PillButtons.jsx";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";
import ThinClientInfo from "components/ThinClientInfo";
import Dialogue from "components/Dialogue/dialogue.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";

// Redux

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector, createSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { tcGroupsRequest } from './actions';
import { makeSelectTcGroups, makeSelectIsLoading, makeSelectIsTcByGroupFetched } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { toJS } from "immutable";

// utils
import PdfFactory from "utils/PdfFactory.jsx"

import { thinClients } from "variables/general.jsx";
import explorerStyle from "assets/jss/material-dashboard-pro-react/views/explorerStyle";
import "assets/css/explorerStyle.css";

class Explorer extends React.Component {
  state = {
    isTCInfoOpen: false,
    searchText: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      dataRow: 5,
      pageSizeOptions: [100, 500, 1000],
      defaultPageSize: 100,
      alert: {
        isShowAlert: false
      },
      /*data: thinClients.dataRows.map((prop, key) => {
        return ({
          id: key,
          name: prop[0],
          ipaddress: prop[1],
          macaddress: prop[2],
          health: prop[3],
          devicestatus: prop[8],
          serialno: prop[9],
          vmname: prop[10],
          username: prop[11],
		  remoteshadow: false
        })
      }),*/
      isTCInfoOpen: false,
      key: null,
      openPower: null,
      openLock: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(tcGroupsRequest());
  }

  handleFetch = () => {
    const { dispatch } = this.props;
    dispatch(tcGroupsRequest());
  }

  handleThinClientInfoOpen = (param) => {
    this.setState({ dataRow: param });
    this.setState({
      isTCInfoOpen: true,
    });
  };

  handleThinClientInfoClose = () => {
    this.setState({
      isTCInfoOpen: false
    });

  };
  successPoweroff = () => {
    this.setState({
      alert: null
    });
  }
  hideAlert = () => {
    this.setState({
      alert: null
    });
  }
  handlePowerAction = (e) => {
    this.setState({
      popupopen: true,
      key: e,
      openPower: null
    });
  }
  handlePopupActions = (e) => {
    switch (e) {
      case "poweron":
        this.showNotification("success", "Power on action has been started as a background task.  Please check the task console for progress information");
        break;
      case "poweroff":
        this.showNotification("success", "Power off action has been started as a background task.  Please check the task console for progress information");
        break;
      case "restart":
        this.showNotification("success", "Restart action has been started as a background task.  Please check the task console for progress information");
        break;
      case "lock":
        this.showNotification("success", "Lock action has been started as a background task.  Please check the task console for progress information");
        break;
      case "unlock":
        this.showNotification("success", "Unlock action has been started as a background task.  Please check the task console for progress information");
        break;
      case "password":
        this.showNotification("success", "Password change action has been started as a background task.  Please check the task console for progress information");
        break;
      case "Factoryreset":
        this.showNotification("success", "Factory Reset action has been started as a background task.  Please check the task console for progress information");
        break;
      case "Save":
        //this.showNotification("success", "Save action completed successfully");
        const printData = this.state.ScmGroupSortedData;
        var columns = [{ title: "Name", dataKey: "name" }, { title: "Serial #", dataKey: "serialno" }, { title: "IP", dataKey: "ipaddress" }, { title: "MAC", dataKey: "macaddress" }, { title: "State", dataKey: "health" }, { title: "Device status", dataKey: "devicestatus" }, { title: "VM Name", dataKey: "vmname" }, { title: "Username", dataKey: "username" }];

        const device_states = ["Reachable", "Busy", "UnReachable"];
        const device_status = ["Lock", "Login", "Reboot", "FW Downloaded", "FW Initialize", "FW Installing", "FW Success", "FW Failed"];
        var rows = printData.map((data, index) => {
          return (
            {
              name: data._original.name,
              serialno: data._original.serialno,
              ipaddress: data._original.ipaddress,
              macaddress: data._original.macaddress,
              health: device_states[data._original.health],
              devicestatus: device_status[data._original.devicestatus],
              vmname: data._original.vmname,
              username: data._original.username
            }
          )
        });
        var createPdf = new PdfFactory(columns, rows, 'Thin client list');
        createPdf.GeneratePdf();

        break;

      default:
        this.showNotification("failure", "Power on action has been started as a background task.Please check the task console for progress information");

    }
    this.setState({
      popupopen: false
    });


  }

  handleTogglePower = (event) => {
    this.setState({ openPower: event.currentTarget });
    //this.setState(state => ({ openPower: !state.openPower }));
  };
  handleToggleLock = (event) => {
    this.setState({ openLock: event.currentTarget });
  };

  handleLockCloseMenu = event => {
    // if (this.anchorEl.contains(event.target)) {
    // return;
    // }

    this.setState({ openLock: null });
  };

  handlePowerCloseMenu = event => {
    // if (this.anchorEl.contains(event.target)) {
    // return;
    // }

    this.setState({ openPower: null });
  };

  handleClose = () => {
    this.setState({
      popupopen: false
    });
  }



  handlePasswordChangeAction = (e) => {
    this.setState({
      popupopen: true,
      key: e
    });


  }
  handleLockAction = (e) => {
    this.setState({
      popupopen: true,
      key: e,
      openLock: null
    });

  }
  handleResetFactoryAction = (e) => {
    this.setState({
      popupopen: true,
      key: e
    });

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

  handleChange = name => event => {
    console.log("searchText", event.target.value);
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, isLoading, isTcByGroupFetched, tcListByGroups } = this.props;
    const { dtBusy } = this.state;
    let tcListByGroupsAsJS = tcListByGroups.toJS();
    console.log("dtBusy", dtBusy);
    const loading = (
      <LinearProgress color="secondary" />
    );

    const actions = (
      <div align="left">

        { /* use this button to add a like kind of action */}
        <IconButton
          onClick={() => {

          }}
              // color="primaryNoBackground"
              /* customClass="edit" */ >
          <Edit className={classes.muiIconStyle} />
        </IconButton>
        <IconButton
          onClick={() => {

          }}
              // color="dangerNoBackground"
              /* customClass="delete" */ >
          <DeleteIcon className={classes.muiIconStyle} />
        </IconButton>{" "}
      </div>
    );

    var tabContent = [];

    const columns = [
      {
       name: "_id",
       label: "Serial number",
       options: {
        filter: false,
        sort: false,
       }
      },
      {
       name: "name",
       label: "Name",
       options: {
        filter: false,
        sort: true,
       }
      },
      {
       name: "mac",
       label: "MAC",
       options: {
        filter: false,
        sort: false,
       }
      },
      {
       name: "state",
       label: "State",
       options: {
        filterType: 'multiselect',
        filter: true,
        sort: true,
       }
      },
     ];

    const data = [
      ["Joe James", "Test Corp", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "Tampa", "FL"],
      ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
      fizedHeader: true,
      filterType: 'checkbox',
      rowsPerPageOptions:[100,500,1000],
      selectableRows:"none"/*,
      onSearchChange: () => {
        this.setState({dtBusy:true})
      },
      onTableChange: (action, tableState) => {
        this.setState({dtBusy:false})
      }*/
    };

    const temprender = (
      <div>
        <TextField
          id="standard-name"
          label="Search"
          value={this.state.searchText}
          onChange={this.handleChange('searchText')}
          margin="normal"
        />
      <Button>Filter</Button>
      {/*<MUIDataTable
        title={"Default Group"}
        data={tcListByGroupsAsJS.Default}
        columns={columns}
        options={options}
        responsive='scroll'
      />*/}
      </div>
    );

    if (isTcByGroupFetched) {
      tabContent.push(
        {
          //tabButton: (<span>Default<span className={classes.devicesBatch}>{thinClients.dataRows.length}</span></span>),
          tabButton: (<span>Default ({tcListByGroupsAsJS.Default.length})</span>),
          tabContent: (
            <HeaderCardWithActions
              headerColor="red"
              cardTitle="Default"
              cardSubtitle="Group of Default ThinClients"
              hasChart={false}
              chartInputs={{
                labels: ["Reachable", "Unreachable", "Busy"],
                values: [{ value: 15, className: "pie-health-normal" }, { value: 26, className: "pie-health-warning" }, { value: 4, className: "pie-health-critical" }]
              }}
              cardActions={(
                <div>
                  <PillButtons
                    color="warning"
                    alignCenter
                    tabs={[
                      {
                        tabButton: "Power",
                        tabIcon: PowerIcon,
                        onclick: this.handlePowerAction.bind(this, "power")
                      },
                      {
                        tabButton: "Lock",
                        tabIcon: LockIcon,
                        onclick: this.handleLockAction.bind(this, "Lock")
                      },
                      {
                        tabButton: "Password",
                        tabIcon: KeyIcon,
                        onclick: this.handlePasswordChangeAction.bind(this, "password")
                      },
                      {
                        tabButton: "Factory Reset",
                        tabIcon: ResetIcon,
                        onclick: this.handleResetFactoryAction.bind(this, "FactoryReset")
                      },
                      {
                        tabButton: "Save",
                        tabIcon: SaveIcon,
                        onclick: this.handlePopupActions.bind(this, "Save")
                      }
                    ]}
                  />

                </div>
              )}
              content={
                <ReactTable
                  data={tcListByGroupsAsJS.Default}
                  filterable
                  defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id;
                    return (
                      row[id] !== undefined ?
                        String(row[id]).indexOf(filter.value) > -1
                        :
                        true
                    );
                  }}
                  columns={[
                    {
                      Header: "Name",
                      headerClassName: classes.headerstyle,
                      accessor: "name",
                      minWidth: 30,
                      Filter: ({ filter, onChange }) => (
                        <input type='text'
                          placeholder="Search Name"
                          value={filter ? filter.value : ''}
                          onChange={event => onChange(event.target.value)}
                        />
                      )
                    },
                    {
                      Header: "MAC",
                      headerClassName: classes.headerstyle,
                      accessor: "mac",
                      minWidth: 30,
                      Filter: ({ filter, onChange }) => (
                        <input type='text'
                          placeholder="Search Serial Number"
                          value={filter ? filter.value : ''}
                          onChange={event => onChange(event.target.value)}
                        />
                      )
                    },
                    {
                      Header: "IP Address",
                      headerClassName: classes.headerstyle,
                      accessor: "ip",
                      minWidth: 30,
                      Filter: ({ filter, onChange }) => (
                        <input type='text'
                          placeholder="Search IP Address"
                          value={filter ? filter.value : ''}
                          onChange={event => onChange(event.target.value)}
                        />
                      )
                    },
                    {
                      Header: "Device State",
                      headerClassName: classes.headerstyle,
                      accessor: "status",
                      minWidth: 30,

                      Cell: row => (
                        <div>
                          <Status />
                          {" "}
                          <label style={{ color: 'black' }}>
                            {row.value}
                          </label>
                        </div>
                      ),
                      filterMethod: (filter, row) => {
                        if (filter.value === "all") {
                          return true;
                        }
                        if (filter.value === '0') {
                          return row[filter.id] === 'online';
                        }
                        else if (filter.value === '1') {
                          return row[filter.id] === 'offline';
                        }
                        else if (filter.value === '2') {
                          return row[filter.id] === 'warning';
                        }
                        return false;
                      },
                      Filter: ({ filter, onChange }) =>
                        <select
                          onChange={event => onChange(event.target.value)}
                          style={{ width: "100%" }}
                          value={filter ? filter.value : "all"}
                        >
                          <option value="all">All</option>
                          <option value="0">Online</option>
                          <option value="1">Offline</option>
                          <option value="2">Warning</option>
                        </select>
                    },
                  ]}
                  // defaultPageSize={10}
                  /*pageSizeOptions={this.state.pageSizeOptions}
                  defaultPageSize={this.state.defaultPageSize}*/
                  pageSizeOptions={[100, 500, 1000]}
                  defaultPageSize={100}
                  showPaginationTop={false}
                  showPaginationBottom
                  /*style={{
                    height: "61vh"
                  }}*/
                  className="-striped -highlight"
                  getTrProps={(state, rowInfo) => {
                    if (rowInfo && rowInfo.row) {
                      return {
                        onClick: (e) => {
                          this.handleThinClientInfoOpen(rowInfo.row._index);
                        },
                        style: {
                          cursor: "pointer"
                        }
                      }
                    } else {
                      return {}
                    }
                  }}
                />
              } />
          )
        }
      );


      Object.keys(tcListByGroupsAsJS).map((group) => {
        if (group !== 'Default') {
          tabContent.push({
            tabButton: (<span>{group + ' (' + tcListByGroupsAsJS[group].length})</span>),
            tabContent: (
              <HeaderCardWithActions
                headerColor="red"
                cardTitle="Default"
                cardSubtitle="Group of Default ThinClients"
                hasChart={false}
                chartInputs={{
                  labels: ["Reachable", "Unreachable", "Busy"],
                  values: [{ value: 15, className: "pie-health-normal" }, { value: 26, className: "pie-health-warning" }, { value: 4, className: "pie-health-critical" }]
                }}
                cardActions={(
                  <div>
                    <PillButtons
                      color="warning"
                      alignCenter
                      tabs={[
                        {
                          tabButton: "Power",
                          tabIcon: PowerIcon,
                          onclick: this.handlePowerAction.bind(this, "power")
                        },
                        {
                          tabButton: "Lock",
                          tabIcon: LockIcon,
                          onclick: this.handleLockAction.bind(this, "Lock")
                        },
                        {
                          tabButton: "Password",
                          tabIcon: KeyIcon,
                          onclick: this.handlePasswordChangeAction.bind(this, "password")
                        },
                        {
                          tabButton: "Factory Reset",
                          tabIcon: ResetIcon,
                          onclick: this.handleResetFactoryAction.bind(this, "FactoryReset")
                        },
                        {
                          tabButton: "Save",
                          tabIcon: SaveIcon,
                          onclick: this.handlePopupActions.bind(this, "Save")
                        }
                      ]}
                    />

                  </div>
                )}
                content={
                  <ReactTable
                    data={tcListByGroupsAsJS[group]}
                    filterable
                    defaultFilterMethod={(filter, row, column) => {
                      const id = filter.pivotId || filter.id;
                      return (
                        row[id] !== undefined ?
                          String(row[id]).indexOf(filter.value) > -1
                          :
                          true
                      );
                    }}
                    columns={[
                      {
                        Header: "Name",
                        headerClassName: classes.headerstyle,
                        accessor: "name",
                        minWidth: 30,
                        Filter: ({ filter, onChange }) => (
                          <input type='text'
                            placeholder="Search Name"
                            value={filter ? filter.value : ''}
                            onChange={event => onChange(event.target.value)}
                          />
                        )
                      },
                      {
                        Header: "MAC",
                        headerClassName: classes.headerstyle,
                        accessor: "mac",
                        minWidth: 30,
                        Filter: ({ filter, onChange }) => (
                          <input type='text'
                            placeholder="Search Serial Number"
                            value={filter ? filter.value : ''}
                            onChange={event => onChange(event.target.value)}
                          />
                        )
                      },
                      {
                        Header: "IP Address",
                        headerClassName: classes.headerstyle,
                        accessor: "ip",
                        minWidth: 30,
                        Filter: ({ filter, onChange }) => (
                          <input type='text'
                            placeholder="Search IP Address"
                            value={filter ? filter.value : ''}
                            onChange={event => onChange(event.target.value)}
                          />
                        )
                      },
                      {
                        Header: "Device State",
                        headerClassName: classes.headerstyle,
                        accessor: "status",
                        minWidth: 30,

                        Cell: row => (
                          <div>
                            <Status className={row.value === 'offline' ? classes.devicestatus0 : row.value === 'warning' ? classes.devicestatus1 : row.value === 'warning' ? classes.devicestatus1 : classes.devicestatus2} />
                            {" "}
                            <label style={{ color: 'black' }}>
                              {row.value}
                            </label>
                          </div>
                        ),
                        filterMethod: (filter, row) => {
                          if (filter.value === "all") {
                            return true;
                          }
                          if (filter.value === '0') {
                            return row[filter.id] === 'online';
                          }
                          else if (filter.value === '1') {
                            return row[filter.id] === 'offline';
                          }
                          else if (filter.value === '2') {
                            return row[filter.id] === 'warning';
                          }
                          return false;
                        },
                        Filter: ({ filter, onChange }) =>
                          <select
                            onChange={event => onChange(event.target.value)}
                            style={{ width: "100%" }}
                            value={filter ? filter.value : "all"}
                          >
                            <option value="all">All</option>
                            <option value="0">Online</option>
                            <option value="1">Offline</option>
                            <option value="2">Warning</option>
                          </select>
                      },
                    ]}
                    // defaultPageSize={10}
                    pageSizeOptions={this.state.pageSizeOptions}
                    defaultPageSize={this.state.defaultPageSize}
                    showPaginationTop={false}
                    showPaginationBottom
                    style={{
                      height: "61vh"
                    }}
                    className="-striped -highlight"
                    getTrProps={(state, rowInfo) => {
                      if (rowInfo && rowInfo.row) {
                        return {
                          onClick: (e) => {
                            this.handleThinClientInfoOpen(rowInfo.row._index);
                          },
                          style: {
                            cursor: "pointer"
                          }
                        }
                      } else {
                        return {}
                      }
                    }}
                  />
                } />
            )
          }
          );
        }
      })
    }


    const explorerContent = isTcByGroupFetched ? (
      <div>
        <GridContainer>
          <ItemGrid xs={12} sm={12} md={12}>
            <NavPills
              color="success"
              horizontal={{
                tabsGrid: { xs: 12, sm: 12, md: 2 },
                contentGrid: { xs: 12, sm: 12, md: 9 }
              }}
              alignCenter
              tabs={
                tabContent
              }
            />
            <Snackbar
              place="bl"
              color={this.state.alert && this.state.alert.color ? this.state.alert.color : undefined}
              icon={AddAlert}
              message={this.state.alert && this.state.alert.message ? this.state.alert.message : ''}
              open={this.state.alert && this.state.alert.isShowAlert ? this.state.alert.isShowAlert : false}
              closeNotification={() => this.setState({ alert: { isShowAlert: false } })}
              close
            />
          </ItemGrid>
        </GridContainer>
        {<ThinClientInfo open={this.state.isTCInfoOpen} thinClients={thinClients.dataRows.slice(this.state.dataRow, this.state.dataRow + 5)} onClose={this.handleThinClientInfoClose} />}
      </div>
    ) : null;
    return (
      isLoading ? loading : temprender //explorerContent
    );
  }
}

Explorer.propTypes = {
  classes: PropTypes.object.isRequired,
  tcListByGroups: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isTcByGroupFetched: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tcListByGroups: makeSelectTcGroups(),
  isLoading: makeSelectIsLoading(),
  isTcByGroupFetched: makeSelectIsTcByGroupFetched(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'explorer', reducer });
const withSaga = injectSaga({ key: 'explorer', saga });

export default withStyles(explorerStyle)(compose(
  withReducer,
  withSaga,
  withConnect,
)(Explorer));