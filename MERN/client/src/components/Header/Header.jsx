import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/auth/login';
import { AuthContext } from '../../context/AuthContext';
import { Tabs, Button } from 'antd';
import CreateLink from '../CreateLink/CreateLink';
import ListLinks from '../ListLinks/ListLinks';
import { actionClearLinks } from '../../store/link/getAllLinks';

const { TabPane } = Tabs;

export default function UiHeader() {
    const { logout } = useContext(AuthContext);
    const dispatch = useDispatch();

    const handlerLogout = () => {
        dispatch(clearUser());
        dispatch(actionClearLinks());
        logout()
    };

    const operations = <Button onClick={handlerLogout}>Выход из аккаунта</Button>;

    return (
<div className="card-container">
    <Tabs type="card" tabBarExtraContent={operations}>
      <TabPane tab="Создать ссылку" key="1">
        <CreateLink/>
      </TabPane>
      <TabPane tab="Список всех ссылок" key="2">
      <ListLinks/>
      </TabPane>
    </Tabs>
  </div>
    )
    }
