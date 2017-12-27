import React, { Component } from 'react';

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
          }}
        >
          { phoneShow && phone ? <div>
            <i className="fa fa-phone" aria-hidden="true"></i> {phone}
          </div> : null }

          { emailShow && email ? <div>
            <i className="fa fa-envelope" aria-hidden="true"></i> {email}
          </div> : null }

          { githubShow && github ? <div>
            <i className="fa fa-github" aria-hidden="true"></i> {github}
          </div> : null }

          { linkedinShow && linkedin ? <div>
            <i className="fa fa-linkedin" aria-hidden="true"></i> {linkedin}
          </div> : null }
        </div>
      </div>
    );
  }
}

export default CardBack;
