import React, { useState, useEffect } from 'react'
import { BsFillCalendarMonthFill, BsMapFill, BsPeopleFill, BsFillBellFill, BsFillShareFill } from "react-icons/bs";
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Header from "../components/Header";

const Takvim = () => {
    const [baslik,setBaslik] =useState("İPA ETKİNLİK TAKVİMİ");
    const { id } = useParams();
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const [kontenjan, setKontenjan] = useState("");
    const [kalanKontenjan, setKalanKontenjan] = useState("");

    const contacts = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentContact = contacts.find((contact) => contact.id === parseInt(id));
    useEffect(() => {
        if (currentContact) {
            setEtkinlikAd(currentContact.etkinlikAd);
            setTarih(currentContact.tarih);
            setEtkinlikAlan(currentContact.etkinlikAlan);
            setKontenjan(currentContact.kontenjan);
            setKalanKontenjan(currentContact.kalanKontenjan);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!etkinlikAd) {
            return toast.warning("Lütfen alanları doldurunuz!");
        }        
    };
    return (
        <>
            <Header title={baslik}/>

            <div className="container">
                <div className="row mt-5 mb-5 ">
                    <div className="col-sm-10 offset-sm-1">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>

                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-12">
                                <div className="col-12">
                                    <div className="row">                                        
                                    {
                                            contacts.map((contact, id) => (
                                                <div key={id} className="col-lg-3 col-md-4 ">
                                                    <div class="ui three column grid text-light">
                                                            <div class="column">
                                                                <div class="ui-fluid-card ">
                                                                <h2 className='h1 p-4'>{contact.etkinlikAd}</h2>
                                                                    <hr class="opacity-75" />
                                                                    <div class="content">
                                                                        <div className="row">
                                                                            <div className="col-5 text-end">
                                                                                <h6><BsFillCalendarMonthFill /></h6>
                                                                            </div>
                                                                            <div className="col-5 ">
                                                                                <h6>{contact.tarih} </h6><br />
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-5 text-end">
                                                                                <h6><BsMapFill /></h6>
                                                                            </div>
                                                                            <div className="col-5 ">
                                                                                <h6>{contact.etkinlikAlan}</h6> <br />
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-5 text-end">
                                                                                <h6><BsPeopleFill /></h6>
                                                                            </div>
                                                                            <div className="col-5 ">
                                                                                <h6>{contact.kontenjan}</h6> <br />
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-5 text-end">
                                                                                <h6><BsFillBellFill /></h6>
                                                                            </div>
                                                                            <div className="col-5 ">
                                                                                <h6>{contact.kontenjan - contact.basvuruSayisi}</h6> <br />
                                                                            </div>
                                                                        </div>
                                                                        <Link to={`/basvuruFormu`} value={etkinlikAd} onChange={e => setEtkinlikAd(e.target.value)} className="btn btn-light px-5">Başvur</Link>
                                                                    </div>
                                                                    <div class="card-footer bg-light">
                                                                        <Link to={`/sosyalPolitikalar`} className='h6 w-100 mb-2'>Detaylar | <BsFillShareFill/></Link>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                    </div>
                                                    
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Takvim;