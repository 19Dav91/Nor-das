import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



// export default function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	return <div>
// 		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
// 		<p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
// 	</div>;
// }

export default function App() {
    const [checked, setChecked] = useState(true);
	
	return <div>
    <div color='red' >
      <p color='red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui fugit aspernatur praesentium dicta dignissimos itaque necessitatibus autem laudantium fuga quas voluptates, deserunt iusto asperiores ipsam aliquam excepturi animi ut!</p>
    </div>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}  />
        <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
	</div>;
};
