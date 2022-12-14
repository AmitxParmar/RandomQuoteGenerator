import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"
const App = () => {
    const [advice, setAdvice] = useState('')

    const fetchAdvice = () => { // generate a random quote when called;
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice);
                console.log(advice);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    useEffect(() => {
        fetchAdvice(); // Fetches a random quote every time the user reloads the page.
    }, [])

    return (
        <div className="app">
            <div className='card'>
                <h1 className='heading'>
                    {advice}
                </h1>
            </div>
        </div>
    );
}

export default App