import React, { useState } from 'react'
import Product from './Product';

function id() {
    return Math.random()
}
// export default function Products() {

//     const initProds = [
//         { id: id(), name: 'product1', cost: 100, inCart: false },
//         { id: id(), name: 'product2', cost: 200, inCart: false },
//         { id: id(), name: 'product3', cost: 300, inCart: false },
//     ];
//     const [prods, setProds] = useState(initProds);
//     function addToCart(id) {
//         setProds(prods.map(prod => {
//             if (prod.id === id) {
//                 prod.inCart = !prod.inCart
//             }
//             return prod
//         }))
//     }
//     const result = prods.map(prod => {
//         return <Product
//             key={prod.id}
//             id={prod.id}
//             name={prod.name}
//             cost={prod.cost}
//             inCart={prod.inCart}
//             addToCart={addToCart}
//         />
//     })
//     return <>
//         {result}
//     </>


// }
const initProds = [
	{id: id(), name: 'product1', cost: 100, isEdit: false},
	{id: id(), name: 'product2', cost: 200, isEdit: false},
	{id: id(), name: 'product3', cost: 300, isEdit: false},
];
export default function Products() {
	const [prods, setProds] = useState(initProds);
	
	function toggleMode(id) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod.isEdit = !prod.isEdit;
			}
			
			return prod;
		}));
	}
	
	function editProd(id, field, event) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod[field] = event.target.value;
			}
			
			return prod;
		}));
	}
	
	const result = prods.map(prod => {
		return <Product
			key ={prod.id}
			id  ={prod.id}
			name={prod.name}
			cost={prod.cost}
			isEdit={prod.isEdit}
			toggleMode={toggleMode}
			editProd={editProd}
		/>;
	});
	
	return <>
		{result}
	</>;
}