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