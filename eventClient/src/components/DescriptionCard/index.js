import React from 'react'
import './styles.css'


class DescriptionCard extends React.Component {

    constructor(props){
        super(props);
      this.state={
          readMore:false
      }
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
                {this.props.event.description.substring(0, 70)}
                {this.state.readMore ?  this.props.event.description.substring(70, this.props.event.description.length): '' }
            </p>
            {this.props.event.description.length > 100 ?
            <a className="read-more" onClick={this.handleExpand}>
                  {this.state.readMore ? 'Read less' : 'Read more'}
            </a>:
                  null
            }
          </div>);
      }
}

export default DescriptionCard;