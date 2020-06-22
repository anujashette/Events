import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { Header, Section, Footer } from '../../components'
import * as eventActions from '../../actions/event'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    this.props.actions.getEvents();
  }
 
  render() {
    const {events, actions} = this.props;
    let section = events.map( (event) => {
       if(event.title === this.props.match.params.title.substring(1,this.props.match.params.title.length)){
        return <Section event={event}/>
      }
    });
    
    return (
      <div className="home">
        <Header/>
        {section}
        <Footer/>
      </div>
    )
  }
}

export default 
connect(
  state => ({
    events: state.event.events
  }),
  dispatch => ({
    actions: bindActionCreators(eventActions, dispatch)
  })
)
(Home);