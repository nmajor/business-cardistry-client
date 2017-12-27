import React, { Component } from 'react';

class CardFront extends Component {
  render() {
    const { cardData } = this.props;

    return (
      <div
        style={{
          backgroundColor: cardData.frontBgColor,
          color: cardData.frontTextColor,
          height: '100%',
          width: '100%',
          // padding: '20px',
        }}
      >
        <div
          className="CardFront-content"
          style={{
            // borderColor: cardData.frontTextColor,
            // borderWidth: '3px',
            // borderStyle: 'solid',
            height: '100%',
            width: '100%',
            display: 'table',
          }}
        >
          <div
            style={{
              fontFamily: '\'Montserrat\', sans-serif',
              verticalAlign: 'middle',
              textAlign: 'center',
              display: 'table-cell',
              fontSize: '35px',
              fontWeight: '100',
            }}
          >
            <span style={{}}>
              {cardData.name}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default CardFront;
