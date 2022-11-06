const initialState = [
    {
        id: 0,
        etkinlikAd: "SOSYAL POLİTİKALAR ÇALIŞTAYI",
        etkinlikAciklama: "Açıklama,açıklama",
        tarih:"2022.01.08",
        etkinlikAlan:"Hangar",
        kontenjan: 100,
        basvuruSayisi:75,
        kalanKontenjan:25,                    
    },
    {
        id: 1,
        etkinlikAd: "SOSYAL POLİTİKALAR ÇALIŞTAYI-2",
        etkinlikAciklama: "Açıklama,açıklama",
        tarih:"2022.01.10",
        etkinlikAlan:"Kütüphane",
        kontenjan: 80,
        basvuruSayisi:50,
        kalanKontenjan:50,
    },
    {
        id: 2,
        etkinlikAd: "SOSYAL POLİTİKALAR ÇALIŞTAYI-3",
        etkinlikAciklama: "Açıklama,açıklama",
        tarih:"2022.08.02",
        etkinlikAlan:"Havuz",
        kontenjan: 60,
        basvuruSayisi:50,
        kalanKontenjan:25,                    
    },
    {
        id:3,
        etkinlikAd: "SOSYAL POLİTİKALAR ÇALIŞTAYI-4",
        etkinlikAciklama: "Açıklama,açıklama",
        tarih:"2022.01.01",
        etkinlikAlan:"Hangar",
        kontenjan: 90,
        basvuruSayisi:75,
        kalanKontenjan:25,                    
    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state =[ ...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => contact.id === action.payload.id? action.payload: contact );
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;     
        default:
            return state;
    }
};

export default contactReducer;  
