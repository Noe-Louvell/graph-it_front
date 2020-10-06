import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {

    const [NomRegistered, setNomRegistered] = useState('');
    const [PrenomRegistered, setPrenomRegistered] = useState('');
    const [EmailRegistered, setEmailRegistered] = useState('');
    const [TelRegistered, setTelRegistered] = useState('');
    const [MdpRegistered, setMdpRegistered] = useState('');
    const [Mdp2Registered, setMdp2Registered] = useState('');

    const [errorNomR, setErrorNomR] = useState('')
    const [errorPrenomR, setErrorPrenomR] = useState('')
    const [errorEmailR, setErrorEmailR] = useState('')
    const [errorTelR, setErrorTelR] = useState('')
    const [errorMdpR, setErrorMdpR] = useState('')
    const [errorMdp2R, setErrorMdp2R] = useState('')
    const [errorMdpconfirm, setErrorMdpconfirm] = useState('')

    const [displayError, setDisplayError] = useState('')

    function CheckRegister(){

        console.log(errorEmailR)
        if (errorEmailR != '') {
          setDisplayError('Veuillez renseigner une adresse email')
          setErrorEmailR('Veuillez renseigner une adresse email')
          return;
        } else {
            setDisplayError('')
        }

        if (errorTelR != '') {
          setDisplayError(errorTelR)
          return;
        } else {
          setDisplayError('')
        }

        if(NomRegistered == '') {
          setDisplayError('Veuillez renseigner votre nom')
          setErrorNomR('Veuillez renseigner votre nom')
          return;
        }
        else {
          setDisplayError('')
          setErrorNomR('')
        }

        if(PrenomRegistered == '') {
          setDisplayError('Veuillez renseigner votre prenom')
          setErrorPrenomR('Veuillez renseigner votre prenom')
          return;
        }
        else {
          setDisplayError('')
          setErrorPrenomR('')
        }

        if(EmailRegistered == '') {
          setDisplayError('Veuillez renseigner votre e-mail')
          setErrorEmailR('Veuillez renseigner votre e-mail')
          return;
        }
        else {
          setDisplayError('')
          setErrorEmailR('')
        }

        if(TelRegistered == '') {
          setDisplayError('Veuillez renseigner votre numéro de téléphone')
          setErrorTelR('Veuillez renseigner votre numéro de téléphone')
          return;
        }
        else {
          setDisplayError('')
          setErrorTelR('')
        }

        if(MdpRegistered == '') {
          setDisplayError('Veuillez renseigner votre mot de passe')
          setErrorMdpR('Veuillez renseigner votre mot de passe')
          return;
        }
        else {
          setDisplayError('')
          setErrorMdpR('')
        }

        if(Mdp2Registered == '') {
          setDisplayError('Veuillez confirmer votre mot de passe')
          setErrorMdp2R('Veuillez confirmer votre mot de passe')
          return;
        }
        else {
          setDisplayError('')
          setErrorMdp2R('')
        }

    if(MdpRegistered != Mdp2Registered) {
      setDisplayError('Vos mots de passe ne correspondent pas')
      setErrorMdpconfirm('Vos mots de passe ne correspondent pas')
      return;
    }
    else {
      setDisplayError('Vos mots de passe ne correspondent pas')
      setErrorMdpconfirm('Vos mots de passe ne correspondent pas')
    }

  console.log('tentative envoi')

  fetch("http://graph-it.cesi.group/registers", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      NomR: NomRegistered,
      PrenomR: PrenomRegistered,
      EmailR: EmailRegistered,
      TelR: TelRegistered,
      MdpR: MdpRegistered,
      Mdp2: Mdp2Registered,
    })
  }).then((res) => console.log(res.json()))

}

function checkNomR(args) {
  let str = args.currentTarget.value;
  console.log('checkNomR', str)
  setNomRegistered(str);
}

function checkPrenomR(args) {
  let str = args.currentTarget.value;
  console.log('checkPrenomR', str)
  setPrenomRegistered(str);
}

function checkEmailR(args) {
  let str = args.currentTarget.value;
  console.log('checkEmailR', str)
  setEmailRegistered(str);
  var regex = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (str == '') {
      setErrorEmailR("Veuillez renseigner une adresse email ")
  }
  else {
      if (regex.test(str)) {
          setErrorEmailR('')
      }
      else {
          setErrorEmailR("Veuillez entrer une adresse email valide")
      }
  }

}

function checkTelR(args) {
    let str = args.currentTarget.value;
    setTelRegistered(str);
    var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;


    if (regex.test(str) || str == '') {
        setErrorTelR('')
    }
    else {
        setErrorTelR("Veuillez entrer un numéro de téléphone valide")
    }
}


function checkMdpR(args) {
  let str = args.currentTarget.value;
  console.log('checkMdpR', str)
  setMdpRegistered(str);
}


function checkMdp2R(args) {
  let str = args.currentTarget.value;
  console.log('checkMdp2R', str)
  setMdp2Registered(str);
}


return (

  <div className="formBox">
      <input className="formImput" required id="filled-required" label="Required" placeholder="Nom*" variant="filled" onChange={checkNomR} />
      <input className="formImput" required id="filled-required" label="Required" placeholder="Prénom*" variant="filled" onChange={checkPrenomR} />
      <input className="formImput" required id="filled-required" label="Required" placeholder="Adresse Email*" variant="filled" onChange={checkEmailR} />
      <input className="formImput" required id="filled-required" label="Required" placeholder="Numéro de téléphone*" variant="filled" onChange={checkTelR} />
      <input className="formImput" type="password" required id="filled-required" label="Required" placeholder="Mot de passe*" variant="filled" onChange={checkMdpR} />
      <input className="formImput" type="password" required id="filled-required" label="Required" placeholder="Confirmation de Mot de passe*" variant="filled" onChange={checkMdp2R} />
      <button className="submitButton" onClick={CheckRegister}>Envoyer</button>
      <div>{displayError}</div>
  </div>

)

}
export default Register
