import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ profile }) => {
    return (
        <div>
            <p><b>Eucation: </b>{profile?.education} </p>
            <p><b>Location: </b>{profile?.location} </p>
            <p><b>Phone: </b>{profile?.phone}</p>
            <Link to={profile.linkdin}><b>Linkdin: </b>{profile?.linkdin}</Link>
        </div>
    );
};

export default Profile;