import { faFlag, faFootballBall, faLocationArrow, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import female from '../../images/female.png';
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
                    <img src={female} alt=""/>
                </div>
            </div>
            <div className="description">
                <p className="text-white mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vero provident excepturi, veniam ea exercitationem, impedit tempore temporibus sit at vitae saepe repudiandae maxime enim! Ut tempore quisquam voluptas culpa debitis dolorem neque incidunt veniam aperiam illo in molestias, maiores ipsum. Commodi, a iure adipisci necessitatibus cupiditate minima ducimus aliquid.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aut nulla iusto voluptas eveniet est odio fugit, similique deserunt neque ea saepe quo sed perspiciatis corrupti nobis illum quos, quisquam et adipisci possimus provident, a commodi maxime. Quae inventore nisi quis? Odio eos amet est consequatur aperiam error alias rem!</p>
                <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis modi tempora provident magni assumenda? Laudantium explicabo quam aperiam id tempore inventore dolores, quis ipsum debitis molestiae odit ipsa eum doloribus architecto culpa consequatur velit harum nulla provident cumque odio. Officiis quidem veniam delectus possimus libero. Quidem placeat delectus voluptatum alias recusandae! Provident iusto incidunt est quos, reiciendis beatae error! Aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque aut nobis provident cupiditate, commodi doloribus blanditiis earum exercitationem, eius, asperiores iure modi praesentium! Dolorum facere repellendus natus porro, sequi nostrum magni minima nam vitae nulla aliquid explicabo ab qui, accusantium molestiae eius libero dolor excepturi nihil sunt laborum. Odio iure modi nisi, obcaecati expedita fugit deserunt dolor delectus! Ducimus!</p>
            </div>

            <div className="social-links d-flex justify-content-center">
               {/* <a  href={teams.strTwitter}> <img src={twitter} alt=""/></a>
               <a  href={teams.strWebsite}> <img src={facebook} alt=""/></a>
               <a href={teams.strYoutube}> <img src={youtube} alt=""/></a> */}

               <Link to="{teams.strTwitter}"><img src={twitter} alt=""/></Link>
               <Link to={teams.strWebsite}><img src={facebook} alt=""/></Link>
               <Link to={teams.strYoutube}><img src={youtube} alt=""/></Link>
            </div>
            </div>
        </div>
    );
};

export default TeamDetails;