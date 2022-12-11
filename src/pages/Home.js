import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
    const [baslik,setBaslik] = useState("ETKİNLİK TANIMLAMA ALANI");
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [etkinlikAciklama, setEtkinlikAciklama] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const [kontenjan, setKontenjan] = useState("");
    const [basvuruSayisi, setBasvuruSayisi] = useState("");
    const [kalanKontenjan, setKalanKontenjan] = useState("");

    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        toast.success("Etkinlik silindi!");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!etkinlikAd || !etkinlikAciklama || !tarih || !etkinlikAlan || !kontenjan) {
            return toast.warning("Lütfen alanları doldurunuz!");
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            etkinlikAd,
            etkinlikAciklama,
            tarih,
            etkinlikAlan,
            kontenjan,
            basvuruSayisi,
            kalanKontenjan,
        };

        dispatch({ type: "ADD_CONTACT", payload: data });
        toast.success("Etkinlik Eklendi!");
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Header title={baslik}/>
            <div className="container">
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
                                        <textarea type="text" className='form-control ' value={etkinlikAciklama} onChange={e => setEtkinlikAciklama(e.target.value)} ></textarea>
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
            </div>
            <div className='container'>
                <div className="row ">
                    <div className="col-sm-12 text-light ">
                        <button type='submit' className='btn btn-success px-5 mt-5'>Kaydet</button>

                    </div>
                </div>
                <hr />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <table className='table table-bordered mt-5'>
                            <thead className='thead text-light'>
                                <tr>
                                    <th scope='col'>ETKİNLİK NO</th>
                                    <th scope='col'>ETKİNLİK ADI</th>
                                    <th scope='col'>AÇIKLAMASI</th>
                                    <th scope='col'>TARİH</th>
                                    <th scope='col'>KONUM</th>
                                    <th scope='col'>KONTENJAN</th>
                                    <th scope='col'>BAŞVURU SAYISI</th>
                                    <th scope='col'>KALAN KONTENJAN</th>
                                    <th scope='col'>DÜZENLE</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, id) => (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{contact.etkinlikAd}</td>
                                            <td>{contact.etkinlikAciklama}</td>
                                            <td>{contact.tarih}</td>
                                            <td>{contact.etkinlikAlan}</td>
                                            <td>{contact.kontenjan}</td>
                                            <td>{contact.basvuruSayisi}</td>
                                            <td>{contact.kontenjan - contact.basvuruSayisi}</td>
                                            <td>
                                                <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2 " >Güncelle</Link>
                                                <button type='button' onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger" >SİL</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Home;