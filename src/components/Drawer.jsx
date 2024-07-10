import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined, PlusSquareOutlined, AreaChartOutlined, BarsOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";


const MenuList = ({ darkTheme }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const location = useLocation();

    const handleMenuClick = ({ key }) => {
        if (key === "cadastro") {
            setModalOpen(true);
        }
    };

    const items = [
        {
            key: "paginaInicial",
            icon: <HomeOutlined />,
            label: <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Página Inicial</NavLink>
        },
        {
            key: "novoProjeto",
            icon: <PlusSquareOutlined />,
            label: "Novo Projeto"
        },
        {
            key: "novaTarefa",
            icon: <BarsOutlined />,
            label: "Nova Tarefa"
        },
        {
            key: "relatorios",
            icon: <AreaChartOutlined />,
            label: "Relatórios"
        },
        {
            key: "cadastro",
            icon: <EditOutlined />,
            label: "Cadastro"
        },
        {
            key: "configuracoes",
            icon: <SettingOutlined />,
            label: "Configurações"
        }
    ];

    return (
        <>
            <Menu
                theme={darkTheme ? "dark" : "light"}
                mode="inline"
                className="menu-bar"
                onClick={handleMenuClick}
                selectedKeys={[location.pathname]} 
                items={items}
            />
        </>
    );
};

export default MenuList;
