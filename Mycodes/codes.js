// import "./styles.css";
// import React from 'react'

// const game =["cricket", 'football', 'hockey']
// const type =['weekday', 'weekend']
// export default function App() {
//   const [gameplay, setGameplay] = React.useState([])
//   const [play, setPlay] = React.useState([])
//   return (
//     <div className="App">
//       <h1>which Game</h1>
//       {
//         game.map((data)=>{
//           console.log(gameplay)
//           return(
//             <>
//               <input type='radio' id='option' value={data} onChange={(e)=>{setGameplay(e.target.value)}} name='option'/>
//               <lable for='option' >{data}</lable><br/>
//             </>
//           )
//         })
//       }
//       <h2>Choose Dates</h2>
//       {
//         type.map((data)=>{
//           console.log(play)
//           return(
//             <>
//               <input type='radio' id='option2' value={data} onChange={(e)=>{setPlay(e.target.value)}} name='option'/>
//               <lable for='option2' >{data}</lable><br/>
//             </>
//           )
//         })
//       }
//       <h2>You will play {gameplay} on {play}</h2>
//     </div>
//   );
// }

////================================================================================

// import "./styles.css";
// import React, { useState } from 'react'

// const countries = [
//   {name:'India', value:'IN', cities:['Mumbai', 'Delhi']},
//   {name:'Pak', value:'PK', cities:['Lahore', 'Karachi']},
//   {name:'Bangladesh', value:'BG', cities:['Dhaka', 'Chittagong']}
// ];


// function App() {
//   const[store, setStore] = useState('')

//   let hendelChange = (e)=>{
//     setStore(e.target.value)
//   }
//   console.log(store);
  
//   return (
//     <div className="App">
//       <select value={store} onChange={hendelChange}>
//         <option>Select Countries</option>
//         {
//           countries.map(country=>(
//             <option key={country.value} value={country.name}>{country.name}</option>
//           ))
//         }
//       </select>

//       <select>
//         {
//           store && countries.find((coname)=> coname.name === store)?.cities.map((city)=>(
//             <option key={city} value={city}>{city}</option>
//           ))
//         }
//       </select>
//     </div>
//   );
// }
// export default App