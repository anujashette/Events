import React from 'react'
import './styles.css'

let str = "Aakash Mehta brings you a new lineup of comics and surprise guests who'll 'try their new jokes every Monday.Aakash Mehta brings you a new lineup of comics and surprise guests who'll 'try their new jokes every Monday.Aakash Mehta brings you a new lineup of comics and surprise guests who'll 'try their new jokes every Monday."

class DescriptionCard extends React.Component {

      state = {
          readMore:false
      }

      handleExpand = () => {
         console.log('rreee',this.state.readMore);
         this.setState({readMore: !this.state.readMore})
      }
      render() {
      return (
          <div className="description-card">
            <div className="title">About</div>
            <p className="description">
                {str.substring(0, 70)}
                {this.state.readMore ?  str.substring(70, str.length): '' }
            </p>
            {str.length > 100 ?
            <a className="read-more" onClick={this.handleExpand}>
                  {this.state.readMore ? 'Read less' : 'Read more'}
            </a>:
                  null
            }
          </div>);
      }
}

export default DescriptionCard;