import './UserCard.css';
import React from 'react';
import Phone from '../Phone/Phone';
import Location from '../City/City';
import Email from '../Email/Email';

// Pass the userData as a parameter
const UserCard = ({ userData }) => {
    return (
        <div className="card">
            <center><div className="card-title" type="Nom">{userData.name.first} {userData.name.last}</div></center>
            <center> <div className="card-image"> <img src={userData.picture.large} alt={userData.name.first}/></div></center>
            <div className="card-body">
                <Phone cell={userData.cell} type="Numéro de téléphone"/>
                <Email email={userData.email} type="Email"/>
                <Location location={userData.location} type="Ville"/>
                
            </div>

        </div>
    )
};

export default UserCard;
 
