/*
 When creating a custom layout, the children props should be destructured so that any component can be loaded smoothly in that layout.
 */

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full min-h-[65vh]">
      {/* sidebar */}
      <ul className="menu  text-base-content min-h-full w-80 p-4 bg-base-300">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>

      {/* content */}
      <div className="w-full place-items-center place-content-center">{children}</div>
    </div>
  );
};

export default DashboardLayout;
