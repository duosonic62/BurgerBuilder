import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingradients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render () {
    return(
      <Aux>
        <div>Build Controls</div>
        <Burger ingredients={this.state.ingradients} />
      </Aux>
    );
  }
}

export default BurgerBuilder;