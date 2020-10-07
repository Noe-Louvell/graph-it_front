import React, { useState } from 'react';
import './PutRealisation.css';



export default function PutRealisation (id){
        return fetch('http://graph-it.cesi.group/Realisations/'+ id, {
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
                        console.log(responseData)
                        return (responseData)
                    });
            })
            .catch(function (err) {
                console.log(err)
            })
    }