import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { BsFillReplyFill } from "react-icons/bs";
import Header from '../components/Header';



const BasvuruFormu = () => {
    const [baslik, setBaslik] = useState("BAŞVURU FORMU");
    const [ad, setAd] = useState("");
    const [soyad, setSoyad] = useState("");
    const [tckn, setTckn] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [kartNo, setKartNo] = useState("");
    const [etkinlikAd, setEtkinlikAd] = useState("");

    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = {
        id: contacts[contacts.length - 1].id + 1,
        etkinlikAd,
    };
    return (
        <form >
            <Header title={baslik} />
            
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
                            <Link to={`/son`} className="btn btn-success px-5" >KAYDET</Link>

                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default BasvuruFormu;