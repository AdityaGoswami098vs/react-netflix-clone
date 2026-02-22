import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from "react-router-dom"

const Player = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTNlOTNhOTE0ZjQzOWI2YTI0ODQ0M2FlMDg3NzE5MCIsIm5iZiI6MTc3MTcwMzM2OC4zNDcwMDAxLCJzdWIiOiI2OTlhMGM0ODE5YmYxNWJiMjUwZTRkNGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7GqQHtAFcPuSvHuXPIc1PSYRbXLjqfruPj28AffCv-A'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player
