import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCountdown } from "usehooks-ts";

import './Timer.scss';
import { AiOutlineMenu } from 'react-icons/ai'
import { Offcanvas, Button } from "react-bootstrap";

export default function Timer() {
  const [useMenu, setUseMenu] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [pause, setPause] = useState(false);

  const [pauseMessage, setPauseMessage] = useState("Pausar");

  const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown(
    {
      countStart: 1500,
      intervalMs: 1000
    }
  )

  const [buttonMessage, setButtonMessage] = useState("Iniciar");


  const onStartStopClick = () => {
    let mensagem = buttonMessage === "Iniciar" ? "Parar" : "Iniciar";

    if(timerOn){
      resetCountdown();
      setTimerOn(false);
      setButtonMessage(mensagem);

    }else{
      setTimerOn(true);
      startCountdown();
      setButtonMessage(mensagem);
      
    }
  }

  const handleMenuClick = () => {
    setUseMenu(true);
  }

  const handleHide = () => {
    setUseMenu(false);
  }

  const handlePause = () => {
    var msg = pauseMessage === "Pausar" ? "Continuar!" : "Pausar";
    setPauseMessage(msg);

    if (pause) {
      startCountdown();

    } else {
      stopCountdown();

    }

    setPause(!pause);
  }

  const timeParser = (t) => {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    return minutes + ":" + seconds
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

        <div className="timer_body">
          <div title={timeParser(count)} className={`timer_body_circle ${timerOn ? "start" : "stop"}`}>
            {!timerOn && timeParser(count)}
          </div>
          <div className="timer_body_button">
            <Button onClick={onStartStopClick} variant="outline-primary" size="lg" bsPrefix='timer_body_button_myButton' >
              {buttonMessage}
            </Button>
            {timerOn && (
              <Button onClick={handlePause} variant="outline-primary" size="lg" bsPrefix='timer_body_button_myButton'>
                {pauseMessage}
              </Button>
            )}
          </div>
          <div className="timer_body_pomodoroCount">
            Pomodoros transcorridos: { }
          </div>
        </div>

      </div>
    </>
  );
}