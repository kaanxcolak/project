import React from 'react'
import { Link } from "react-router-dom";

const Header2 = (props) => {
    return (

        <div className='
    border-bottom-dark py-1 mt-5'>
            {/* container - start */}
            <div className="container ">
                <div className="row mb-3 ">
                    <div className="col-md-4">
                        <img src="https://ipa.istanbul/wp-content/uploads/2021/08/IPA_RENKLI-TR-01-1-300x117.png" alt="ipa" />
                    </div>
                    <div className="col-md-4 mt-5">
                        <span><h4 className="fw-semibold">{props.title}</h4></span>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="navMenu col-6 position-relative">
                            <span className='d-block w-100'>KAAN ÇOLAK</span>
                            <div className="subMenu">
                                <hr />
                                <Link to="/etkinliklerim" className='d-block w-100 mb-2 text-light'>Etkinliklerim</Link>
                                <hr />
                                <Link to="/" className='d-block w-100 mb-2 text-light' >Çıkış Yap</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div> {/* container - end */}
        </div>
    )
}

export default Header2;