import React from 'react'
import './carousel.css'
import img2 from "../Images/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.webp"
import img3 from "../Images/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.webp"
import img4 from "../Images/2.webp"
import img5 from "../Images/1.webp"
import img6 from "../Images/3.webp"
import img7 from "../Images/4.webp"
import img8 from "../Images/5.webp"
import img9 from "../Images/6.webp"
import Footer from '../components/Footer';



const Carousel = () => {
    return (
        <div>
            <div>
                <div className='img1' />
                <div className='count'>
                    <h2 className="top-left">Cafe & Restaurant Est. 2035</h2>
                    <h1 className="top-let">Your Go-to Spot for<br /> Delicious Eats & Coffee</h1>
                    <button className='btn'><a href='/menu' style={{ textDecoration: "none", color: "#ffffff" }}>Order Now</a></button>
                    <button className='btn1'><a href='/menu' style={{ textDecoration: "none", color: "#ffffff" }}>Our Menu</a></button>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className="d-block w-100 tc" style={{ color: "#ffffff", fontSize: "20px", fontFamily: "heebo-light, sans-serif" }}>Weekend Brunch     I    Saturday 9am - 2pm</h1>
                    </div>

                    <div className="carousel-item">
                        <h1 className="d-block w-100 tc" style={{ color: "#ffffff", fontSize: "20px", fontFamily: "heebo-light, sans-serif" }}>Daily Deal    |   Coffee & Pastry $3.99</h1>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <div>
                    <div className='row'>
                        <div className='col-lg-6' style={{ paddingLeft: "200px" }}>
                            <h1 className='ffx b pt5' style={{ fontSize: "70px" }}>Eat.</h1>
                            <p style={{ fontSize: "20px", fontFamily: "heebo-light, sanf-serif" }}>Breakfast, Lunch and Artisanal Pastries</p>
                            <p style={{ fontSize: "16px" }}>I'm a paragraph. Click here to add your own text and edit <br />
                                me. I’m a great place for you to tell a story and let your <br />
                                users know a little more about you.</p>
                            <button className='btn3 mt5'><a href='/menu' style={{ textDecoration: "none", color: "#000000" }}>See More</a></button>
                        </div>
                        <div className='col-lg-6'>
                            <img src={img2} alt='' height={590} width={821} style={{}} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={img3} alt='' height={590} width={821} />
                        </div>
                        <div className='col-lg-6' style={{ paddingLeft: "200px" }}>
                            <h1 className='ffx b pt5' style={{ fontSize: "70px" }}>Drink.</h1>
                            <p style={{ fontSize: "20px", fontFamily: "heebo-light, sanf-serif" }}>The Freshest Cup in Town </p>
                            <p style={{ fontSize: "16px" }}>I'm a paragraph. Click here to add your own text and edit <br />
                                me. I’m a great place for you to tell a story and let your <br />
                                users know a little more about you.</p>
                            <button className='btn4'><a href='/menu' style={{ textDecoration: "none", color: "#000000" }}>See More</a></button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6' style={{ paddingLeft: "200px" }}>
                            <h1 className='ffx b pt5' style={{ fontSize: "70px" }}>Enjoy.</h1>
                            <p style={{ fontSize: "20px", fontFamily: "heebo-light, sanf-serif" }}>Make Yourself at Home</p>
                            <p style={{ fontSize: "16px" }}>I'm a paragraph. Click here to add your own text and edit <br />
                                me. I’m a great place for you to tell a story and let your <br />
                                users know a little more about you.</p>
                            <button className='btno mt5'><a href='/contact' style={{ textDecoration: "none", color: "#000000" }}>Visit Us</a></button>
                        </div>
                        <div className='col-lg-6'>
                            <img src={img9} alt='' height={700} width={821} />
                        </div>
                    </div>
                    <div className='row' style={{ backgroundColor: "#fbf2e8" }}>
                        <div className='col-lg-12'>
                            <h1 className='tc b animate__animated animate__fadeInDown' style={{ fontSize: "60px", fontFamily: "heebo-light, sanf-serif" }}>Drop By for a Bite.</h1>

                        </div>
                        <div className='col-lg-4 tc' style={{ paddingLeft: "300px" }}>
                            <h2 style={{ fontSize: "27px" }}>Address</h2><br />
                            <p style={{ fontSize: "16px" }}>500 Terry Francine St.<br />
                                San Francisco, CA 94158</p>
                        </div>
                        <div className='col-lg-4 tc'>
                            <div className="vl"></div>
                        </div>
                        <div className='col-lg-4 tc' style={{ paddingRight: "250px" }}>
                            <h2 style={{ fontSize: "27px" }}>Opening Hours</h2><br />
                            <p style={{ fontSize: "16px" }}>
                                Mon - Fri: 9am - 6pm<br />
                                Saturday: 10am - 2pm<br />
                                Sunday: Closed
                            </p>
                        </div>
                        <div className='row'>
                            <div className='img-grid mt5' style={{ display: "flex" }}>
                                <img src={img4} alt='' className='grow' />
                                <img src={img5} alt='' className='grow' />
                                <img src={img6} alt='' className='grow' />
                                <img src={img7} alt='' className='grow' />
                                <img src={img8} alt='' className='grow' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    )
}
export default Carousel
