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
        if (!name || !start || !end){
            return false
        }
        const user =  verified_users.find(el=>el.name.toLowerCase() === name.toLowerCase())
        return user.date_start === start && user.date_end === end;

    }
    return (
        <div className="app">
            <div className="logo-container">
                <Logo/>
            </div>
            <div className='card'>
                <div className="text header">
                    Certificate of ITMS training completion is {getIsValid() ?
                    <span className='valid'>valid</span> :
                    <span className='invalid'>invalid</span>
                }
                </div>
                {getIsValid() &&
                   <>
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
