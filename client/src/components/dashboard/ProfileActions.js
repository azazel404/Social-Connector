import React from 'react';
import { Link } from 'react-router-dom';

///STATELESS FUNCTION ACTION
const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile" className="btn btn-primary btn-block btn-gradient waves-effect waves-light" href="#">
        <span className="gradient">
          <i className="batch-icon batch-icon-user-alt-add-2" />
          Edit Profile
      </span>
      </Link>
      <Link to="/add-experience" className="btn btn-info btn-block btn-gradient waves-effect waves-light" href="#">
        <span className="gradient">
          <i className="batch-icon batch-icon-user-alt-add-2" />
          Add Experience
        </span>
      </Link>
      <Link to="/add-education" className="btn btn-danger btn-block btn-gradient waves-effect waves-light" href="#">
        <span className="gradient">
          <i className="batch-icon batch-icon-user-alt-add-2" />
          Add Education
      </span>
      </Link>
    </div>
  );
};

export default ProfileActions;
