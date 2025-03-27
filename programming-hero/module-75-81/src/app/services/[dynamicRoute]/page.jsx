

/* note: Improve your English proficiency by taking notes.

"If you want to get params  you can get it by destructuring params inside the component's parentheses()."
"If you want to get params, you can destructure params inside the component's parentheses() to access it."

*/


const DynamicRoute = ({params}) => {
    const id = params.dynamicRoute;
    return (
        <div>
            This is a dynamic route. Route Id is : {id}
        </div>
    );
};

export default DynamicRoute;