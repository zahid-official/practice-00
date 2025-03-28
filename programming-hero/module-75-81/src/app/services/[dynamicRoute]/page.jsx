

/* note: Improve your English proficiency by taking notes.

"If you need to create a dynamic route, then the folder should be declared inside square brackets[]."

"If you want to get params  you can get it by destructuring params inside the component's parentheses()."
"If you want to get params, you can destructure params inside the component's parentheses() to access it."

*/


const DynamicRoute = async ({params}) => {
    const {dynamicRoute} = await params;
    return (
        <div>
            This is a dynamic route. Route Id is : {dynamicRoute}
        </div>
    );
};

export default DynamicRoute;