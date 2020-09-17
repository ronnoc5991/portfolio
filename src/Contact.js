import React from 'react'

function Contact() {
    return (
        <div className="Contact view" id="contact">
            <div className="title">
                <h2>LET'S GET IN TOUCH</h2>
            </div>
            <div className="contacts">
                <div className="contact-box">
                    <div className="icon-box linked-in">
                        <a href="https://linkedin.com/in/connorstreng" target="_blank">
                            <i class="fa fa-linkedin fa-4x" title="Linked-In"></i>
                        </a>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="icon-box email">
                        <a href="mailto:cstreng95@gmail.com">
                            <i class="fa fa-envelope fa-4x"></i>
                        </a>
                    </div>
                    <div className="info">
                        <a href="mailto:cstreng95@gmail.com">
                            <p>cstreng95@gmail.com</p>
                        </a>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="icon-box whatsapp">
                        <i class="fa fa-whatsapp fa-4x" title="WhatsApp"></i>
                    </div>
                    <div className="info">
                        <p>(+31) 640 309 602</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="icon-box github">
                        <a href="https://github.com/ronnoc5991" target="_blank">
                            <i class="fa fa-github fa-5x" title="GitHub"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
