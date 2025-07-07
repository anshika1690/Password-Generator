import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberChanged, setNumChanged] = useState(false);
    const [characterChanged, setCharChanged] = useState(false);

    function generatepassword() {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";
        let pass = ""
        if (numberChanged)
            str += "0123456789";
        if (characterChanged)
            str += "!@#$%^&*()";
        for (let i = 0; i < length; i++)
        {
            pass += str[Math.floor(Math.random() * str.length)];
        }
        setPassword(pass);
    }
    useEffect(() => {
        generatepassword();
    }, [length,numberChanged,characterChanged]);

    return (
        <>
            <div className="box">
                <h1>Password is {password}</h1>
                <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)}></input>
                <label>Length({length})</label>

                <input type="checkbox" defaultChecked={numberChanged} onChange={() => setNumChanged(!numberChanged)} id="numCheck"></input>
                <label htmlFor="numCheck">Number</label>

                <input type="checkbox" defaultChecked={characterChanged} onChange={() => setCharChanged(!characterChanged)} id="charCheck"></input>
                <label htmlFor="charCheck">Character</label>

            </div>

        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator />);