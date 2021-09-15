import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { actionClearLinks, getAllLinks } from '../../store/link/getAllLinks';
import { AuthContext } from '../../context/AuthContext';
import { deleteLink } from '../../store/link';
import { Link } from 'react-router-dom';
import { common } from '../../mock-routes';

let checkDataLinksTimeout = null;

export default function ListLinks() {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.linkReducer);
  const { token } = useContext(AuthContext);

  const formatDate = (date) => format(Date.parse(date), 'PPpp');

  const newArrayLinks = links.map((item) => {
    return { ...item, date: formatDate(item.date) }
  });

  const checkDataLinks = async (firstLoad = false) => {
    checkDataLinksTimeout = (firstLoad || checkDataLinksTimeout) && setTimeout(async () => {
      dispatch(getAllLinks({ token }))
      checkDataLinks();
    }, 1000);
  };

  useEffect(() => {
    checkDataLinks(true);
    dispatch(getAllLinks({ token }))
    return () => {
      dispatch(actionClearLinks());
      checkDataLinksTimeout = null;
      clearTimeout(checkDataLinks)
    }
  }, []);

  const handlerDeleteLink = (id) => {
    dispatch(deleteLink({ payload: { id }, token }));
    dispatch(actionClearLinks());
    dispatch(getAllLinks({ token }));
  };

  const columns = [
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
    },
    {
      title: 'Clicks',
      dataIndex: 'clicks',
      key: 'clicks',
    },
    {
      title: 'Date',
      key: 'date',
      dataIndex: 'date',
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (text, record) => (
        <Space size="middle">
          <a on onClick={() => handlerDeleteLink(record._id)}> Delete</a>
          <Link to={common.findLink(record._id)}>Info</Link>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={newArrayLinks} />
  )
}
