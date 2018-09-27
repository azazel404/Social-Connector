import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import {Link} from "react-router-dom";
class Login extends Component {
  constructor() {
    //membuat state
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this); //mereturn onchange
    this.onSubmit = this.onSubmit.bind(this); //mereturn onsubmit
  }

  componentDidMount() {
    //validasi dijalankan setelah render selesai ,
    //pengecekan jika user authenticated nya true , akan dilarikan ke dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  //vaidasi dinjalankan sebelum render
  componentWillReceiveProps(nextProps) {
    //jika sudah login authenticated true , maka dilarikan ke dashboard
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    //jika ada error , tampilkan error
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    //membuat object userData
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    //menjalankan func action login user
    this.props.loginUser(userData);
  }
  //menangkap hasil ketikan form atau name dalam form agar bisa disambung ke func onsubmit
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // membuat state error
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your ConnectorSocial account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
                <small className="form-text text-center text-muted"><Link to="/register">no have account ? register here !</Link></small>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//membuat state menjadi props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
//bagian pertama state menjadi props
//bagian kedua deklarasi action yang dibuat di actions creator
export default connect(mapStateToProps, { loginUser })(Login);
