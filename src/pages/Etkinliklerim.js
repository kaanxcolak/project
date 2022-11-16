import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Header2 from "../components/Header2";
import Pagination from "../components/Pagination";

const Etkinliklerim = () => {
    const [baslik, setBaslik] = useState("ETKİNLİKLERİM");
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");

    const contacts = useSelector((state) => state);


    return (
        <form>
            <Header2 title={baslik} />
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