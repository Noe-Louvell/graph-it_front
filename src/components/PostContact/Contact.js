import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './PostContact.css'



function Contact() {

    const [demandeDevis, setDemandeDevis] = useState(false);
    const [inp_Email, setInpEmail] = useState('')
    const [inp_NumTel, setInpNumTel] = useState('')
    const [inp_Nom, setInpNom] = useState('')
    const [inp_Prenom, setInpPrenom] = useState('')
    const [inp_Entreprise, setInpEntreprise] = useState('')
    const [inp_TypeProjet, setInpTypeProjet] = useState('')
    const [inp_Message, setInpMessage] = useState('')

    const [errorEmail, setErrorEmail] = useState('none')
    const [errorNumTel, setErrorNumTel] = useState('')
    const [errorNom, setErrorNom] = useState('none')
    const [errorPrenom, setErrorPrenom] = useState('none')
    const [errorMessage, setErrorMessage] = useState('none')
    const [errorEntreprise, setErrorEntreprise] = useState('none')

    const [displayError, setDisplayError] = useState('')

    function CheckSend() {

        console.log(errorEmail)
        if (errorEmail != '') {
            setDisplayError('veuillez renseigner une adresse email')
            setErrorEmail('veuillez renseigner une adresse email')
            return;
        } else {
            setDisplayError('')
        }

        if (errorNumTel != '') {
            setDisplayError(errorNumTel)
            return;
        } else {
            setDisplayError('')
        }

        if (inp_Nom == '') {
            setDisplayError('Veuillez renseigner votre nom')
            setErrorNom('Veuillez renseigner votre nom')
            return;
        }
        else {
            setDisplayError('')
            setErrorNom('')

        }

        if (inp_Prenom == '') {
            setDisplayError('Veuillez renseigner votre prenom')
            setErrorPrenom('Veuillez renseigner votre prenom')
            return;
        }
        else {
            setDisplayError('')
            setErrorPrenom('')
        }

        if (inp_Entreprise == '' & demandeDevis == true) {
            setDisplayError('Vous devez renseigner votre entreprise pour une demande de devis')
            setErrorEntreprise('Vous devez renseigner votre entreprise pour une demande de devis')
            return;
        }
        else {
            setDisplayError('')
            setErrorEntreprise('')
        }

        if (inp_Message == '') {
            setDisplayError('Veuillez renseigner votre message')
            setErrorMessage('Veuillez renseigner votre message')
            return;
        }
        else {
            setDisplayError('')
            setErrorMessage('')
        }

        console.log('tentative envoi')

        fetch("http://graph-it.cesi.group/clients", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                NomSociete: inp_Entreprise,
                NomC: inp_Nom,
                PrenomC: inp_Prenom,
                TypeC: inp_TypeProjet,
                CommentaireC: inp_Message,
                MailC: inp_Email,
                NumeroC: inp_NumTel,
            })
        }).then((res) => console.log(res.json()))

    }

    function checkNom(args) {
        let str = args.currentTarget.value;
        console.log("checkNom", str)
        setInpNom(str);

    }

    function checkNomSociete(args) {
        let str = args.currentTarget.value;
        console.log("checkNomSociete", str)
        setInpEntreprise(str);

    }

    function checkPrenom(args) {
        let str = args.currentTarget.value;
        console.log("checkPrenom", str)
        setInpPrenom(str);

    }

    function checkTypeProjet(args) {
        let str = args.currentTarget.value;
        console.log("TypeProjet", str)
        setInpTypeProjet(str);

    }

    function checkMessage(args) {
        let str = args.currentTarget.value;
        console.log("checkMessage", str)
        setInpMessage(str);

    }

    function checkEmail(args) {
        let str = args.currentTarget.value;
        console.log("checkEmail", str)
        setInpEmail(str);
        var regex = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (str == '') {
            setErrorEmail("Veuillez renseigner une adresse email")
        }
        else {
            if (regex.test(str)) {
                setErrorEmail('')
            }
            else {
                setErrorEmail("Veuillez entrer une adresse email valide")
            }
        }

    }

    function checkNumTel(args) {
        let str = args.currentTarget.value;
        setInpNumTel(str);
        var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;


        if (regex.test(str) || str == '') {
            setErrorNumTel('')
        }
        else {
            setErrorNumTel("Veuillez entrer un numéro de téléphone valide")
        }
    }

    function DevisSwitch() {
        if (demandeDevis === false) {
            setDemandeDevis(true)
        }
        else {
            setDemandeDevis(false)
        }
    }





    return (



        <div className="formBox">
            <input className="formImput" type="text" placeholder="Nom*" onChange={checkNom} />
            <input className="formImput" type="text" placeholder="Prénom*" onChange={checkPrenom} />
            <input className="formImput" type="text" placeholder="Adresse e-mail*" onChange={checkEmail} />
            <input className="formImput" type="text" placeholder="Numéro de téléphone*" onChange={checkNumTel} />
            <input className="formImput" type="text" placeholder="Message*" onChange={checkMessage} />
            <input className="formImput" type="text" placeholder="Nom de Société*" onChange={checkNomSociete} />
            <select className="formImput" type="text" placeholder="Type de Projet*" onChange={checkTypeProjet}>
                <option value="ApplicationMobile">Application Mobile</option>
                <option value="SiteWeb">Site Web</option>
            </select>
            <button onClick={CheckSend}>Envoyer</button>
            <div>{displayError}</div>
        </div>





    );
}


export default Contact
