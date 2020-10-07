    import React, { useState } from 'react';
import './PostRealisation.css';



export default function PostRealisation (){

    const [inp_Titre, setInpTitre] = useState('')
    const [inp_Date, setInpDate] = useState('')
    const [inp_image, setInpimage] = useState('')
    const [inp_TypeReal, setInpTypeReal] = useState('')
    const [inp_Description, setInpDescription] = useState('')
    const [inp_Subtitle, setInpSubtitle] = useState('')

    const [errorTitre, setErrorTitre] = useState('none')
    const [errorDate, setErrorDate] = useState('none')
    const [errorimage, setErrorimage] = useState('none')
    const [errorTypeReal, setErrorTypeReal] = useState('none')
    const [errorDescription, setErrorDescription] = useState('none')
    const [errorSubtitle, setErrorSubtitle] = useState('none')

    const [displayError, setDisplayError] = useState('')

    fetch("http://graph-it.cesi.group/Realisations", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            TitreR: inp_Titre,
            DateR: inp_Date,
            ImageR: inp_image,
            TypeR: inp_TypeReal,
            DescriptionR: inp_Description,
            SubtitleR: inp_Subtitle,
        })
    }).then((res) => console.log(res.json()))
}


