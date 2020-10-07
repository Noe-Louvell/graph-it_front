export default function UpdateClient(id, updateNom, updatePrenom, updateNomSociete, updateMail, updateNumero) {

    console.log("up", id)

    return fetch('http://graph-it.cesi.group/Clients/' + id, {
        method: 'PUT',
        dataType: 'json',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            NomC: updateNom,
            PrenomC: updatePrenom,
            NomSociete: updateNomSociete,
            MailC: updateMail,
            NumeroC: updateNumero,
        })

    },

    )
        .then((response) => {
            response.json()
                .then((responseData) => {
                    console.log(responseData)
                    return (responseData)
                });
        })
        .catch(function (err) {
            console.log(err)
            return (null)
        })
}