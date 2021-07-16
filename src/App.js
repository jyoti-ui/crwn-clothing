import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.components';
import {Switch , Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage/>)}></Route>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser : selectCurrentUser
  }
)

const mapDispatchToProps = dispatch => {
  return (
    {
      setCurrentUser : user => dispatch(setCurrentUser(user))
    }
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

// function App() {
//     return (
//       <div>
//         <Header/>
//         <Switch>
//           <Route exact path="/" component={HomePage}/>
//           <Route path="/shop" component={ShopPage}/>
//           <Route path="/signin" component={SignInSignUpPage}></Route>
//         </Switch>
//       </div>
//     );
//   }

// export default App;












// import HomePage from './components/pages/homepage/homepage.component';
// import {Route, BrowserRouter} from 'react-router-dom';
// import React from 'react';

// const HomePage1 = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>  
//   )
// }

// const HatsPage = () => {
//   return (
//     <div>
//       <h1> HATS PAGE </h1>
//     </div>
//   )
// }
// const TopicList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topic List</h1>
//     </div>
//   )
// }

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topic Detail : {props.match.params.topicId}</h1>
//     </div>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/" component={HomePage1}/>
//       <Route path="/topics" component={TopicList}/>
//       <Route path="/topics/:topicId" component={TopicDetail}/>
//     </BrowserRouter>
//   );
// }

// export default App;
