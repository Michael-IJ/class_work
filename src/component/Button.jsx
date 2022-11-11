import React, { Component } from 'react'

 class Button extends Component {
    constructor(props) {
        super(props)
       this.state = { count: 'zero' }

      }
      ButtonJs = () => {
        if (this.state.count === 'zero') {
          this.setState({ count: 1 })
          return;
        }
        if (this.state.count === 10) {
          this.setState({ count: 'zero' })
          return;
        }
        this.setState({ count: this.state.count + 1 })
      }

render() {
  return (
    <div>
    <div>
     <label className='some'>{this.state.count}</label>
      <button onClick={this.ButtonJs}>Click Me</button>
      </div>
    </div>
    )
  } 
}




export default Button
