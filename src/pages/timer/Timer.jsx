import React, { useState, useEffect } from "react";

import './Timer.scss';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Timer() {
  const [useMenu, setUseMenu] = useState(false);

  const handleMenuClick = () => {
    setUseMenu(!useMenu);
  }

  return (
    <>
    <div className="timer">
      {useMenu && (
        <div className="timer_menu">
          teste
        </div>
      )}
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