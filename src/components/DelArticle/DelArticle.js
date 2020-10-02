import React, { useState } from 'react';
import './DelArticle.css';



export default function DelArticle (){

    const [data, setData] = useState(null);

    function DelArticleFunction() {


        fetch('http://graph-it.cesi.group/Articles/:id', {
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