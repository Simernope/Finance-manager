import React, {useState} from 'react';
import './Footer.css';
class Footer extends React.Component {

    render() {

        return (

            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://itgid.info">2022 &copy; UrFU React</a></h1>
                                <p>All Rights Reserved</p>
                                <div>
                                    <div className="flex-item">
                                        <div className="module-body">
                                            <div>
                                            </div>
                                            <div className="flex-item">
                                                <div className="module-body">
                                                    <ul className="list-unstyled">
                                                        <li><a href="/contact/" tooltip="Контакты">Контакты</a></li>
                                                        <li><a href="/s">О сервисе</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="copyright-bar">
                                    <div className="flex-container">
                                        <div className="flex-item">
                                            <ul className="link">
                                            </ul>
                                        </div>
                                        <div className="flex-item">
                                            <div className="clearfix payment-methods">
                                                <ul>
                                                    <img src="/skin/default/images/dummy.png" data-toggle="tooltip" data-placement="top"
                                                         data-original-title="www.webmoney.ru" alt="" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;