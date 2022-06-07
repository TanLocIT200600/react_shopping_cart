import React from 'react';
import "./index.css";
import logo from "../../assets/images/logo.png";
import { Input, Space } from 'antd';

const { Search } = Input;

const Header = () => {

  const onSearch = (value) => console.log(value);

  return (
    <>
      <div className="header">
        <div className='header__container'>
          <img className='header__container__logo' src={logo} alt="logo" />

          <Space direction="vertical">
            <Search
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Space>
        </div>
      </div>
    </>
  )
}

export default Header