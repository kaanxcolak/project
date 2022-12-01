import React, { useState, useEffect } from 'react'
import { BsFillCalendarMonthFill, BsMapFill, BsPeopleFill, BsFillBellFill, BsFillShareFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header2 from "../components/Header2";

const Takvim = () => {
    const [baslik, setBaslik] = useState("İPA ETKİNLİK TAKVİMİ");
    const { id } = useParams();
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const [kontenjan, setKontenjan] = useState("");
    const [kalanKontenjan, setKalanKontenjan] = useState("");

    const contacts = useSelector((state) => state);

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
    };
    return (
        <>
            <Header2 title={baslik} />

            <div className="container">
                <div className="row mt-5 mb-5 ">
                    <div className="col-sm-10 offset-sm-1">
                        <p>Florya Atatürk Ormanı’nda bugün İPA Kampüs olarak kullanılan yaklaşık 100 bin metrekarelik alan, geçmiş dönemlerde belediye başkanları tarafından lojman olarak kullanılan ve İstanbulluların erişiminin olmadığı kapalı bir alandı.</p>
                        <p>2019 yılında İstanbul Büyükşehir Belediye Başkanı Ekrem İmamoğlu’nun göreve gelmesiyle birlikte bu alan İstanbul Planlama Ajansı (İPA) ofisleri olarak kullanıma açıldı ve “İstanbul’un ortak aklının buluşma mekânı” olarak yeniden tasarlandı.</p>
                        <p>Kentin ruhunu yeniden yaşatmak ve İstanbul’un geleceğini yeni bakış açılarıyla hep birlikte tasarlamak için yakında kapılarını açacak olan İPA Kampüs’te, aynı zamanda İstanbul’un en büyük dijital kütüphanesi, havuzdan dönüştürülen sergi ve etkinlik alanı ile atölyeler için kullanılacak hangar yapıları yer almaktadır.</p>
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
                                                                    <Link to={`/sosyalPolitikalar`} className='h6 w-100 mb-2'>Detaylar | <BsFillShareFill /></Link>
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