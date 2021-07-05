import './App.css';
import Directory from './components/pages/directory/directory.component';

function App() {
  return (
    <Directory/>
  );
}













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

export default App;
