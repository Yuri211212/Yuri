import React, { useEffect, useState } from 'react';
import { Spinner,Button, ListGroup } from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Block/styles.css'


export const Block = () => {
const [todos, setTodos] = useState([]);

useEffect(() => {
setTimeout(() => {        
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTodos(json));

},3000);

},[])

return <>
    <ul>
    {todos.length? todos.map((item) => {
        return <ListGroup><ListGroup.Item key={item.id}>{item.title}<Button variant="outline-warning">Сделано</Button>{' '}</ListGroup.Item></ListGroup>
       }) : <Spinner animation="border" role="status"></Spinner>}
    </ul>
    </>
}

