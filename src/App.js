import React from "react";
import {useSearchParams} from "react-router-dom";
import {ReactComponent as Logo} from "./logo.svg";
import './app.css'

import {verified_users} from "./constans";


function App() {
    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')
    const start = searchParams.get('start')
    const end = searchParams.get('end')
    const getIsValid = () => {
        if (!name || !start || !end) {
            return false
        }
        const user = verified_users.find(el => el.name.toLowerCase() === name.toLowerCase())
        if (!user) {
            return false
        }
        return user.date_start === start && user.date_end === end;

    }
    return (
        <div className="app">
            <div className="logo-container">
                <Logo/>
            </div>
            <div className='card'>
                <div className="text header">
                    Uganda Police Force & ITMS: Training on Operating the SecurOS System
                </div>
                {!getIsValid() && <div  className='text'> The certificate is <span className="invalid">invalid</span></div>}
                {getIsValid() &&
                    <>
                        <div className='text' style={{marginBottom: 10}}>
                            The certificate is granted upon <span className='valid'>successfully</span> finishing the training. It verifies the preparedness to operate within the SecurOS system.
                        </div>
                        <div className="text">Name: {name}</div>
                        <div className="text">Date Start: {start}</div>
                        <div className="text">Date end: {end}</div>
                    </>
                }
            </div>
        </div>
    );
}

export default App;
