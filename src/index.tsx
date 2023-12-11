import React from 'react';
import ReactDOM from 'react-dom/client';

import Heading from './components/Heading.jsx'; 
import Footer from './components/Footer'; 

import './styles/style.scss';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <>
        <h1>Hello React</h1> 
        <Heading/>
        <Footer/>
    </>
);