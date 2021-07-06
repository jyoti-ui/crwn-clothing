import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import {Switch , Route } from 'react-router-dom';
import React from 'react';

function App() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    );
  }

export default App;












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
