import React, { Component } from "react";
import superagent from "superagent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});


class reglawyer extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      phonenumber: "",
      legaltype: "",
      birthdate: "",
      noOfPreviousCases: "",
      gender: "",
      open:false,
    };
  } 
  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };


  handleusername(e) {
    this.setState({ username: e.target.value });
  }
  handlepassword(e) {
    this.setState({ password: e.target.value });
  }
  handlefullname(e) {
    this.setState({ fullname: e.target.value });
  }
  handlebirthdate(e) {
    this.setState({ birthdate: e.target.value });
  }
  handleemail(e) {
    this.setState({ email: e.target.value });
  }
  handlephonenumber(e) {
    this.setState({ phonenumber: e.target.value });
  }
  handlelegaltype(e) {
    this.setState({ legaltype: e.target.value });
  }
  handlegender(e) {
    this.setState({ gender: e.target.value });
  }
  handlenoOfPreviousCases(e) {
    this.setState({ noOfPreviousCases: e.target.value });
  }

  HandleButtonClick() {
    this.setState();
  }

  submitForm(event) {
    event.preventDefault();
    superagent
      .post("/api/Lawyer/register")
      .send({
        username: this.state.username,
        password: this.state.password,
        fullname: this.state.fullname,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        legaltype: this.state.legaltype,
        birthdate: this.state.birthdate,
        noOfPreviousCases: this.state.noOfPreviousCases,
        gender: this.state.gender
      })
      .end((err, res) => {
        if (err) {
          this.setState({ errorMessage: "Registeration failed" });
          return;
        }
        console.log("res.body:", res.body);
        localStorage.setItem("token", res.body.token);
        //this.setState();
        this.forceUpdate();
      });
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    if (token != null) {
      return false;
    }
    return true;
  }
  render() {
    console.log(this.state);
    const isAlreadyAuthenticated = this.isAuthenticated();
    const { classes } = this.props;

    return (
      <div className="Register">
        
          <form onSubmit={this.submitForm.bind(this)}>
            <h2>Register A New Lawyer</h2>
            <TextField
              id="standard-password-input"
              label="Username"
              type="text"
              margin="normal"
              value={this.state.username}
              onChange={this.handleusername.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlepassword.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-fullname-input"
              label="Full Name"
              type="text"
              margin="normal"
              value={this.state.fullname}
              onChange={this.handlefullname.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-email-input"
              label="Email"
              type="email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleemail.bind(this)} required
            />
            <br />
            <TextField
              id="standard-phonenumber-input"
              label="Phone Number"
              type="text"
              margin="normal"
              value={this.state.phonenumber}
              onChange={this.handlephonenumber.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-legaltype-input"
              label="Legal Type"
              type="text"
              margin="normal"
              value={this.state.legaltype}
              onChange={this.handlelegaltype.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-birthdate-input"
              type="date"
              margin="normal"
              value={this.state.birthdate}
              onChange={this.handlebirthdate.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-noOfPreviousCases-input"
              label="Number of previous cases"
              type="text"
              margin="normal"
              value={this.state.noOfPreviousCases}
              onChange={this.handlenoOfPreviousCases.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-gender-input"
              label="Gender"
              type="gender"
              margin="normal"
              value={this.state.gender}
              onChange={this.handlegender.bind(this)} required
            />{" "}
            <br />
            <Button variant="contained" color="primary" type="submit" onClick={this.handleClick}>
              Register
            </Button> 
            <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">You Registered A New Lawyer</span>}
          action={[
            
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
                      ]}
                      />
               
          </form>
        
      </div>
    );
  }
}
export default withStyles(styles)(reglawyer); 
