
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class TopBar extends Component {
    render(){
        return (
            <div className="top_bar">
                <div className="top_bar_half left">
                    <div className="top_bar_half_item">
                        <a href="mailto:kamilbartusik@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>kamilbartusik@gmail.com</span>
                        </a>
                    </div>
                    <div className="top_bar_half_item">
                        <a href="tel:+48572105334">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>+48 572 105 334</span>
                        </a>
                    </div>
                    <div className="top_bar_half_item">
                        <a
                            href="https://github.com/thesvst"
                            target="_blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                    <div className="top_bar_half_item">
                        <a
                            href="https://www.linkedin.com/in/kamil-bartusik-a79917159/"
                            target="_blank">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </div>
                </div>
                <div className="top_bar_half right">
                    <div className="top_bar_half_item">
                        <FontAwesomeIcon icon={faUser}/>
                        <span>Strefa klienta</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default TopBar;
