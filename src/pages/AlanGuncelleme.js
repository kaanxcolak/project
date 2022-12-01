import React, { useEffect, useState } from 'react';
import Guncelle from '../components/Guncelle';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



const AlanGuncelleme = () => {
    const [baslik, setBaslik] = useState("ETKİNLİK ALAN ADI");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const { id } = useParams();

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    useEffect(() => {
        if (currentContact) {
            setEtkinlikAlan(currentContact.etkinlikAlan);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!etkinlikAlan) {
            return toast.warning("Lütfen alanı doldurunuz!");
        }
        const data = {
            id: parseInt(id),
            etkinlikAlan,
        };
        dispatch({ type: "UPDATE_CONTACT", payload: data });
        toast.success("Etkinlik güncellemesi başarılı!");
        navigate("/");    
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
