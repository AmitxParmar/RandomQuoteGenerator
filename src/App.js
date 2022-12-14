import React, { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
    const [advice, setAdvice] = useState('')
    useEffect(() => {
        console.log('component did update')
    }, [])
    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }
    return (
        <div>App</div>
    );
}

export default App