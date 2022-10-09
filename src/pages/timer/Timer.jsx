import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import './Timer.scss';
import { AiOutlineMenu } from 'react-icons/ai'
import { Offcanvas } from "react-bootstrap";

export default function Timer() {
  const [useMenu, setUseMenu] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setUseMenu(true);
  }

  const handleHide = () => {
    setUseMenu(false); 
  }

  return (
    <>
      <Offcanvas show={useMenu} onHide={handleHide} className="timer_menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title bsPrefix="offcanvas-header timer_menu_title" >Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body bsPrefix="offcanvas-body timer_menu_body">
          <Link to='/about' className="timer_menu_body_item Link">Sobre</Link>
          <Link to='/' className="timer_menu_body_item Link">Timer</Link>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="timer">
        <div className="timer_head">
          <div onClick={handleMenuClick} className="timer_head_menu">
            <AiOutlineMenu />
          </div>
          <div className="timer_head__title">
            Pomodoro Timer
          </div>
        </div>
      </div>
    </>
  );
}