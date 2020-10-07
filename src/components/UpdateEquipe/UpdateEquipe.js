

export default function UpdateEquipe(id, updateNom, updatePrenom) {

    console.log("up",id)

    return fetch('http://graph-it.cesi.group/Equipes/' + id, {
        method: 'PUT',
        dataType: 'json',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Nom: updateNom, Prenom: updatePrenom})
        
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