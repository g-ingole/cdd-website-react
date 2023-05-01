import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { useState, useEffect } from 'react';

import './nav.css'
import { useDispatch, useSelector } from 'react-redux';

import { DLT } from '../redux/actions/Action';




function CollapsibleExample() {

    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    // 
    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price)
    };

    useEffect(() => {
        total();
    }, [total])
    const [price, setPrice] = useState(0);
    // console.log(price)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Navbar id='navbar' className='bgc' collapseOnSelect expand="lg" variant="black" >
            <div className='container-fluid'>
                <Navbar.Brand to="#home" className='nbr animate__animated animate__bounce' style={{ fontSize: "40px", fontFamily: "playfair display, serif", color: "#60695D" }}>Cafe Coffee Day</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {auth ? <Nav className="me-auto" style={{ marginLeft: "440px" }}>
                        <NavLink className='gap' to="/home"><span style={{ marginRight: "5px" }}><i className="fa-solid fa-house"></i> Home</span> </NavLink>
                        <NavLink className='gap' to="/thisisus"><span style={{ marginRight: "5px" }}><i className="fa-solid fa-users"></i> This Is Us</span></NavLink>
                        <NavLink className='gap' to="/menu"><span style={{ marginRight: "5px" }}><i className="fa-regular fa-rectangle-list"></i> Menu</span></NavLink>
                        <NavLink className='gap' to="/contact"><span style={{ marginRight: "5px" }}><i className="fa-solid fa-address-book"></i> Contact Us</span></NavLink>
                        <NavLink className='gap' to='/menu'><Badge badgeContent={getdata.length} color="primary"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        ><i className="fa-solid fa-cart-shopping f4"></i></Badge></NavLink>
                        <NavLink className='gap' to="/" onClick={logout}><span style={{ marginRight: "5px" }}><i className="fa-solid fa-arrow-right-from-bracket"></i> logout ({JSON.parse(auth).name} )</span></NavLink>
                    </Nav>
                        :
                        <div style={{ marginLeft: "1000px" }}>
                            <NavLink className='gap' to="/"><span style={{ marginRight: "5px" }}><i className="fa-solid fa-user-plus"></i> Sign up</span></NavLink>
                            <NavLink className='gap' to="/login"><span style={{ marginRight: "5px" }}><i className="fa-solid fa-user"></i> LogIn</span></NavLink>
                        </div>
                    }
                </Navbar.Collapse>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div>Photo</div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div>Name</div>
                                    </div>
                                    <div className='row'>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <div className='d-flex'>
                                                        <div >
                                                            <NavLink to={`/cartdetails/${e.id}`} onClick={handleClose}><img src={e.imgdata} alt='' width={120} height={120} className='p-1' /></NavLink>
                                                        </div>
                                                        <div style={{ marginLeft: "60px" }}>
                                                            <h6>{e.rname}</h6>
                                                            <p>Price: $ {e.price}</p>
                                                            <p>Quantity: $ {e.qnty}</p>
                                                            <p>Remove: <i className="fa-solid fa-trash" onClick={() => dlt(e.id)} style={{ cursor: "pointer", color: "red" }}></i></p>


                                                        </div>
                                                    </div>


                                                )
                                            })
                                        }
                                        <p>Total: $ {price}</p>


                                    </div>

                                </div>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="https://react-redux-cart-youtube.netlify.app/cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }


                </Menu>
            </div>
        </Navbar>

    );
}
export default CollapsibleExample;