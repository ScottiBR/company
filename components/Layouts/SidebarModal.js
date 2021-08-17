import React, { Component } from 'react';
import Link from 'next/link';

class SidebarModal extends Component {
    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <div className={`sidebar-modal ${this.props.active}`}>
                <div className="sidebar-modal-inner">
                    <div className="sidebar-about-area">
                        <div className="title">
                            <h2>About Us</h2>
                            <p>Company is a LATAM based provider of software development outsourcing services, with the top 1% of technical experts in IT</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="sidebar-contact-area">
                        <div className="contact-info">
                            <div className="contact-info-content">
                                <h2>
                                    <span className="info">+55 123456789</span>
                                    <span className="or">OR</span>
                                    <span className="info">info@company.com</span>
                                </h2>
        
                                <ul className="social">
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank"><i className="fab fa-twitter"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank"><i className="fab fa-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank"><i className="fab fa-instagram"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Close Modal */}
                    <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                        <i className="fas fa-times"></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default SidebarModal;