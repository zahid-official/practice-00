{
  // 1. (Basic Declarations) Declare one variable using var, one using let, and one using const. Assign your name, age, and country to them. Then log all three.
  var myName = "Zahidul Islam";
  let age = 25;
  const country = "Bangladesh";
}

{
  // 2. (Reassignment Differences) Declare a let variable with a number and reassign it. Do the same with var. Try reassigning a const and observe the error. Comment on the result.
  let num = 25;
  num = 30;
  var number = 12;
  number = 15;

  const yourAge = 32;
  //yourAge = 34;

  /*Observation: 
      - Reassignment allowed with var & let.
      - But reassignment not allowed with const. It throw this error: TypeError: Assignment to constant variable.
  */
}

{
  // 3. (Block Scope Demonstration) Create an if block where you declare a let and a var variable. Try accessing both outside the block. Log the results and note the difference.
  if (true) {
    var a = 25;
    let b = 36;
  }
  // console.log(a, b);

  /*Observation: 
      - Variable a is accessible outside the block, because a declared with var which is a global scoped 
      - But variable b isn't accessible, because b declared with let which is a block scoped. So accessing outside the block throw this error: result: ReferenceError: b is not defined 
  */
}

{
  // 4. (Redeclaration) Try redeclaring a var, let, and const variable with the same name in the same scope. Observe which ones work and which throw errors.
  var mobile = "Apple";
  var mobile = "Samsung";

  let cpu = "Mediatak";
  // let cpu = "SnapDragon";

  const ram = 16;
  // const ram = 32;

  /*Observation:
    - var accept redeclaration and reassignment. 
    - let accept only reassignment but not redeclaration. 
    - Const don't accept redeclaration and reassignment.
  */
}

{
  // 5. (Object with const) Create a const object with properties like name and age. Change the values of the properties. Log the object before and after.
  const obj = {
    name: "Zahid",
    age: 25,
  };
  // console.log(obj);

  obj.name = "Nahid";
  obj.age = 30;
  // console.log(obj);
}

/*---------------------------------------------------------------------------------------------------
                                Intermediate Tasks (not from this lesson)
----------------------------------------------------------------------------------------------------- */

{
  // 6. (Loop Scope) Write a for loop using var and another using let. Inside the loop, log the variable. Then log it outside the loop and see what happens.
  for (var i = 1; i <= 5; i++) {
    // console.log(i);
  }
  // console.log(i);

  for (let j = 1; j <= 5; j++) {
    // console.log(j);
  }
  // console.log(j);

  /* Observation: 
      - var is accessible outside the loop. 
      - But let is not accessible outside the loop. Accessing outside the loop throw this error: ReferenceError: j is not defined 
  */
}
