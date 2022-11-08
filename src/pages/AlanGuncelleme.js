import React, { useState } from 'react'
import Guncelle from '../components/Guncelle';
import Header from '../components/Header';
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';

const AlanGuncelleme = () => {
    const [baslik,setBaslik] =useState("ETKİNLİK ALAN ADI");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");    
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!etkinlikAlan) {
            return toast.warning("Lütfen alanları doldurunuz!");
        }
        const data = {
            id: parseInt(id),
            etkinlikAlan,
        };
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <Header title={baslik} />
            <div className="container">
                <div className="row">
                    <h3 className='col-sm-12 mt-5 mb-5'>Etkinlik Alan Adı</h3>
                </div>
                <div className="row col-sm-9 offset-sm-2">
                    <input type="text" className='form-control' value={etkinlikAlan} onChange={e => setEtkinlikAlan(e.target.value)} />
                </div>
                <div className="row mt-5 mb-5">

                    <div className="col-sm-12 text-light ">
                    <button type='submit' className='btn btn-success px-5'>Güncelle</button>
                    </div>

                </div>
                <hr />
            </div>
            <div className="container">
                <div className="col-sm-10 mx-auto">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="row">
                            <table className='table table-bordered mt-5 table-hover'>
                                <thead className='thead text-light '>
                                    <tr>
                                        <th scope='col'>ETKİNLİK ALAN NO</th>
                                        <th scope='col'>ETKİNLİK ALAN ADI</th>
                                        <th scope='col'>DÜZENLE</th>

                                    </tr>
                                </thead>
                                <tbody>
                                <Guncelle />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </form>
    )

}
export default AlanGuncelleme;
