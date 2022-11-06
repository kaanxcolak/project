import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Etkinliklerim = () => {
    const [baslik, setBaslik] = useState("ETKİNLİKLERİM");
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");

    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = {
        id: contacts[contacts.length - 1].id + 1,
        etkinlikAd,

    };
    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        toast.success("Event Silindi!");
    };
    return (
        <form>
            <Header title={baslik} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-5">
                        <table className='table table-bordered mt-5'>
                            <thead className='thead text-light'>
                                <tr>
                                    <th scope='col'>ETKİNLİK ADI</th>
                                    <th scope='col'>ETKİNLİK TARİHİ</th>
                                    <th scope='col'>KONUM</th>
                                    <th scope='col'>DURUM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, id) => (
                                        <tr key={id}>
                                            <td>{contact.etkinlikAd}</td>
                                            <td>{contact.tarih}</td>
                                            <td>{contact.etkinlikAlan}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Etkinliklerim;