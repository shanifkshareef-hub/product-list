import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";

import { AppstoreOutlined } from "@ant-design/icons";

import Header from "@components/Header";
import Sider from "@components/Sider";
import { ItemType } from "antd/es/menu/hooks/useItems";

const { Content } = Layout;

const Main = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: ItemType[] = [
    {
      icon: <AppstoreOutlined />,
      key: "/app/products",
      label: "Products",
    },
    {
      icon: <AppstoreOutlined />,
      key: "/app/cart",
      label: "Cart",
    },
    {
      icon: <AppstoreOutlined />,
      key: "/app/address",
      label: "Address",
    },
  ];

  return (
    <Layout className="h-full text-sm">
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu
          onSelect={({ key }) => {
            navigate(key);
          }}
          className="pt-5"
          theme="light"
          defaultSelectedKeys={["/app/products"]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header />
        <Content className="mx-4 my-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
