import React from 'react'

const Footer = () => {

    const submitbtn = () => {
        alert("Mail Submitted Successfuly")
    }
    return (
        <div>
            <div className='row' style={{ paddingLeft: "160px", backgroundColor: "#404D3C", color: "#fff", fontFamily: "heebo-light, sanf-serif" }} >
                <div className='col-lg-4' >
                    <h1>Newsletter</h1>
                    <p>Stay up to date with all the latest from <br />Cafe Coffee Day</p>
                    <h4>Email</h4>
                    <form className="d-flex">
                        <input className="form-control w5" type="email" placeholder="Email" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={() => submitbtn()}>Join</button>
                    </form>
                </div>

                <div className='col-lg-4'>
                    <h1>Talk to Us</h1>
                    <p>123-456-7890 <br />info@mysite.com</p>
                    <p>500 Terry Francine St.<br />
                        San Francisco, CA 94158​</p>
                </div>
                <div className='col-lg-4'>
                    <h1 >
                        <i className="fa-brands fa-instagram fa-beat"></i><br /><br />

                        <i className="fa-brands fa-facebook fa-beat"></i><br /><br />

                        <i className="fa-brands fa-twitter fa-beat"></i>
                    </h1>

                </div>


            </div>
            <div className='col-lg-12 tc pt-2'>
                <h4 style={{ fontSize: "14px", fontFamily: "heebp-light, sanf-serif", color: "#000000" }}>© 2035 by Cafe Coffee Day. Powered and secured by Wix</h4>

            </div>
        </div>
    )
}

export default Footer
