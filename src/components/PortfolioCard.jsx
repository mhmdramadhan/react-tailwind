const PortofolioCard = ({ link, name }) => {
  return (
    <div className="xl:w-80 md:w-80 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-full h-fit" src={link} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        
      </div>
    </div>
  );
};

export default PortofolioCard;
