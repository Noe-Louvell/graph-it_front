import React, { useState } from 'react';
import './PutArticle.css';



export default function PutArticle (){

    function PutArticleFunction() {


        fetch('http://graph-it.cesi.group/Articles/:id', {
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