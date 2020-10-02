import React, { useState } from 'react';
import './PostRealisation.css';



export default function PostRealisation (){

const [data, setData] = useState(null);

function PostRealisationFunction() {



    fetch('http://graph-it.cesi.group/Realisations', {
        method: 'POST',
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