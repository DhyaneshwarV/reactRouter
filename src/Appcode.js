


// import './App.css';
// import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Profile from './Profile';
// import Contact from './Contact';
// import React from 'react';
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

// function App() {
//   const client=new QueryClient({defaultOptions:{
//     queries:{
//       refetchOnWindowFocus:false
//     }
//   }})
//   return (
   
//     <div className="App">
//       <QueryClientProvider client={client}>
//       <Router>
//         <nav>
//           <Link to="/home">Home</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/profile">Profile</Link>
//         </nav>
//         <Routes>
//           <Route path='/home' element={<Home></Home>}/>
//           <Route path='/profile/:username' element={<Profile/>}/>
//           <Route path='/profile' element={<Profile/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='*' element={<h1>Error</h1>}/>
//         </Routes>
//       </Router>
//       </QueryClientProvider>
//     </div>
//   );
// }

// export default App;