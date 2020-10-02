import React, { useState } from 'react';
import './DelRealisation.css';



export default function DelRealisation (){

    const [data, setData] = useState(null);

    function DelRealisationFunction() {


        fetch('http://graph-it.cesi.group/Realisations/:id', {
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
                        //console.log(responseData)
                        setData(responseData)
                    });
            })
            .catch(function (err) {
                //console.log(err)
            })
    }
}