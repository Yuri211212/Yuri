import React, { useState } from 'react';
import { Block } from '../Block';
import './styles.css';

export function Button (){
    const [state,setState] = useState(false);
    const showDiv = () =>{
        setState(!state)
    }
return <>
        <div>Список задач</div>
        <button onClick={showDiv}className="button">{state?"Скрыть":"Показать"}</button>
        {state&&<Block/>}
        </>
    }