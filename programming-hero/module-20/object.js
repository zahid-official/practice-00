// object
// const book = {
//     title: "World of JS",
//     author: "Sajid",
//     publisher: "Kalantor",
//     releaseDate: 20 - 28 - 2024,
//     genre: ["islamic history", "novel", "romantic", "fiction"],
//     edition: { year22: 4, year23: 8, year24: 75},
//   };
//   console.log(book);







// notation 
// const office = {
//   income: 25000,
//   expenses: 35000,
//   total_burn: 10000,
//   'office staff' : 12,
//   'director:name' : ['rahim', 'fahim', 'mahin'],
// }

//  object  dot notation
// office.expenses = 40000;
// console.log(office.expenses);

//  object  bracket notation
// office['total_burn'] = 15000;
// console.log(office['total_burn']);
// console.log(office['office staff']);

//making property string to variable
// let newDirector = office['director:name'];
// office[newDirector] = ['rahim', 'Murshid', 'Shahid'];
// console.log(office[newDirector]);







// keys 
const pc = {
  cpu  : 'amd',
  mobo : 'msi',
  ram  : 'gskill',
  ssd  : 'adata',
  psu  : 'deepcool',
  case : 'corsair',
  store : 'ryans',

  model : {
    ryzen : 7700,
    b650 : 'tomahawk',
    tridentZ : 'neo',
    legend : 960,
    modular : 'dq750 v3L',
    airflow : '4000D',
  }
}

// console.log(Object.keys(pc));
// console.log(Object.values(pc));
// console.log(pc.model.airflow);
delete pc.store;
console.log(pc);
