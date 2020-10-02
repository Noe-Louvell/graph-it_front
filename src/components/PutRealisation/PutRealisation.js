import React, { useState } from 'react';
import './PutRealisation.css';



export default function PutRealisation (){

    const [data, setData] = useState(null);

    function PutRealisationFunction() {


        fetch('http://graph-it.cesi.group/Realisations/:id', {
            method: 'PUT',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                response.json()
                    .then((responseData) => {
                        //console.log(responseData)
                        setData(responseData)
                    });
            })
            .catch(function (err) {
                //console.log(err)
            })
    }
}