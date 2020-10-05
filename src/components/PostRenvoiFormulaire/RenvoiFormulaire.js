import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostRenvoiFormulaire.css'



function RenvoiFormulaire() {

    const [inp_Tel, setInpTel] = useState('');
    const [inp_Mail, setInpMail] = useState('');
    const [inp_TypeStructure, setInpTypeStructure] = useState('');
    const [inp_RaisonSociale, setInpRaisonSociale] = useState('');
    const [inp_Ville, setInpVille] = useState('');
    const [inp_NomContact, setInpNomContact] = useState('');
    const [inp_SiteWeb, setInpSiteWeb] = useState('');
    const [inp_TypeProjets, setInpTypeProjets] = useState('');
    const [inp_DescProjets, setInpDescProjets] = useState('');
    const [inp_PieceJointe, setInpPieceJointe] = useState('');

    const [errorTypeStructure, setErrorTypeStructure] = useState('')
    const [errorRaisonSociale, setErrorRaisonSociale] = useState('')
    const [errorNomContact, setErrorNomContact] = useState('');
    const [errorVille, setErrorVille] = useState('')
    const [errorTel, setErrorTel] = useState('')
    const [errorMail, setErrorMail] = useState('')
    const [errorSiteWeb, setErrorSiteWeb] = useState('')
    const [errorTypeProjets, setErrorTypeProjets] = useState('')
    const [errorDescProjets, setErrorDescProjets] = useState('')

    const [displayError, setDisplayError] = useState('')

    function CheckForm() {


        if (errorMail != '') {
            setDisplayError('veuillez renseigner une adresse email')
            setErrorMail('veuillez renseigner une adresse email')
            return;
        } else {
            setDisplayError('')
        }

        if (errorTel != '') {
            setDisplayError("Veuillez renseigner un numéro de téléphone")
            return;
        } else {
            setDisplayError('')
        }

        if (inp_Mail == '') {
            setDisplayError('Veuillez renseigner un mail')
            setErrorMail('Veuillez renseigner un mail')
            return;
        }
        else {
            setDisplayError('')
            setErrorMail('')

        }

        if (inp_Tel == '') {
            setDisplayError('Veuillez renseigner le numéro de téléphone')
            setErrorTel('Veuillez renseigner le numéro de téléphone')
            return;
        }
        else {
            setDisplayError('')
            setErrorTel('')

        }

        if (inp_TypeStructure == '') {
            setDisplayError('Veuillez renseigner le type de structure')
            setErrorTypeStructure('Veuillez renseigner le type de structure')
            return;
        }
        else {
            setDisplayError('')
            setErrorTypeStructure('')

        }

        if (inp_RaisonSociale == '') {
            setDisplayError('Veuillez renseigner une raison sociale')
            setErrorRaisonSociale('Veuillez renseigner une raison sociale')
            return;
        }
        else {
            setDisplayError('')
            setErrorRaisonSociale('')
        }

        if (inp_Ville == '') {
            setDisplayError('Veuillez renseigner votre ville')
            setErrorVille('Veuillez renseigner votre ville')
            return;
        }
        else {
            setDisplayError('')
            setErrorVille('')
        }

        if (inp_NomContact == '') {
            setDisplayError('Veuillez renseigner le nom du contact')
            setErrorNomContact('Veuillez renseigner le nom du contact')
            return;
        }
        else {
            setDisplayError('')
            setErrorNomContact('')
        }

        if (inp_SiteWeb == '') {
            setDisplayError('Veuillez renseigner le nom du site web')
            setErrorSiteWeb('Veuillez renseigner le nom du site web')
            return;
        }
        else {
            setDisplayError('')
            setErrorSiteWeb('')
        }

        if (inp_TypeProjets == '') {
            setDisplayError('Veuillez renseigner le type de projet')
            setErrorTypeProjets('Veuillez renseigner le type de projet')
            return;
        }
        else {
            setDisplayError('')
            setErrorTypeProjets('')
        }

        if (inp_DescProjets == '') {
            setDisplayError('Veuillez renseigner la description de votre projet')
            setErrorDescProjets('Veuillez renseigner la description de votre projet')
            return;
        }
        else {
            setDisplayError('')
            setErrorDescProjets('')
        }

        console.log('tentative envoi')

        fetch("http://graph-it.cesi.group/projets", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                TypeStructure: inp_TypeStructure,
                RaisonSociale: inp_RaisonSociale,
                Ville: inp_Ville,
                ReferenDuProjet: inp_NomContact,
                TelephoneDuReferent: inp_Tel,
                MailReferent: inp_Mail,
                SiteWeb: inp_SiteWeb,
                TypeDuProjet: inp_TypeProjets,
                DescriptionDuProjet: inp_DescProjets,
                PieceJointe: inp_PieceJointe,

            })
        }).then((res) => console.log(res.json()))

    }

    function checkTypeStructure(args) {
        let str = args.currentTarget.value;
        console.log("checkTypeStructure", str)
        setInpTypeStructure(str);

    }

    function checkRaisonSociale(args) {
        let str = args.currentTarget.value;
        console.log("checkRaisonSociale", str)
        setInpRaisonSociale(str);

    }

    function checkVille(args) {
        let str = args.currentTarget.value;
        console.log("checkVille", str)
        setInpVille(str);

    }

    function checkReferentDuProjet(args) {
        let str = args.currentTarget.value;
        console.log("CheckReferentDuProjet", str)
        setInpNomContact(str);

    }

    function checkSiteWeb(args) {
        let str = args.currentTarget.value;
        console.log("checkSiteWeb", str)
        setInpSiteWeb(str);

    }

    function checkTypeDuProjet(args) {
        let str = args.currentTarget.value;
        console.log("checkTypeDuProjet", str)
        setInpTypeProjets(str);

    }

    function checkDescriptionDuProjet(args) {
        let str = args.currentTarget.value;
        console.log("checkDescriptionDuProjet", str)
        setInpDescProjets(str);

    }

    function checkPieceJointe(args) {
        let str = args.currentTarget.value;
        console.log("checkPieceJointe", str)
        setInpPieceJointe(str);

    }

    function checkMail(args) {
        let str = args.currentTarget.value;
        console.log("checkMail", str)
        setInpMail(str);
        var regex = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (str == '') {
            setErrorMail("Veuillez renseigner une adresse email")
        }
        else {
            if (regex.test(str)) {
                setErrorMail('')
            }
            else {
                setErrorMail("Veuillez entrer une adresse email valide")
            }
        }

    }

    function checkTel(args) {
        let str = args.currentTarget.value;
        setInpTel(str);
        var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;


        if (regex.test(str) || str == '') {
            setErrorTel('')
        }
        else {
            setErrorTel("Veuillez entrer un numéro de téléphone valide")
        }
    }

    return (

      <div className="formBox">
            <select className="formImput" type="text" placeholder="Type de Structure*" onChange={checkTypeStructure}>
              <option value="Choisir">Choisir</option>
              <option value="entreprise">Entreprise</option>
              <option value="association">Association</option>
              </select>

          <input className="formImput" placeholder="Raison Sociale" onChange={checkRaisonSociale} />
          <input className="formImput" required id="filled-required" label="Required" placeholder="Ville*" variant="filled" onChange={checkVille} />
          <input className="formImput" required id="filled-required" label="Required" placeholder="Nom du Contact*" variant="filled" onChange={checkReferentDuProjet} />
          <input className="formImput" required id="filled-required" label="Required" placeholder="Telephone*" variant="filled" onChange={checkTel} />
          <input className="formImput" required id="filled-required" label="Required" placeholder="E-Mail*" variant="filled" onChange={checkMail} />
          <input className="formImput" placeholder="Site Web*" onChange={checkSiteWeb} />

            <select className="formImput" type="text" placeholder="Type de Projet*" onChange={checkTypeDuProjet}>
                <option value="choisir">Choisir</option>
                <option value="siteWeb">Site Web</option>
                <option value="applicationMobile">Application Mobile</option>
                <option value="application">Application</option>
                <option value="marketingdigital">Marketing Digital</option>
                <option value="autre">Autre</option>
            </select>
            <input type="file" onChange={checkPieceJointe} />
          <input className="formImput" required id="filled-required" label="Required" placeholder="Message*" variant="filled" onChange={checkDescriptionDuProjet} />
            <button className="submitButton" onClick={CheckForm}>Envoyer</button>
            <div>{displayError}</div>
        </div>


    );
}


export default RenvoiFormulaire
