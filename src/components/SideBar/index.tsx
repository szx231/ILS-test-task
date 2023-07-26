import React, { useMemo, useState } from 'react';

import { CarOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { selectWayPoints } from '../../store/wayPoints/selectors';
import { findRouteRequest } from '../../store/findRoute/reducers';

export const SideBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const { wayPoints, loading } = useAppSelector(selectWayPoints);
  const routesLabels = useMemo(() => [...new Set(wayPoints.map((point) => point.route))], [wayPoints]);

  const toggleCurrentRoute = (currentRoute: string) => {
    if (!loading) {
      dispatch(findRouteRequest(currentRoute));
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['']} mode="inline">
          <Menu.SubMenu icon={<CarOutlined />} title="Маршруты">
            {routesLabels.map((label) => (
              <Menu.Item key={label} onClick={() => toggleCurrentRoute(label)}>
                {label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout />
    </Layout>
  );
};
