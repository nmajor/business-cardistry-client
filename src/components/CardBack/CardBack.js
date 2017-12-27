import React, { Component } from 'react';

import {
  phoneIcon,
  envelopeIcon,
  githubIcon,
  linkedinIcon,
} from '../../helpers';

class CardBack extends Component {
  render() {
    const {
      name,
      title,
      phone,
      email,
      github,
      linkedin,

      phoneShow,
      emailShow,
      githubShow,
      linkedinShow,

      backBgColor,
      backTextColor,
    } = this.props.cardData;

    return (
      <div
        style={{
          backgroundColor: backBgColor,
          color: backTextColor,
          fontFamily: '\'Cardo\', serif',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '15px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontFamily: '\'Montserrat\', sans-serif',
            }}
          >{name}</div>
          <div
            style={{
              fontSize: '14px'
            }}
          >{title}</div>
        </div>
        <div
          style={{
            fontSize: '10px',
            position: 'absolute',
            left: '15px',
            bottom: '15px',
            lineHeight: '16px',
          }}
        >
          { phoneShow && phone ? <div>
            <span
              style={{
                position: 'relative',
                top: '1px',
              }}
            >{phoneIcon(backTextColor, 10)}</span> {phone}
          </div> : null }

          { emailShow && email ? <div>
            <span
              style={{
                position: 'relative',
                top: '2px',
              }}
            >{envelopeIcon(backTextColor, 10)}</span> {email}
          </div> : null }

          { githubShow && github ? <div>
            <span
              style={{
                position: 'relative',
                top: '2px',
              }}
            >{githubIcon(backTextColor, 10)}</span> {github}
          </div> : null }

          { linkedinShow && linkedin ? <div>
            <span
              style={{
                position: 'relative',
                top: '0px',
              }}
            >{linkedinIcon(backTextColor, 10)}</span> {linkedin}
          </div> : null }
        </div>
      </div>
    );
  }
}

export default CardBack;
