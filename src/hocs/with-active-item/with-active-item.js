// with-active-item.js

import React, {PureComponent} from 'react';


export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.activationDuration = 1000;
      this.state = {
        activeCard: null,
        timer: null,
      };

      this._setActiveCard = this._setActiveCard.bind(this);
      this._unsetActiveCard = this._unsetActiveCard.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        setActiveCard={this._setActiveCard}
        unsetActiveCard={this._unsetActiveCard}
      />;
    }

    _setActiveCard(card) {
      const timer = setTimeout(() => {
        this.setState({
          activeCard: card,
        });
      }, this.activationDuration);

      this.setState({timer});
    }

    _unsetActiveCard() {
      if (this.state.timer) {
        clearTimeout(this.state.timer);
      }

      this.setState({
        activeCard: null,
        timer: null,
      });
    }
  }

  return WithActiveItem;
};
