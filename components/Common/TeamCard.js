import React, { Component } from 'react';
import Link from 'next/link';

class TeamCard extends Component {
    render() {
        return (
            <section className="team-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Team</span>
                        <h3>Meet Our Team</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <Link href="https://www.linkedin.com/in/guilhermescotti/">
                                <div className="team-item-area">
                                    <div className="team-image">
                                        <img src="/images/team/1.jpg" alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <h3>Scott</h3>
                                        <span>Front-End Eginnering</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src="/images/team/2.jpg" alt="image" />
                                </div>
                                <div className="team-content">
                                    <h3>Rubens</h3>
                                    <span>Back-End Enginnering</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src="/images/team/3.jpg" alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Luiz</h3>
                                    <span>Back-End Enginnering</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src="/images/team/3.jpg" alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Marcone</h3>
                                    <span>Back-End Enginnering</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="team-animation">
                    <div className="shape-img1">
                        <img src="/images/shape/7.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/9.png" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/images/shape/7.png" alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src="/images/shape/9.png" alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src="/images/shape/9.png" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamCard;