import React from 'react';
import { Container } from 'react-bootstrap';
import '../../UserOffice/assets/css/main.css';
import'../../UserOffice/assets/vendor/bootstrap/css/bootstrap.min.css';

function UserHome() {
    return (
        <Container>
            <header className="header">
                <div className="topbar d-flex align-items-center">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                        </div>
                    </div>
                </div>
                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="#hero" className="logo d-flex align-items-center me-auto">
                            <h1 className="sitename">Medilab</h1>
                        </a>
                        <a className="cta-btn d-none d-sm-block" href="#appointment">Make an Appointment</a>
                    </div>
                </div>
            </header>

            <section id="hero" className="hero section light-background">
                <img src="../../UserOffice/assets/img/hero-bg.jpg" alt="" />
                <div className="container position-relative">
                    <div className="welcome position-relative">
                        <h2>WELCOME TO MEDILAB</h2>
                        <p>We provide quality healthcare services for all your needs.</p>
                    </div>
                </div>
            </section>

            <section id="about" className="about section">
                <div className="container">
                    <h3>About Us</h3>
                    <p>We are a team of talented designers and healthcare professionals.</p>
                </div>
            </section>

            <section id="appointment" className="appointment section">
                <div className="container">
                    <h2>Appointment</h2>
                    <form action="forms/appointment.php" method="post" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-4 form-group">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="col-md-4 form-group">
                                <input type="tel" className="form-control" name="phone" placeholder="Your Phone" required />
                            </div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>
                </div>
            </section>

            <footer className="footer light-background">
                <div className="container">
                    <p>© 2024 Medilab - All Rights Reserved</p>
                    <p>Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></p>
                </div>
            </footer>
        </Container>
    );
}

export default UserHome;
