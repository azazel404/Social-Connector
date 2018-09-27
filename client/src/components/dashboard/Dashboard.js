import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';
import Navbar from "../layout/Navbar";
import '../layout/landing.css';



class Dashboard extends Component {
  // LIFECYLE UNTUK MENDAPATKAN FETCH DATA PROFILE
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    //FUCN UNTUK MENJALANKAN ACTION DELETE
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />
    }
    else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
          </div>
        )
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        )
      }
    }

    return (
      <div>
        <Navbar />
        <main className="main-content " role="main">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card">
                <div className="card-user-profile">
                  <div className="profile-page-left">
                    <div className="row">
                      <div className="col-lg-12 mb-4">
                        <div className="profile-picture profile-picture-lg bg-gradient bg-primary mb-4">
                          <img src={user.avatar} width={144} height={144} alt=""/>
                        </div>
                        <ProfileActions />
                        <Link to="/feed" className="btn btn-secondary btn-block btn-gradient waves-effect waves-light" href="#" style={{ marginTop: '10px' }}>
                          <span className="gradient">
                            <i className="batch-icon batch-icon-user-alt-add-2" />
                            create Post
                            </span>
                        </Link>
                        {/* <Link to={`/profile/${profile.handle}`} className="btn btn-warning btn-block btn-gradient waves-effect waves-light" href="#">
                          <span className="gradient">
                            <i className="batch-icon batch-icon-user-alt-add-2" />
                            Show Profile
                            
                          </span>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="profile-page-center">
                    {dashboardContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
