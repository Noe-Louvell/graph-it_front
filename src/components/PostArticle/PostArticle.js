import React, { useState } from 'react';
import './PostArticle.css';



export default function PostArticle (){

    const [data, setData] = useState(null);

    function PostArticleFunction() {


        fetch('http://graph-it.cesi.group/Articles', {
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