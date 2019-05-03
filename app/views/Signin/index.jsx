import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from "@material-ui/core/CircularProgress";


// @material-ui/icons
import { Person as UserIcon } from "@material-ui/icons";
import { FaUsers as UsersIcon } from "react-icons/fa";
import Lock from "@material-ui/icons/Lock";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import AboutSnapVDICard from "components/Cards/AboutSnapVDI.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

// sweet alert
//import swal from 'sweetalert';

// images
import brandLogo from "assets/img/amzettaLogo.png";
import SnapVdiLogo from "assets/img/SnapvdiLogin.png";

import signinStyle from "assets/jss/material-dashboard-pro-react/views/signinStyle";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      checked: [],
      username: "",
      password: "",
      isAdLogin: false
    };
  }

  componentWillMount() { }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  componentWillReceiveProps(nextProps) {
    // console.log("nextprops", nextProps.error.hint);

  }

  handleAdDomain = event => {
    this.setState({
      isAdLogin: event.target.checked
    });
  };

  handleOnChange = event => {
    //const { dispatch } = this.props;

    this.setState({ [event.target.id]: event.target.value });
  };

  handleSignin = () => {
    this.props.history.push("/home");
  };

  handleLoginOrSignin = () => {

  };

  handleUnderConstruction = () => { };

  render() {
    const { classes/*, signin*/, isLoading } = this.props;
    const { username/*, lastname, email*/, password, addomain, isAdLogin } = this.state;

    /*var isSubmitDisabled =
      isLoading ||
      !firstname.trim().length ||
      !lastname.trim().length ||
      !email.trim().length ||
      !password.trim().length ||
      !acceptTerms;*/

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <RegularCard
              // cardTitle="Sign in"
              // titleAlign="center"
              // customCardTitleClasses={classes.cardTitle}
              // customCardClasses={classes[this.state.cardAnimaton]}
              
              content={
                <div>
                  <br></br>
                  <GridContainer justify="center" alignItems="center">
                    <GridItem xs={9} sm={8} md={5}>
                      <AboutSnapVDICard
                        handleShare={this.handleUnderConstruction}
                        handleKnowMore={this.handleUnderConstruction}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={8} md={5}>
                      <form className={classes.form}>
                        <FormControlLabel
                          color="primary"
                          classes={{
                            root: classes.checkboxLabelControl,
                            label: classes.checkboxLabel
                          }}
                          control={
                            <Checkbox
                              checked={isAdLogin}
                              onChange={this.handleAdDomain}
                              value="isAD"
                              color="primary"
                            />
                          }
                          label={
                            <span style={{ color: 'black'}} >
                                with AD Credentials
                            </span>
                          }
                        />
                        {isAdLogin?
                        <CustomInput
                          id="addomain"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            autoFocus: true,
                            value: addomain,
                            onChange: this.handleOnChange,
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <UsersIcon className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Domain"
                          }}
                        />:null}
                        <CustomInput
                          id="username"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            autoFocus: true,
                            value: username,
                            onChange: this.handleOnChange,
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <UserIcon className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "UserName"
                          }}
                        />

                        <CustomInput
                          id="password"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            value: password,
                            onChange: this.handleOnChange,
                            type: "password",
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Lock className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Password"
                          }}
                        />
                        {/*<RadioGroup
                        row
                        style={{display:'block'}}
                        aria-label="Gender"
                        name="gender"
                        id='gender'
                        value={this.state.gender}
                        onChange={(event)=>this.setState({gender:event.target.value})}
                      >
                        <FormControlLabel style={{margin:'0 0 0 50px'}} value="1" control={<Radio color="primary" />} label="Male" />
                        <FormControlLabel style={{margin:'0 0 0 50px'}} value="2" control={<Radio color="primary" />} label="Female" />
                      </RadioGroup>*/}
                        <div className={classes.center}>
                          <div className={classes.circularProgresswrapper}>
                            <Button
                              round
                              onClick={this.handleSignin}
                              color="primary"
                            >
                              Sign in
                            </Button>
                            {isLoading && (
                              <CircularProgress
                                size={24}
                                className={classes.buttonProgress}
                              />
                            )}
                          </div>
                          {/* <Typography variant="body2" gutterBottom>
                            Have an account?
                            <a
                              href="#"
                              onClick={this.handleLoginOrSignin.bind(this, 0)}
                            >
                              <Typography variant="overline" gutterBottom>
                                Sign in
                              </Typography>
                            </a>
                          </Typography> */}
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                  
                  <GridContainer className={classes.poweredbyLogo} justify="space-between" direction="row" >
                  <ItemGrid xs={12} sm={12} md={2}>
                      <a target="blank" href="https://snapvdi.com/">
                        <img alt="logo" className={classes.amiLogo} src={SnapVdiLogo} />
                      </a>
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={2}>
                      <a target="blank" href="https://amzetta.com">
                        <img alt="logo" className={classes.amiLogo} src={brandLogo} />
                      </a>
                    </ItemGrid>
                  </GridContainer>
                 
                </div>
              }
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLoginOrSignin: PropTypes.func,
  signin: PropTypes.object,
  signinSuccessful: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withStyles(signinStyle)(withRouter(Signin));
