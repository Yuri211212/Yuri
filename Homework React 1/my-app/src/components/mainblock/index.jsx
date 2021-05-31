import React, { useState } from 'react';
import './styles.css';

export function Mainblock (){
    const [state,setState] = useState(false);
    const showDiv = () =>{
        setState(!state)
    }
return <>
        <div>Блок</div>
        <button onClick={showDiv}className="button">{state?<span>Скрыть</span>:<span>Показать</span>}</button>
        {state&&<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora natus quae omnis voluptatibus! Repellat nam doloribus omnis dicta nemo explicabo! Ullam quo velit molestiae, repellat nesciunt quas. Dolores, facilis?</div>}
        </>
    }