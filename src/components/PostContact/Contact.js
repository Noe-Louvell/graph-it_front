import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostContact.css'


function Contact() {


    const [inp_Email, setInpEmail] = useState('')
    const [inp_NumTel, setInpNumTel] = useState('')
    const [inp_Nom, setInpNom] = useState('')
    const [inp_Prenom, setInpPrenom] = useState('')
    const [inp_Entreprise, setInpEntreprise] = useState('')
    const [inp_Message, setInpMessage] = useState('')

    const [errorEmail, setErrorEmail] = useState('none')
    const [errorNumTel, setErrorNumTel] = useState('')
    const [errorNom, setErrorNom] = useState('none')
    const [errorPrenom, setErrorPrenom] = useState('none')
    const [errorMessage, setErrorMessage] = useState('none')
    const [errorEntreprise, setErrorEntreprise] = useState('none')

    const [displayError, setDisplayError] = useState('')

    function SendMailNotif() {

      fetch("http://graph-it.cesi.group/email", {
          method: "post",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify({
            to: 'alexvesier@gmail.com',
      from: 'NotifFormContact@graphit.com',
      replyTo: 'your@address.com',
      subject: 'Demande Contact',
      text: 'Le formulaire de contact a été complété et envoyé',
      html: '<h1>Le formulaire de contact a été complété et envoyé</h1>'
          })
      }).then((res) => console.log(res.json()))
    }

    function CheckSend() {

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

        console.log(errorEmail)
        if (errorEmail != '') {
            setDisplayError('veuillez renseigner une adresse email')
            setErrorEmail('veuillez renseigner une adresse email')
            return;
        } else {
            setDisplayError('')
        }

        if (errorNumTel != '') {
            setDisplayError('Veuillez renseigner un numéro de téléphone')
            setErrorNumTel('Veuillez renseigner un numéro de téléphone')
            return;
        } else {
            setDisplayError('')
        }

        if (inp_Entreprise == '') {
            setDisplayError('Vous devez renseigner le nom de votre entreprise')
            setErrorEntreprise('Vous devez renseigner le nom de votre entreprise')
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



    return (


        <div className="formBox">
            <input className="formImput" required id="filled-required" label="Required" placeholder="Nom*" variant="filled" onChange={checkNom} />
            <input className="formImput" required id="filled-required" label="Required" placeholder="Prénom*" variant="filled" onChange={checkPrenom} />
            <input className="formImput" required id="filled-required" label="Required" placeholder="Adresse Email*" variant="filled" onChange={checkEmail} />
            <input className="formImput" required id="filled-required" label="Required" placeholder="Numéro de téléphone*" variant="filled" onChange={checkNumTel} />
            <input className="formImput" required id="filled-required" label="Required" placeholder="Nom de la société*" variant="filled" onChange={checkNomSociete} />
            <input className="formImput" required id="filled-required" label="Required" placeholder="Message*" variant="filled" onChange={checkMessage} />
            <button className="submitButton" onClick={() => {
              CheckSend();
              SendMailNotif();
            }}>Envoyer</button>
            <div>{displayError}</div>
        </div>

    );
}
export default Contact
