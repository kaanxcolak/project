import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Header2 from '../components/Header2';

const BasvuruFormu = () => {
    const [baslik, setBaslik] = useState("BAŞVURU FORMU");
    const [ad, setAd] = useState("");
    const [soyad, setSoyad] = useState("");
    const [tckn, setTckn] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [kartNo, setKartNo] = useState("");

    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!ad || !soyad || !tckn || !email || !telefon || !kartNo) {
            return toast.warning("Lütfen alanları doldurunuz!");
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            ad,
            soyad,
            tckn,
            email,
            telefon,
            kartNo,
        };

        dispatch({ type: "ADD_CONTACT", payload: data });
        toast.success("Başvuru Eklendi!");
        navigate("/son")
    };
    return (
        <form onSubmit={handleSubmit}>
            <Header2 title={baslik} />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-4">
                        <label for="inputAd" className="col-sm-6 col-form-label mb-5 ">Ad</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className='form-control' value={ad} onChange={e => setAd(e.target.value)} />
                    </div>
                    <div className="col-sm-4">
                        <label for="inputAd" className="col-sm-6 col-form-label mb-5 ">Soyad</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className='form-control' value={soyad} onChange={e => setSoyad(e.target.value)} />
                    </div>
                    <div className="col-sm-4">
                        <label for="inputAd" className="col-sm-6 col-form-label mb-5 ">TCKN</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className='form-control' value={tckn} onChange={e => setTckn(e.target.value)} />
                    </div>
                    <div className="col-sm-4">
                        <label for="inputAd" className="col-sm-6 col-form-label mb-5 ">E-Posta</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="col-sm-4">
                        <label for="inputAd" className="col-sm-6 col-form-label mb-5 ">Telefon</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className='form-control is-valid' value={telefon} onChange={e => setTelefon(e.target.value)} />
                    </div>
                    <div className="col-sm-4">
                        <label for="inputAd" className="col-sm-6 col-form-label mb-5 ">istanbul Kart No</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className='form-control is-invalid' value={kartNo} onChange={e => setKartNo(e.target.value)} />
                        <div className="col-sm-6 mt-3 py-5 mx-0">
                            <input class="form-check-input mx-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Açık Rıza Metni
                            </label>
                            <input class="form-check-input mx-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                KVK
                            </label>
                        </div>
                        <div className="col-7">
                            <button type='submit' className='btn btn-success px-5 mt-5'>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BasvuruFormu;