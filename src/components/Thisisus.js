import React from 'react'
import './thisisus.css'
import img10 from '../Images/ga.jpg'
import img11 from '../Images/ur.jpg'
import Footer from '../components/Footer';

const Thisisus = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 tc' style={{ backgroundColor: "#fbf2e8" }} >
                    <h1 className='b mt5' style={{ fontSize: "60px", fontFamily: "heebo-light, sanf-serif" }}>This Is Us</h1>
                    <p className="mb5" style={{ fontSize: "20px" }}>We're big believers in the power of a good meal and a friendly place to eat it.<br />
                        Stop by for fresh, locally sourced food, served with a warm smile.</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img alt='' src={img10} width={900} height={700} />
                    </div>
                    <div className='col-lg-6 mt5'>
                        <div className='jjhgt'>

                            <h1 className='ffx b pt5'>The Best Bite in<br />
                                the Neighborhood</h1>
                            <p style={{ fontSize: "20px", fontFamily: "heebo-light, sanf-serif" }}>I'm an extra long title. Click here to add your own text and edit <br />
                                me. It’s easy. Just click “Edit Text” or double click me to add your<br />
                                own content and make changes to the font. I’m a great place for<br />
                                you to tell a story and let your users know a little more about you.</p>
                        </div>

                        <button className='bta'><a href='/menu' style={{ textDecoration: "none", color: "#000000" }}>View Menu</a></button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 tc' style={{ backgroundColor: "#60695d" }}>
                    <h1 className='mtgi' style={{ fontSize: "35px", fontFamily: "heebo-light, sanf-serif", color: "#fff" }}>Real Food. No Secret Ingredients.</h1>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mt5'>
                        <div className='jjhg'>
                            <h1 className='ffx b pt5' style={{ fontSize: "60px" }}> From Our Hearts<br />
                                to Your Plate</h1>
                            <p style={{ fontSize: "20px", fontFamily: "heebo-light, sanf-serif" }}>I'm an extra long title. Click here to add your own text and edit <br />
                                me. It’s easy. Just click “Edit Text” or double click me to add your<br />
                                own content and make changes to the font. I’m a great place for<br />
                                you to tell a story and let your users know a little more about you.</p>
                        </div>
                        <button className='bt'><a href='/contact' style={{ textDecoration: "none", color: "#000000" }}>Visit Us</a></button>

                    </div>
                    <div className='col-lg-6' >
                        <img className='oiyt' src={img11} alt='' width={800} height={900} style={{ marginLeft: "25px" }} />
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}

export default Thisisus
