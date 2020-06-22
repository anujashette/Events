import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { Header, Section, Footer } from '../../components'
// import * as productActions from '../../actions/product'
// import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    // this.props.actions.getProducts();
  }

  render() {
    // const {products, actions} = this.props;
    // const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home">
        <Header/>
        <Section/>
        <Footer/>
      </div>
    )
  }
}

export default 
// connect(
  // state => ({
  //   products: state.product.products
  // }),
  // dispatch => ({
  //   actions: bindActionCreators(productActions, dispatch)
  // })
// )
(Home)
