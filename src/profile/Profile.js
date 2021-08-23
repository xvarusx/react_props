import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
    const hundelName=()=>{
        alert(`Your Full Name is :${props.data.FullName}`);
    }
    return (
        
        <div>
                <strong>Full Name :</strong>{props.data.FullName}<br/>
                <strong>Bio :</strong>{props.data.bio}<br />
                <strong>Full Name :</strong>{props.data.profession}<br/>   
                {props.children}    
                <button value='' onClick={()=>hundelName()}> Click Me </button>             
        </div>
    );
}
Profile.defaultProps={
FullName:'FullName',
bio:'Bio',
profession:'Master of sleeping'
}
Profile.propTypes={
    FullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string

}

export default Profile;
