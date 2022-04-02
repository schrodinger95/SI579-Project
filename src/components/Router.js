import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import Washinton from './Washinton';

const BasicRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/washinton" element={<Washinton/>}/>

        </Routes>
            {/* 地址栏跳转传参 */}
            {/* <Route exact path="/other/:id" component={Other}/> */}
    </BrowserRouter>
);

export default BasicRoute;