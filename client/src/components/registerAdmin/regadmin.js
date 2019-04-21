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


class regadmin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      username: "",
      address: "",
      open:false
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


  handleemailChanged(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  handlenameChanged(event) {
    this.setState({ name: event.target.value });
  }
  handleusernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handleaddressChanged(event) {
    this.setState({ address: event.target.value });
  }

  

  HandleButtonClick() {
    this.setState();
  }

  submitForm(event) {
    event.preventDefault();
    superagent
      .post("/api/Admin/register")
      .send({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        name: this.state.name,
        address: this.state.address,
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
            <h2>Register A New Admin</h2>
            <TextField
              id="standard-name-input"
              label="name"
              type="text"
              margin="normal"
              value={this.state.name}
              onChange={this.handlenameChanged.bind(this)}required
            />{" "}
            <br />
            <TextField
              id="standard-username-input"
              label="username"
              type="text"
              margin="normal"
              value={this.state.username}
              onChange={this.handleusernameChanged.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-Email-input"
              label="Email"
              type="Email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleemailChanged.bind(this)} required
            />{" "}
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlePasswordChanged.bind(this)} required
            />
            <br />
            <TextField
              id="standard-address-input"
              label="Address"
              type="text"
              margin="normal"
              value={this.state.address}
              onChange={this.handleaddressChanged.bind(this)} required
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
          message={<span id="message-id">You Registered A New Admin</span>}
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
export default withStyles(styles)(regadmin);
