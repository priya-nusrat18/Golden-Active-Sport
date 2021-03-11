import { faFlag, faFootballBall, faLocationArrow, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import female from '../../images/female.png';
import male from '../../images/male.png';
import facebook from '../../images/icon/Facebook.png';
import twitter from '../../images/icon/Twitter.png';
import youtube from '../../images/icon/YouTube.png';
import './TeamDetails.css';



const TeamDetails = () => {
    const {teamId}=useParams();
    const [teams, setTeams] = useState([{}]);
    useEffect(() =>{
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data =>setTeams(data.teams[0]))
            },[teamId])
    return (
        <div className="info-warp">
            <div className="banner-bg">
                <div className="logo">
                <img src={teams.strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="container">
            <div className="row mian-info d-flex p-4 m-4 rounded justify-content-between  mb-4">
                <div className="col-md-6 info text-white">
                    <h1>{teams.strTeam}</h1>
                    <p> <FontAwesomeIcon icon={faLocationArrow}/> Founded:  {teams.intFormedYear} </p>
                    <p><FontAwesomeIcon icon={faFlag}/> Country:  {teams.strCountry}</p>
                    <p><FontAwesomeIcon icon={faFootballBall}/> playing type:  {teams.strSport}</p>
                    <p><FontAwesomeIcon icon={faTransgender}/> Gender:   {teams.strGender}</p>
                </div>
                <div className=" col-md-6 info-img  ">
                    <img src={
                        teams.strGender?.toLowerCase()==="female"?female :teams.strGender?.toLowerCase()==="mixed"?teams.mixed:male
                    } alt=""/>
                </div>
            </div>
            <div className="description">
                <p className="text-white mb-5">{teams.strDescriptionEN}</p>
                <p className="text-white mb-5">{teams.strDescriptionEN}</p>
            </div>

             <div className="social-links d-flex justify-content-center">
                
               <a  href={`https://${teams.strTwitter}`} > <img src={twitter} alt=""/></a>
               <a  href={`https://${teams.strWebsite}`} > <img src={facebook} alt=""/></a>
               <a  href={`https://${teams.strYoutube}`} > <img src={youtube} alt=""/></a>


             </div>
            </div>
        </div>
    );
};

export default TeamDetails;