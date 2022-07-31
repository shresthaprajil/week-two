import {useEffect, useState} from "react";
import './style.css'

const Button = (props) => {
    const [buttonName, setButtonName] = useState(null)

    useEffect(() => {
        console.log(props);
    
    }, [buttonName])
    
    return (
        <button className="styled-button" onClick={(e) => setButtonName('hello')}>
            {buttonName}
        </button>
    )
}

export default Button;