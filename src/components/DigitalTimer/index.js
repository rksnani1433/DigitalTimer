// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isRunning: true, standardValue: 25}

  onMinusClick = () => {
    this.setState(prev => ({
      standardValue: prev.standardValue - 1,
    }))
  }

  onPlusClick = () => {
    this.setState(prev => ({standardValue: prev.standardValue + 1}))
  }

  render() {
    const {isRunning, standardValue} = this.state

    return (
      <div className="app-container">
        <h1 className="main-header">Digital Timer</h1>
        <div className="main-container">
          <div className="bg-image">
            <div>
              <h2 className="timer-count">25:00</h2>
              <p className="play-pause-text">
                {isRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="options-container">
            <div className="button-container">
              <div className="start-pause-container">
                <button type="button" className="start-pause-button">
                  <img
                    className="start-pause-image"
                    src={
                      isRunning
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    }
                    alt="start"
                  />
                </button>
                <p className="button-text">{isRunning ? 'pause' : 'start'}</p>
              </div>
              <div className="start-pause-container">
                <button className="start-pause-button" type="button">
                  <img
                    className="start-pause-image"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset"
                  />
                </button>
                <p className="button-text">Reset</p>
              </div>
            </div>
            <p>set Timer Limit</p>
            <div className="time-setting-container">
              <button
                onClick={this.onMinusClick}
                className="minus-plus-button"
                type="button"
              >
                -
              </button>
              <p className="time-setting">{standardValue}</p>
              <button
                onClick={this.onPlusClick}
                className="minus-plus-button"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
