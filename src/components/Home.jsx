// Home.js
import React, { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import Footer from './Footer';
import MenuList from './Drawer';
import ResponsiveGrid from './Grid'; 
import icon2 from '../assets/img/icons/icon2.gif'; 
import logoff from '../assets/img/icons/logoff.png';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setCollapsed(true);
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSider = () => {
    if (collapsed) {
      setVisible(true);
      setTimeout(() => setCollapsed(false), 0); 
    } else {
      setCollapsed(true);
      setTimeout(() => setVisible(false), 300); 
    }
  };

  const handleLogout = () => {
    // Lógica para logout
    console.log('Usuário deslogado');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: 'linear-gradient(to right, #319fc9, #9bd8ef)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '16px', fontSize: "15px", fontFamily: "-moz-initial" }} >
            <img src={icon2} alt="Icon" style={{ height: '45px' }} />
            <h2 style={{ color: "white" }}>SaúdeDigital</h2>
          </div>
            <Button
              type="text"
              onClick={handleLogout}
              style={{ marginRight: '25px' }}
            >
              <img src={logoff} alt="Logout" style={{ height: '30px'}} />
            </Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
            background: '#fff',
          }}
        >
          <div style={{ textAlign: "center", fontFamily: "-moz-initial", fontSize: "30px", padding: 10 }}>
            <p>Bem-vindo ao <strong style={{ color: "#319fc9" }}>SaúdeDigital</strong>,
               onde <strong style={{ color: "#319fc9" }}>tecnologia</strong> e <strong style={{ color: "#319fc9" }}>saúde</strong>
               se unem para cuidar do seu <strong style={{ color: "#319fc9" }}>bem-estar</strong> com <strong style={{ color: "#319fc9" }}>
               inovação</strong> e <strong style={{ color: "#319fc9" }}>praticidade</strong>.</p>
            <p>Explore nossa rede de <strong style={{ color: "#319fc9" }}>especialistas</strong>!</p>
          </div>

          <ResponsiveGrid />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;