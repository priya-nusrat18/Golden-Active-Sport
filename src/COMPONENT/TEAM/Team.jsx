import React from 'react';
import './Team.css';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";



const Team = (props) => {
    console.log(props.strPoster);
    const {strTeamBadge , strTeam,strSport, idTeam} = props.team;
    let history = useHistory();

    const handleClick = (teamId) =>{
        const url = `/team/${teamId}`
        history.push(url)
    }

    return (

        <div className="col-md-4 my-3 ">
            <Card>
            <Card.Img className="card-img" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <div className="text-center pt-5">
                        <h1>{strTeam}</h1>
                    <Card.Text>
                        Sport type:{strSport}
                    </Card.Text>
                     <Button onClick={() => handleClick(idTeam)} variant="primary" >Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </div>
            </Card.Body>
        </Card>
        </div>
);
};

export default Team;