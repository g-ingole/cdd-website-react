import React from 'react'
import Form from 'react-bootstrap/Form';
import './contact.css'
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 tc' style={{ backgroundColor: "#fbf2e8" }} >
                    <h1 className='b mt5' style={{ fontSize: "60px", fontFamily: "heebo-light, sanf-serif" }}>Let's Connect</h1>
                    <p className="mb5" style={{ fontSize: "20px" }}>I'm a paragraph. Click here to add your own text and edit me.<br />
                        Let your users get to know you.</p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 mt5'>
                        <form >
                            <div className="form-row" style={{ display: "flex" }}>
                                <div className="form-group" >
                                    <label htmlFor="inputEmail4">First Name</label>
                                    <input type="first name" className="form-control" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="form-group" >
                                    <label htmlFor="inputPassword4">Last Name</label>
                                    <input type="last name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group" style={{ width: "87%" }}>
                                <label htmlFor="inputPassword4">Email</label>
                                <input type="Email" className="form-control" />
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ width: "87%" }} >
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <button type="submit" className="btn btn-primary" style={{ width: "87%", backgroundColor: "#60695D", border: "none" }}>Send</button>
                        </form>

                    </div>
                    <div className='col-lg-2 mt5' style={{ marginLeft: "-150px" }}>
                        <div className="vl" style={{ height: "300px" }}></div>
                    </div>

                    <div className='col-lg-5 ml6 mt5'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <i className="fa-solid fa-location-dot f3 ml2"></i>
                                <h4>Address</h4>
                                <p>500 Terry Francine St.<br />
                                    San Francisco, CA 94158</p>
                            </div>
                            <div className='col-lg-6'>
                                <i className="fa-solid fa-phone ml2 f3"></i>
                                <h4>Phone</h4>
                                <p>123-456-7890</p>
                            </div>

                        </div><br /><br />
                        <div className='row'>
                            <div className='col-lg-6'>
                                <i className="fa-solid fa-envelope f3 ml2"></i>
                                <h4>Email</h4>
                                <p>info@mysite.com</p>
                            </div>
                            <div className='col-lg-6'>
                                <i className="fa-solid fa-thumbs-up ml2 f3"></i>
                                <h4>Follow</h4>
                                <i className="fa-brands fa-facebook-f f3"></i>
                                <i className="fa-brands fa-twitter ml3 f3"></i>
                                <i className="fa-brands fa-instagram ml3 f3"></i>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <iframe title='google-map' className="gmap_iframe" style={{ width: "800px" }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            </div>
            <Footer />


        </div>

    )
}

export default Contact
