import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

/* Components */
import Counter from './components/Counter/Counter.tsx';
import ModalWindow from './components/ModalWindow/ModalWindow.jsx';
import Users from './components/Users/Users.jsx';
import Converters from './components/Converter/Converter.jsx';
import Photos from './components/Photos/Photos.jsx';

/* Styles */
import './styles/index.scss';
import Quiz from './components/Quiz/Quiz.jsx';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);

function Nav() {
    return (
    <>
        <div id="btnNav" 
            onClick={() => {
            btnNav.classList.toggle('active')
            navBtn.classList.toggle('active')
            document.querySelector('nav').classList.toggle('active')}}>
            <div className='horizont'></div>
            <div className='horizont'></div>
            <div className='horizont'></div>
        </div>
        <nav>
            <div id="navBtn" onClick={
                () => {
                    navBtn.classList.toggle('active')
                    btnNav.classList.toggle('active')
                    document.querySelector('nav').classList.toggle('active')}}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <Link to="/photos">Галерея</Link>  
            <Link to="/converter">Конвертер</Link>  
            <Link to="/counter">Счётчик</Link>  
            <Link to="/modal">Модальное окно</Link>
            <Link to="/quiz">Опросник</Link>
            <Link to="/">Список пользователей</Link>
        </nav>
    </>)
}


// рендеринг в корневой элемент
root.render(
    <Router>
        <>
            <Nav/>
            <Routes>
                <Route path="/photos" element={<Photos/>}/>
                <Route path="/converter" element={<Converters/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/modal" element={<ModalWindow/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/" element={<Users isLoading={true}/>}/>
            </Routes>
        </>
    </Router>
);