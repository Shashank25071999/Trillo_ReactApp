import { type } from 'os';
import React from 'react';
import './InputField.scss';
interface Props{
type:'text'|'password'|'email';

}
const InputField:React.FunctionComponent<Props>=(Props)=>{
    return (
        
            <input className="InputField" type={Props.type}></input>
        
    );
}

export default InputField;