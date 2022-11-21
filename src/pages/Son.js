import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header2 from '../components/Header2';


const Son = () => {
    
    const [baslik, setBaslik] = useState("BAŞVURU FORMU");

    return (
        <form >
            <Header2 title={baslik} />
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
};

export default Son;
