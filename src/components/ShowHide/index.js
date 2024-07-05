import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  showHideFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showHideLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              type="button"
              className="btn"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && <div className="card">Joe</div>}
          </div>
          <div className="card-container">
            <button
              type="button"
              className="btn"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && <div className="card">Jonas</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
