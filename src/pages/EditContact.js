import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Header from "../components/Header";

const EditContact = () => {
    const [baslik,setBaslik] = useState("ETKİNLİK TANIMLAMA ALANI");
    const { id } = useParams();
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [etkinlikAciklama, setEtkinlikAciklama] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const [kontenjan, setKontenjan] = useState("");
    const [basvuruSayisi, setBasvuruSayisi] = useState("");
    const [kalanKontenjan, setKalanKontenjan] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    useEffect(() => {
        if (currentContact) {
            setEtkinlikAd(currentContact.etkinlikAd);
            setEtkinlikAciklama(currentContact.etkinlikAciklama);
            setTarih(currentContact.tarih);
            setEtkinlikAlan(currentContact.etkinlikAlan);
            setKontenjan(currentContact.kontenjan);
            setBasvuruSayisi(currentContact.basvuruSayisi);
            setKalanKontenjan(currentContact.kalanKontenjan);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!etkinlikAd || !etkinlikAciklama || !tarih || !etkinlikAlan || !kontenjan) {
            return toast.warning("Lütfen alanları doldurunuz!");
        }
        const data = {
            id: parseInt(id),
            etkinlikAd,
            etkinlikAciklama,
            tarih,
            etkinlikAlan,
            kontenjan,
            basvuruSayisi,
            kalanKontenjan,
        };

        dispatch({ type: "UPDATE_CONTACT", payload: data });
        toast.success("Etkinlik güncellemesi başarılı!");
        navigate("/");
    };
    return (
        <form onSubmit={handleSubmit}>
            <Header title={baslik}/>
            <div className="container">
                {currentContact ? (
                    <>   
                    <div className="row">
                            <div className="col-sm-6 mt-5">
                                <div className="col-12">
                                    <div className="row ">
                                        <div className="col-12 mb-4">
                                            <div className="col d-flex align-items-center">
                                                <label for="inputAd" className="col-sm-6 col-form-label">Etkinlik Adı</label>
                                                <input type="text" className='form-control' value={etkinlikAd} onChange={e => setEtkinlikAd(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="col d-flex align-items-center">
                                                <label for="input-group" className="col-sm-6 col-form-label ">Etkinlik Açıklaması</label>
                                                <textarea type="text" className='form-control' value={etkinlikAciklama} onChange={e => setEtkinlikAciklama(e.target.value)} ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-5">
                                <div className="col-12">
                                    <div className="row ">
                                        <div className="col-12 mb-4">
                                            <div className="col d-flex align-items-center">
                                                <label for="inputAlan" className="col-sm-6 col-form-label ">Etkinlik Alanı</label>
                                                <select className="form-select" aria-label="Default select example" value={etkinlikAlan} onChange={e => setEtkinlikAlan(e.target.value)}>
                                                    <option selected>Seçiniz</option>
                                                    <option value="Hangar">Hangar</option>
                                                    <option value="Havuz">Havuz</option>
                                                    <option value="Kütüphane">Kütüphane</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <div className="col d-flex align-items-center">
                                                <label for="input-group" className="col-sm-6 col-form-label ">Kontenjan</label>
                                                <input type="text" className='form-control' value={kontenjan} onChange={e => setKontenjan(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="col d-flex align-items-center">
                                                <label for="inputAd" className="col-sm-6 col-form-label ">Etkinlik Tarihi</label>
                                                <input type="date" id="txtDate" className='form-control' value={tarih} onChange={e => setTarih(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button type='submit' className='btn btn-success px-5 mt-5'>Guncelle</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 >Etkinlik id'si {id} olan etkinlik yok!</h1>
                )}
            </div>       
        </form>
    );
};

export default EditContact;