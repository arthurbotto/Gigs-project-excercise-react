import "../Gig.css";
import { useState } from "react";

const Gig = (props) => {
    const [liked, setLiked] = useState(false)

    const toggleLike = () => {
        setLiked(prev => !prev)  //I did here first setLiked(!liked), but apparently this is a better way
    }

    return (
        <div className="gig">
            <h3>{props.title}</h3>
            <img className="logo" src={props.image} alt={`${props.title} poster`}></img>
            <p className="description">{props.description}</p>
            <p className="time">When: {props.time}</p>
            <p className="location">Where: {props.location}</p>
            <p className="tickets">Buy tickets now!</p>
            <button onClick={toggleLike} aria-label={liked ? "Unlike" : "Like"}>
                {liked ? "❤️" : "🤍"}</button>

        </div>
    )
}

export default Gig;