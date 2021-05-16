import { connect } from 'react-redux'
import Home from '../components/home'
import { addToCart } from '../services/Actions/action'

const mapStateToProps = state => ({
    cartData: state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

//export default Home


