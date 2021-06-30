import React, { useState } from 'react'
import { useHistory } from 'react-router';

import { Input } from '../Input';

import './styles.scss';

export default function SearchCategory() {
    const [value, setValue] = useState('');

    const url = new URL(window.location.href);

    const history = useHistory();

    const handlerSetUrlValue = (event) => {
        const setValueUrl = url.searchParams.set("search", `${event.target.value}`);
        history.replace(url.search.replace(setValueUrl));
        setValue(event.target.value)
    };

    return <div className="search__input"> 
    <Input placeholder="поиск категории" value={value} onChange={handlerSetUrlValue} />
    </div>
};
