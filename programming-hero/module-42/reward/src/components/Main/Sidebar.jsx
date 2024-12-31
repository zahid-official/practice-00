import SidebarProp from "prop-types";

const Sidebar = ({ queue, handleCooking, cooking, totalTime, totalCalories }) => {

  return (
    <div className=" lg:w-1/3  ">
      <div className="border-2 rounded-xl space-y-12 px-4 py-12">
        {/* Preparing Table */}
        <div className="preparing">
          <h2 className="text-3xl font-semibold text-center border-b-2 pb-4">
            Want to cook: {queue.length}
          </h2>

          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-base">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className="text-[#282828B3]">
                {queue.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <th>{item.recipe_name}</th>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <td>
                      <button
                        onClick={() => handleCooking(item)}
                        className="btn btn-sm bg-[#0BE58A] rounded-3xl"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cooking Table */}
        <div className="cooking pb-6">
          <h2 className="text-3xl font-semibold text-center border-b-2 pb-4">
            Currently cooking: {cooking.length}
          </h2>

          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-base">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>

              <tbody className="text-[#282828B3]">
                {cooking.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <th>{item.recipe_name}</th>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                  </tr>
                ))}
              </tbody>

              <tfoot className="text-sm end">
                <tr>
                    <th></th>
                    <th>Total =</th>
                    <td className="font-medium">{totalTime} Minutes</td>
                    <td className="font-medium">{totalCalories} Calories</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  queue: SidebarProp.array.isRequired,
  handleCooking: SidebarProp.func.isRequired,
  cooking: SidebarProp.array.isRequired,
  totalTime: SidebarProp.number.isRequired, 
  totalCalories: SidebarProp.number.isRequired, 
};
export default Sidebar;
