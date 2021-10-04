import React from 'react';
import ListTodos from '../ListTodos/ListTodos';
import Modal from '../Modals';
import { Header } from '../Header/Header';

import './styles.scss';

export default function Home() {
  return (
    <>
  <div className="background"></div>
  <div className="ContentBox">
    <Header/>
   <ListTodos/>
   <Modal/>
   </div>
   </>
  )
}
