import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify";



const AddContact = () => {
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [etkinlikAciklama, setEtkinlikAciklama] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const [kontenjan, setKontenjan] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!etkinlikAd || !etkinlikAciklama || !etkinlikAlan || !kontenjan ){
            return toast.warning("Lütfen alanları doldurunuz!");
        }
       const data = {
        id: contacts[contacts.length -1].id +1,
        etkinlikAd,
        etkinlikAciklama,
        etkinlikAlan,
        kontenjan,
    }; 

       dispatch({type:"ADD_CONTACT",payload:data});
       toast.success("Event added successfully");
       navigate("/");
   };


    return (
        <form onSubmit={handleSubmit}>
            <div className='border-bottom-dark py-1 mt-5'>
                {/* container - start */}
                <div className="container ">
                    <div className="row mb-3 ">
                        <div className="col-sm-4">
                            <img src="https://ipa.istanbul/wp-content/uploads/2021/08/IPA_RENKLI-TR-01-1-300x117.png" alt="ipa" />
                        </div>
                        <div className="col-sm-4 mt-5 ">
                            <span><h4 className="fw-semibold">ETKİNLİK TANIMLAMA EKRANI</h4></span>
                        </div>
                        <div className="col-sm-4 mt-5 ms-auto">
                            <select name="lang" id="lang" class="form-select form-select-md p-2 " onChange=""
                                aria-label="Default select example ">
                                <option >IPA USERS</option>
                                <option value="/aaa">Etkinlik Tanımlama</option>
                                <option value="http://localhost:3000/alantanimlama">Etkinlik Alanı Tanımlama</option>
                                <option value="3">Çıkış</option>
                            </select>

                        </div>
                    </div>
                </div> {/* container - end */}
            </div>
            <div className="container">
                <div className="row mt-5 p-5">
                    <div className="col-sm-6  ">
                        <div className="col-sm-6  offset-sm-1">
                            <div className="mt-3 row  ">
                                <label for="inputAd" className="col-sm-6 col-form-label mb-5">Etkinlik Adı</label>
                                <div className="col-sm-6">
                                    <input type="text" className='form-control' value={etkinlikAd} onChange={e=> setEtkinlikAd(e.target.value)} />
                                </div>
                                <label for="input-group" className="col-sm-6 col-form-label mb-5    ">Etkinlik Açıklaması</label>
                                <div className="col-sm-6">
                                    <textarea type="text" className='form-control' value={etkinlikAciklama} onChange={e=> setEtkinlikAciklama(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="col-sm-6 offset-sm-3">
                            <div className=" row  ">
                                <label for="inputAlan" className="col-sm-6 col-form-label mb-5">Etkinlik Alanı</label>
                                <div className="col-md-6">
                                    <select className="form-select" aria-label="Default select example" value={etkinlikAlan} onChange={e=> setEtkinlikAlan(e.target.value)}>
                                        <option selected>seçiniz</option>
                                        <option value="Hangar">Hangar</option>
                                        <option value="Havuz">Havuz</option>
                                        <option value="Kütüphane">Kütüphane</option>
                                    </select>
                                </div>
                                <label for="input-group" className="col-sm-6 col-form-label mb-5">Kontenjan</label>
                                <div className="col-sm-6 ">
                                    <input type="number" id="inputTarih" className='form-control' value={kontenjan} onChange={e=> setKontenjan(e.target.value)} />
                                </div>
                                {/* <label for="inputAd" className="col-sm-6 col-form-label mb-5">Etkinlik Tarihi</label>
                                <div className="col-sm-6">
                                    <input type="date" id="txtDate" className='form-control'></input>

                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">

                    <div className="col-md-12 my-5 text-right">
                        <input type="submit" value="Add Student" classname="btn btn-success" />
                    </div>
                </div>

            </div>

        </form>
    );
};

export default AddContact;