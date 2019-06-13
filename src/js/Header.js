import React from 'react';
import '../css/header.css';


function Header(props) {
  return (
    <div className={props.className}>
      <div className ='header_holder'>
        <div className='logo'>
          <div className='with_img logo_img'></div>
          <div className='logo_breacker'></div>
          <div className='with_img logo_text_img'></div>
        </div>
        <div className='search_bar'>
          <div className='search_placeholder'>
            <span className="with_ico search_pic"></span>
            <input placeholder="Поиск"></input>
          </div>
        </div>
        <div className='header_pics'>
          <div className='with_img right_pic explore'></div>
          <div className='with_img right_pic heart'></div>
          <div className='with_img right_pic profile'></div>
        </div>
      </div>
    </div>)
}

export default Header