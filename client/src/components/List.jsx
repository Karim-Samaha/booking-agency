import "../sass/list.scss"
const List = () => {
    return <section className="list">
        <div className="listItem">
            <img src="./assets/room2.jpg" alt="" />
            <div className="info">
                <h2>Tower Street Hotel</h2>
                <h3>Free Airport Taxi</h3>
                <h5>Hotel Room With Free air conditioner and wifi</h5>
                <h6>1 Bathroom & 1 balcony</h6>
                <h6 className="cancellation">Free Cancellation</h6>
                <h5 className="cancellation">You Can Cancel Later, So Lock On This Great Price Today</h5>
            </div>
            <div className="leftSection">
                <div className="top">
                    <h4>Excellent</h4>
                    <h4 className="rate">8.9</h4>
                </div>
                <div className="bottom">
                    <h2>135$</h2>
                    <h6>Includes Taxes & Fees</h6>
                    <button>Check Availability</button>
                </div>
            </div>
        </div>
        <div className="listItem">
            <img src="./assets/room3.jpg" alt="" />
            <div className="info">
                <h2>Four Season Hotel</h2>
                <h3>Free Airport Taxi</h3>
                <h5>Hotel Room With Free air conditioner and wifi</h5>
                <h6>1 Bathroom & 1 balcony</h6>
                <h6 className="cancellation">Free Cancellation</h6>
                <h5 className="cancellation">You Can Cancel Later, So Lock On This Great Price Today</h5>
            </div>
            <div className="leftSection">
                <div className="top">
                    <h4>Excellent</h4>
                    <h4 className="rate">8.9</h4>
                </div>
                <div className="bottom">
                    <h2>200$</h2>
                    <h6>Includes Taxes & Fees</h6>
                    <button>Check Availability</button>
                </div>
            </div>
        </div>

    </section>
}

export default List;