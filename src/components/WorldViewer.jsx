import React from 'react';
import {  
    Ion,  
    Terrain, 
    Viewer 
} from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

window.CESIUM_BASE_URL = '/static/Cesium';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNDU1OWZkYy1jYzM4LTQyZGYtYTQxNC1lNmRjNTNkN2ExNDAiLCJpZCI6MTg1Nzg0LCJpYXQiOjE3MDMxODMxNTN9.dCJSKKhwmyD_keVErnEnr4VDciIT6LC8Z8EYWtIThKg';

const viewer = new Viewer('cesiumContainer', {
    terrain: Terrain.fromWorldTerrain(),
});

const WorldViewer = () => {
    return (
        <div className='celsiumContainer'>
        </div>
    )
}

export default WorldViewer;
