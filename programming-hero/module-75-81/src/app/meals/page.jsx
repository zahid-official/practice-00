import SearchField, { searchValue } from "./SearchField";


const page = () => {
    console.log(searchValue);
    return (
        <div>
            <SearchField></SearchField>
        </div>
    );
};

export default page;