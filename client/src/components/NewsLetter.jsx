import "../sass/newsLetter.scss"
const NewsLetter = () => {
    return <section className="newsSection">
        <h2>Save Time, Save Money!</h2>
        <h4>Subscribe To Our News Letter And We Will Send You The Best Offers</h4>
        <div className="inputContainer">
            <input placeholder="Your Email" type="text"/>
            <button>Subscribe</button>
        </div>
    </section>
}

export default NewsLetter;