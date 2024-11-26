import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";

function App() {
  const data = useLoaderData()
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold ">Total Phones: {data.length} </h1>
      <div className="grid grid-cols-3 gap-20 py-10 px-36">
        {data.map(phone => <Phone key={phone.id} phone={phone}></Phone>)}
      </div>
    </div>
  );
}

export default App;
