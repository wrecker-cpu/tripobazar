const SideNav = ({handleClick}) => {
  const options = ["Users", "Destination Details"];

  return (
    <div className="w-auto pr-3 bg-green-50 h-auto m-0 border-r-4 border-white font-poppins font-medium ">
      <nav className="flex flex-col pt-10  items-start">
        {options.map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={()=>{handleClick(item.toLowerCase().trim())}}
              className="mb-4 text-start pl-2 w-full hover:bg-green-50 hover:text-green-600 "
            >
              {item}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNav;
