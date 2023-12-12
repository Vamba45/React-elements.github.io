import React from 'react';
import ReactDOM from 'react-dom/client';

/* Components */
import Counter from './components/Counter/Counter';
import ModalWindow from './components/ModalWindow/ModalWindow.jsx';

/* Styles */
import './styles/style.scss';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <>
        <ModalWindow/>
        <Counter/>
    </>
);