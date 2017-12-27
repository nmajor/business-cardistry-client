import React, { Component } from 'react';
import githubIcon from '../../icons/github.svg';
import phoneIcon from '../../icons/phone.svg';
import envelopeIcon from '../../icons/envelope.svg';
import linkedinIcon from '../../icons/linkedin.svg';

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
          padding: '5%',
          position: 'relative',
        }}
      >
        <div
          style={{
            textAlign: 'center',
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
            bottom: '7%',
            lineHeight: '16px',
          }}
        >
          { phoneShow && phone ? <div>
            <img
              src={phoneIcon}
              height="10"
              style={{
                position: 'relative',
                top: '-2px',
              }}
            /> {phone}
          </div> : null }

          { emailShow && email ? <div>
            <img
              src={envelopeIcon}
              height="10"
              style={{
                position: 'relative',
                top: '-1px',
              }}
            /> {email}
          </div> : null }

          { githubShow && github ? <div>
            <img
              src={githubIcon}
              height="10"
              style={{
                position: 'relative',
                top: '-1px',
              }}
            /> {github}
          </div> : null }

          { linkedinShow && linkedin ? <div>
            <img
              src={linkedinIcon}
              height="10"
              style={{
                position: 'relative',
                top: '-3px',
              }}
            /> {linkedin}
          </div> : null }
        </div>
      </div>
    );
  }
}

export default CardBack;
