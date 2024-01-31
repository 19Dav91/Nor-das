// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// } 
import { useEffect, useState } from 'react';

export default function App() {
	useEffect(() => {
		document.body.style.backgroundColor = 'green';
        console.log('render');
	}, []);

	return (
		<div>
			<h1>React App</h1>
		</div>
	);
}


// export default function App() {
//     const [color, setColor] = useState('green');
//     useEffect(() => {
//         document.body.style.backgroundColor = color;
//         console.log('render');
//     }, [color]);
//     function changeColor() {
//         setColor('orange');
//     }
//     return (
//         <div>
//             <h1>React App</h1>
//             <button onClick={changeColor}>change</button>
//         </div>
//     );
// };
