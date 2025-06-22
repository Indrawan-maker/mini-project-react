/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry() {
    return (
        <>
        <main>
            <div className="wrapper-image-text">
            </div>
            <div className="image-wrapper">
                <img className="fuji-image"
                src="./images/fuji-mountain.jpeg" alt="fuji mountain" />
            </div>
            <div className="wrapper-all-toleft">
            <div className="main-wrapper">
                <img className="main-image" src="./images/location.png" alt="location logo"/>
                <span className="main-country">JAPAN</span>
                <a className="main-location"
                href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
                    View On Google Maps
                    </a>
            </div>
            <div className="main-wrapper-text">
            <h1 className="title">Mount Fuji</h1>
                <h3 className="date">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="desc"
                >Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
                </div>
        </main>
                </>
    )
}