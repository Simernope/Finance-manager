import React from 'react';
import './Exchange.css'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];



const Exchange = () => (
    <div className='exchange-block'>
    <YMaps >
        <Map defaultState={mapData} width='100%'
             onClick={console.log(1)}
             height='700px' >
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
    </YMaps>
    </div>

);

export default Exchange;
