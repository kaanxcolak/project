import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Header from '../components/Header';
import Guncelle from '../components/Guncelle';

const AlanTanimlama = () => {
    const [baslik, setBaslik] =useState("ETKİNLİK ALANI TANIMLAMA");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!etkinlikAlan) {
            return toast.warning("Lütfen alanı doldurunuz!");
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            etkinlikAlan,
        };

        dispatch({ type: "ADD_CONTACT", payload: data });
        toast.success("Event added successfully");
        navigate("/");
    };
    return (
        <form onSubmit={handleSubmit}>
            <Header title={baslik}/>
            <div className="container">
                <div className="row">
                    <h3 className='col-sm-12 mt-5 mb-5'>Etkinlik Alan Adı</h3>
                </div>
                <div className="row col-sm-9 offset-sm-2">
                    <input type="text" className='form-control' value={etkinlikAlan} onChange={e => setEtkinlikAlan(e.target.value)} />
                </div>
                <div className="row">
                    <div className="col-sm-12 text-light mt-5 ">
                    <button type='submit' className='btn btn-success px-5'>Kaydet</button>
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
                                    <Guncelle/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AlanTanimlama;
