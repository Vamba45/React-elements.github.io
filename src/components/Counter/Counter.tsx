import React from 'react';
import './Counter.scss';

function Counter() {
    const[count, setCount] = React.useState(0);

    function btnIncrClick() {
        setCount(count + 1)
    }

    function btnDecrClick() {
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <h2>Счётчик:</h2>
            <h1>{count}</h1>
            <div className="btns">
                <button onClick={btnDecrClick} className='decr btn'>- Минус</button>
                <button onClick={btnIncrClick} className='incr btn'>Плюс +</button>
            </div>
        </div>
    )
}

export default Counter;