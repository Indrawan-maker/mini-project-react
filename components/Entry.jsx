/**
 * Challenge: Fix our component! 😱
 */



export default function Entry( props ) {
    console.info(props)
    return (
        <>
        <main>
            <div className="wrapper-image-text">
            </div>
            <div className="image-wrapper">
                <img 
                className="fuji-image"
                src={props.img.src}
                alt={props.img.alt}
                />
            </div>
            <div className="wrapper-all-toleft">
            <div className="main-wrapper">
                <img className="main-image"
                src="./images/location.png"
                alt="location logo"/>
                <span 
                className="main-country">{props.country}</span>
                <a className="main-location"
                href={props.googleMapsLink}>
                    View On Google Maps
                    </a>
            </div>
            <div className="main-wrapper-text">
            <h1 className="title">{props.title}</h1>
                <h3 className="date">{props.dates}</h3>
                <p 
                className="desc">
                    {props.text}
                </p>
            </div>
                </div>
        </main>
                </>
    )
}