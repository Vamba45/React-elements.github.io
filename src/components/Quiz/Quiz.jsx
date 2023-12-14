import './Quiz.scss';

import React from 'react';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function Result({ correct, setStep, setCorrect }) {
    return  (<div className="result">
                <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                <h2>Из {questions.length} вопросов верно вы ответили на {correct}</h2>
                <button onClick={
                    () => {
                        setStep(0);
                        setCorrect(0);
                    }
                }>Попробовать снова</button>
            </div>)
}

export default function Quiz() {
    const[step, setStep] = React.useState(0);
    const[correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const percentage = Math.floor(step / questions.length * 100);

    const onClickVariant = (index) => {
        setStep(step + 1);

        if(index === question.correct) {
            setCorrect(correct + 1)
        }
    };

    return (
        <div className='Quiz'>
            {step !== questions.length ? (
                <>
                    <div className="progress">
                        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
                    </div>
                    <h1>{question.title}</h1>
                    <ul>
                        {
                            question.variants.map((text, index) => (
                                <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                            ))
                        }
                    </ul>
                </>
            ) : (
                <Result correct={correct} 
                        setStep={setStep} 
                        setCorrect={setCorrect}/>
            )}
        </div>
    );
}