// export default function Todo({ work }) {
//   return (
//     <>
//       <h1>Hello, I am from Todo jsx file</h1>
//       <h3>My work is making {work}</h3>
//     </>
//   );
// }

// one way
// export default function Todo({work, isDone}){
//     if(isDone){
//         return <h2>Finished: {work}</h2>;
//     }
//     else{
//         return <h2>Woring on: {work}</h2>;
//     }
// }


// ternary way
// export default function Todo({work, isDone}){
//     return <h2>{isDone? 'Finished' : 'Working on'} {work}</h2>
// }


// // Logical && Operator
// export default function Todo({work, isDone}){
//     return <h2>{isDone && 'Finished'} {work}</h2>
// }


// // Logical && Operator
// export default function Todo({work, isDone}){
//     return <h2>{isDone || 'Working on'} {work}</h2>
// }

// assigning jsx to variable
export default function Todo({work, isDone}){
    let task = work;

    if(isDone){
        task = 'Finished ' + work;
    }

    return <h2>{task}</h2>;
}