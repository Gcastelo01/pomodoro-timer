import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCountdown } from "usehooks-ts";

import './About.scss';
import { AiOutlineMenu } from 'react-icons/ai'
import { Offcanvas, Button } from "react-bootstrap";


export default function About() {
    const [useMenu, setUseMenu] = useState(false);

    const handleMenuClick = () => {
        setUseMenu(true);
    }

    const handleHide = () => {
        setUseMenu(false);
    }

    return (
        <>
            <Offcanvas show={useMenu} onHide={handleHide} className="pomodoro_menu">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title bsPrefix="offcanvas-header pomodoro_menu_title" >Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body bsPrefix="offcanvas-body pomodoro_menu_body">
                    <Link to='/about' className="pomodoro_menu_body_item Link">Sobre</Link>
                    <Link to='/' className="pomodoro_menu_body_item Link">Timer</Link>
                </Offcanvas.Body>
            </Offcanvas>

            <div className="pomodoro">
                <div className="pomodoro_head">
                    <div onClick={handleMenuClick} className="pomodoro_head_menu">
                        <AiOutlineMenu />
                    </div>
                    <div className="pomodoro_head__title">
                        Pomodoro timer
                    </div>
                </div>
                <div className="pomodoro-pomodoro">
                    <div className="pomodoro-pomodoro-title">
                        <h2>Sobre</h2>
                        <div className="pomodoro-pomodoro-content animate__slideInLeft">
                            <h5>História do método</h5>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}