import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { Link, useParams } from 'react-router-dom';


const Guncelle = () => {
    const contacts = useSelector((state) => state);
    const { id } = useParams();
    const [etkinlikAlan, setEtkinlikAlan] = useState("");
    
    const dispatch = useDispatch();

    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    useEffect(() => {
        if (currentContact) {
            setEtkinlikAlan(currentContact.etkinlikAlan);
        }
    }, [currentContact]);

    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        toast.success("Event Silindi!");
    };

    return (
        contacts.map((contact, id) => (
            <tr key={id}>
                <td>{id + 1}</td>
                <td>{contact.etkinlikAlan}</td>
                <td>
                    <Link to={`/alanGuncelleme/${contact.id}`} className="btn btn-small btn-primary mr-2 " >DÜZENLE</Link>
                    <button type='button' onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger" >SİL</button>
                    
                </td>

            </tr>
        ))

    )
}
export default Guncelle;