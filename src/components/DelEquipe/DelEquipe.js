

export default function DelEquipe (id){
    return fetch('http://graph-it.cesi.group/Equipes/'+ id, {
            method: 'DELETE',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((response) => {
                response.json()
                    .then((responseData) => {
                        console.log(responseData)
                        return (responseData)
                    });
            })
            .catch(function (err) {
                console.log(err)
                return(null)
            })
    }