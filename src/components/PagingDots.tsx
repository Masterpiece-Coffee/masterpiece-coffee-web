// From https://github.com/FormidableLabs/nuka-carousel/blob/master/src/default-controls.js
// Only changes are making dots white and bigger
const dotSize = 10;

import React from 'react';

export class PagingDots extends React.Component {
  getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign) {
    const dotIndexes = [];
    let lastDotIndex = slideCount - slidesToShow;

    switch (cellAlign) {
      case 'center':
      case 'right':
        lastDotIndex += slidesToShow - 1;
        break;
    }
    if (lastDotIndex < 0) {
      return [0];
    }

    for (let i = 0; i < lastDotIndex; i += slidesToScroll) {
      dotIndexes.push(i);
    }
    dotIndexes.push(lastDotIndex);
    return dotIndexes;
  }

  getListStyles() {
    return {
      position: 'relative',
      top: -10,
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    };
  }

  getButtonStyles(active) {
    return {
      cursor: 'pointer',
      opacity: active ? 1 : 0.5,
      background: 'transparent',
      border: 'none',
    };
  }

  render() {
    const indexes = this.getDotIndexes(
      this.props.slideCount,
      this.props.slidesToScroll,
      this.props.slidesToShow,
      this.props.cellAlign,
    );
    return (
      <ul style={this.getListStyles()}>
        {indexes.map(index => {
          return (
            <li
              key={index}
              className={
                this.props.currentSlide === index
                  ? 'paging-item active'
                  : 'paging-item'
              }
            >
              <button
                type="button"
                style={this.getButtonStyles(this.props.currentSlide === index)}
                onClick={this.props.goToSlide.bind(null, index)}
                aria-label={`slide ${index + 1} bullet`}
              >
                <svg className="paging-dot" width={dotSize} height={dotSize}>
                  <circle
                    cx={dotSize / 2}
                    cy={dotSize / 2}
                    r={dotSize / 2}
                    style={{
                      fill: 'white',
                    }}
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
