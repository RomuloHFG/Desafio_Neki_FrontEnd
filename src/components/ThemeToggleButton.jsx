import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ThemeToggleButton = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="toggle-theme-btn">
    <Button
    //   type="primary"
    //   shape="circle"
      icon={isDarkTheme? <HiOutlineSun /> : <HiOutlineMoon />}
      onClick={toggleTheme}
    />
    </div>
  );
};

export default ThemeToggleButton;
