import "../sass/browseBy.scss";
const BrowseBy = () => {
    return <section className="browseBy">
        <h2>Browse By Property Type</h2>
        <div className="imgsContainer">
            <div className="type">
                <img src="./assets/type1.webp" alt="" />
                <div className="lyer"></div>
                <h3>Hotels</h3>
                <h5>22 Hotel</h5>
            </div>
            <div className="type">
                <img src="./assets/type2.jpg" alt="" />
                <div className="lyer"></div>
                <h3>Apartments</h3>
                <h5>11 Apartments</h5>
            </div>
            <div className="type">
                <img src="./assets/type3.jpg" alt="" />
                <div className="lyer"></div>
                <h3>Villas</h3>
                <h5>8 Villas</h5>
            </div>
            <div className="type">
                <img src="./assets/type4.jpg" alt="" />
                <div className="lyer"></div>
                <h3>Cabins</h3>
                <h5>27 Cabins</h5>
            </div>
        </div>
    </section>
}

export default BrowseBy;