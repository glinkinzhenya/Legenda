import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Test.css';

export default function Test() {
    const [huy, setData] = useState(null);

    useEffect(() => {
        axios.get('http://deepdive.com.ua/service/db/')
            .then(response => {
                setData(response.data); // Обработка успешного ответа
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // console.log(huy.yml_catalog.shop.name);


    return (
        <div className='test'>
            {huy ? <h2>{huy.yml_catalog.shop.name}</h2> : <h2>не работает</h2> }
        </div>
    );
}