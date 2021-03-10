import React, { useEffect, useState } from 'react';
import Team from '../TEAM/Team';
import './Home.css';


const Home = () => {
    const [teams , setTeams] =useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
        
    }, [])
    console.log(teams);
    return (
        <div>
            <div className="banner-bg text-center">
                <h1 className="text-white pt-5">Golden Active Sports</h1>
            </div>
            <div className="container-fluid card-bg">
                <div className="row">
                    {
                    teams.map( team => <Team team={team}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;