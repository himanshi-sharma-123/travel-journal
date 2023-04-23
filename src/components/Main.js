 import location from "../images/location.png"
export default function Main(props){
    // return(
    //     <div className="main">
    //         <img src={props.img} alt="" width="125px" height="168px" className="main-image"/>
    //         <div className="main-header">
    //         <img src={location} alt="" width="20px" height="20px"className="location"/>
    //         <h5>{props.Location}</h5>
    //         </div>
    //         <p className="main-para">
    //         <h2>{props.name}</h2>
    //         <h4>{props.date}</h4>
    //         <h5>{props.description}</h5>
    //         </p>
    //     </div>
    // )

        return (
        <div className="card">
            <div className="card-image-div">
                <img
                    src={props.img} width="125px" height="168px"
                    className={props.class}
                    alt={props.title}
                />
            </div>
            <div className="card-text-div">
                <div className="card-location">
                    <img src={location} alt="" width="20px" height="20px"className="location"/>
                    <span className="location">{props.Location}</span>
                    <p className="grey">
                        <a
                            href={props.googleMapsUrl}
                             target="_blank"
                             rel="noreferrer"
                        >
                            View on Google Maps Link
                        </a>
                    </p>
                </div>
                <h2 className="card-title">{props.name}</h2>
                <div className="card-date">
                    <span className="start-date">{props.startDate}</span>
                    <span className="dash"> - </span>
                    <span className="end-date">{props.endDate}</span>
                </div>
                <p className="card-description">
                    <span>{props.description}</span>
                </p>
            </div>
        </div>
    );

}