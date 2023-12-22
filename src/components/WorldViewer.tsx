import {  
    Ion,  
    Terrain, 
    Viewer 
} from 'cesium';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useQuery, useQueryClient} from 'react-query';
import "cesium/Build/Cesium/Widgets/widgets.css";

declare const window: any;

window.CESIUM_BASE_URL = '/static/Cesium';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNDU1OWZkYy1jYzM4LTQyZGYtYTQxNC1lNmRjNTNkN2ExNDAiLCJpZCI6MTg1Nzg0LCJpYXQiOjE3MDMxODMxNTN9.dCJSKKhwmyD_keVErnEnr4VDciIT6LC8Z8EYWtIThKg';

const viewer: Viewer = new Viewer('cesiumContainer', {
    terrain: Terrain.fromWorldTerrain(),
});

const queryClient = useQueryClient();

const Locations = () => {
    return axios.get('http://api.auroras.live/v1/?type=locations')
};

const Probabilities = () => {

}


const WorldViewer: React.FC<{}> = () => {
    return (
        <div className='cesiumContainer'>
        </div>
    )
}

export default WorldViewer;
