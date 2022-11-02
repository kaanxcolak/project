import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Son = () => {

    return (
        <form >
            <div className='border-bottom-dark py-1 mt-5'>
                {/* container - start */}
                <div className="container ">
                    <div className="row mb-3 ">
                        <div className="col-md-4">
                            <img src="https://ipa.istanbul/wp-content/uploads/2021/08/IPA_RENKLI-TR-01-1-300x117.png" alt="ipa" />
                        </div>
                        <div className="col-md-4 mt-4 ">
                            <span><h4 className="fw-semibold">SOSYAL POLİTİKALAR ÇALIŞTAYI BAŞVURU FORMU</h4></span>
                        </div>
                        <div className="col-md-4 mt-5 ">
                            <div className="navMenu col-6 position-relative">
                                <span className='d-block w-100'>IPA USERS</span>
                                <div className="subMenu">
                                    <hr />
                                    <Link to="/takvim" className='d-block w-100 mb-2 text-light'>KAAN ÇOLAK</Link>
                                    <hr />
                                    <Link to="/" className='d-block w-100 mb-2 text-light'>Etkinlik Tanımlama</Link>
                                    <hr />
                                    <Link to="/alanTanimlama" className='d-block w-100 mb-2 text-light'>Etkinlik Alanı Tanımlama</Link>
                                    <hr />
                                    <Link to="/" className='d-block w-100 mb-2 text-light' >Çıkış Yap</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> {/* container - end */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <img src="img/tik.png"  alt="" className='img'/>
                    </div>
                    <div className="col-12 mt-5 mb-5">
                        <h1>Başvurunuz alınmıştır...</h1>
                    </div>
                    <div className="col-12">
                    <Link to={`/`} className="btn btn-primary px-5 mt-5" >ANASAYFA</Link>
                    </div>


                </div>
            </div>
        </form>

    )
}

export default Son;
