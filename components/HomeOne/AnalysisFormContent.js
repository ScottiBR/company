import React, { Component } from 'react';

class AnalysisFormContent extends Component {
    render() {
        return (
            <section className="analysis-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-image">
                                <img src="/images/analysis-image.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-area-content">
                                <h3>Get in Touch</h3>
                                <p>Jump-start your business with expert software engineering teams</p>
                            </div>

                            <form className="contactForm">
                                <div className="row">
                                    <div>
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name *" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <input type="text" name="text" id="text" className="form-control" placeholder="Email *" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <input type="text" name="name" id="phone" className="form-control" placeholder="Phone *" />
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="send-btn">
                                    <button type="submit" className="default-btn-one">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AnalysisFormContent;