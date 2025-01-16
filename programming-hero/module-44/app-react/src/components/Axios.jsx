import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

const Axios = () => {
  const [ringLoad, setRingLoad] = useState(true);
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((info) => {
        const phoneObj = info.data.data;
        const createData = phoneObj.map((eachPhone) => {
          const model = eachPhone.slug.split("-");
          const fakeData = {
            phone: model[0],
            price: model[1],
          };
          return fakeData;
        });

        setPhone(createData);
        setRingLoad(false);
      });
  }, []);


  return (
    <div>
      <div className={`${ringLoad && 'flex justify-center my-12'}`}>
        {ringLoad && (
          <Rings
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>

      <h2 className="text-4xl font-bold mb-5 p-5">Phone Charts</h2>
      <BarChart
        width={900}
        height={350}
        data={phone}
        margin={{ top: 50, left: 50 }}
      >
        <Bar dataKey={"price"} fill="#0077b6"></Bar>
        <XAxis></XAxis>
        <YAxis></YAxis>
        <Tooltip dataKey={"phone"}></Tooltip>
      </BarChart>
    </div>
  );
};

export default Axios;
