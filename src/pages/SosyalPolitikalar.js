import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BsFillCalendarMonthFill, BsMapFill, BsPeopleFill, BsFillBellFill, BsFillReplyFill } from "react-icons/bs";
import Header from "../components/Header";

const SosyalPolitikalar = () => {
    const [baslik,setBaslik] = useState("Başvuru Formu");
    const { id } = useParams();
    const [etkinlikAd, setEtkinlikAd] = useState("");
    const [tarih, setTarih] = useState("");
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    const [kontenjan, setKontenjan] = useState("");
    const contacts = useSelector((state) => state);

    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    useEffect(() => {
        if (currentContact) {
            setEtkinlikAd(currentContact.etkinlikAd);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        const data = {
            id: parseInt(id),
            etkinlikAd,
            tarih,
            kontenjan,
            etkinlikAlan,
        };
    };
    return (
        <form onSubmit={handleSubmit}>
            <Header title={baslik}/>

            <div className="container">
                {
                    contacts.map((contact, id) => (
                        <div key={id} className="row">

                            <div className="col-sm-8 mt-5 text-end mb-5">
                                <h3>{contact.etkinlikAd}</h3>
                            </div>
                            <div className="col-sm-4 mt-5 position-relative">
                            <Link to="/takvim"><BsFillReplyFill /> Geri Dön</Link>
                            </div>
                            <div className="col-12 ">
                                <div class="ui-fluid-card text-light mb-5">
                                    <div className="row">
                                        <div className="col-sm-3 p-4"><h4><BsFillCalendarMonthFill /> {contact.tarih} </h4></div>
                                        <div className="col-sm-3 p-4"><h4><BsMapFill />  {contact.etkinlikAlan}</h4></div>
                                        <div className="col-sm-3 p-4"><h4><BsPeopleFill />  {contact.kontenjan}</h4></div>
                                        <div className="col-sm-3 p-4"><h4><BsFillBellFill />Kalan Kotenjan: {contact.kontenjan - contact.basvuruSayisi}</h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti consequuntur, possimus illo dolorum quibusdam molestiae recusandae esse iste quas expedita numquam sequi sunt dolore quam omnis similique. Doloribus, dolores.
                                    Voluptatem eos ducimus rem explicabo quia numquam sequi quis consequatur officia odit dignissimos, minima dicta corporis et aspernatur necessitatibus sed, eum fugit doloremque repellat laboriosam ullam cumque. Blanditiis, cupiditate neque!</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis provident eos voluptatem ex? Culpa, consequuntur numquam aut laborum quos, molestias veniam praesentium quidem modi aspernatur molestiae ipsa placeat autem tenetur?
                                    Praesentium, error nisi id modi odio pariatur temporibus rerum quod ab velit dignissimos nemo nesciunt exercitationem nam asperiores deleniti molestiae iste. Voluptas ipsam maiores minus, impedit quasi laboriosam alias modi.
                                    Consequatur, deserunt sequi! Pariatur nesciunt ducimus possimus officia eligendi animi a quo illum illo perferendis? Enim, ab tempore reiciendis laudantium, praesentium illo quo sed sapiente explicabo recusandae iste voluptates. Quos?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia quidem maxime saepe est quos reiciendis officiis ratione eum ducimus, voluptatibus, tenetur minus neque quisquam laborum et ex labore aliquam.</p>
                            </div><div className="col-sm-12 mt-5 mb-5 ">
                                <Link to={`/basvuruFormu`} className="btn bg-warning px-5 text-light">BAŞVUR</Link>
                            </div>

                        </div>
                    ))}
            </div>

        </form >

    )
}

export default SosyalPolitikalar;