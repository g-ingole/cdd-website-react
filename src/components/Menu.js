import React, { useState } from 'react'
import { Data } from './Data'
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/Action';  


const CartDetails = () => {
    const [data] = useState(Data);
    const [searchFeild, setSearchFeild] = useState('')
    // console.log(data);

    const dispatch = useDispatch();

    const send = (e) => {
        // console.log(e)

        dispatch(ADD(e));

    }




    return (
        <>
            <div className='container mt-2'>
                <h1 className='tc'>Items Details Page</h1><br />
                <input onChange={(e) => {
                    setSearchFeild(e.target.value)
                }} placeholder='Search...' />
                <section className='container mt-3 shadow-1 p-5'>
                    <div className='row'>
                        {
                            data.filter((val) => {
                                if (searchFeild === '') {
                                    return val;

                                } else if (
                                    val.rname.toLowerCase().includes(searchFeild.toLowerCase())
                                ) {
                                    return val;
                                }
                            }).map((element, id) => {
                                return (
                                    <div key={id} >
                                        <div className='col-lg-6' >
                                            <div className='items_img d-flex justify-content-center align-items-center pt5'>
                                                <img src={element.imgdata} alt='' width={500} height={400} style={{ cursor: "pointer" }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='details ml5' style={{ marginTop: "120px" }}>

                                                <h1 className='mt-5'>{element.rname}</h1>
                                                <h2>Price  : $ {element.price}</h2><br />

                                                {/* <p><strong>Remove</strong> <span style={{ cursor: "pointer" }}><i className="fa-solid fa-trash fa-beat-fade f3"></i></span></p> */}
                                                <button className='f6 br1 p-2 addtocart btfcolor' onClick={() => send(element)}>Add To Cart</button>
                                                {/* <button className='f6 br1 p-2 ml1 removetocart btfcolor'>Remove To Cart</button> */}

                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>


                </section>

            </div>
            <Footer />

        </>
    )
}

export default CartDetails
