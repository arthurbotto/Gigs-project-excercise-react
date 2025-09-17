import "../Gig.css";
const Gig = (props) => {
    return (
        <div className="gig">
            <h3>{props.title}</h3>
            <img className="logo" src={props.image}></img>
            <p className="description">{props.description}</p>
            <p className="time">When: {props.time}</p>
            <p className="location">Where: {props.location}</p>
            <p className="tickets">Buy tickets now!</p>

        </div>
    )
}

export default Gig;