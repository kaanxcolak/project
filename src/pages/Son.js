import React, { useState, useSelector } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';


const Son = () => {
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [baslik, setBaslik] = useState("BAŞVURU FORMU");
    const contacts = useSelector((state) => state);
    const data = {
        id: contacts[contacts.length - 1].id + 1,
        etkinlikAd,
    };

    return (
        <form >
            <Header title={baslik} />
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
