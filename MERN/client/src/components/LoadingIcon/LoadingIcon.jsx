import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';

export default function LoadingIcon() {
    return (
        <Spin style={{ fontSize: 40 }} tip="Loading...">
  </Spin>
    )
};