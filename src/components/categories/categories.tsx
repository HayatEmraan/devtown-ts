const Categories = ({
  All,
  Robot,
  Car,
  Disney,
  Marvel,
}: {
  All: () => void;
  Robot: () => void;
  Car: () => void;
  Disney: () => void;
  Marvel: () => void;
}) => {
  return (
    <div className="flex flex-row overflow-auto whitespace-nowrap mt-4 sm:mt-0">
      <button
        className="border font-mono p-2 text-xs focus:text-white border-black focus:bg-yellow-600"
        onClick={All}
      >
        All
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs focus:text-white border-black focus:bg-yellow-600"
        onClick={Disney}
      >
        Disney
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs focus:text-white border-black focus:bg-yellow-600"
        onClick={Robot}
      >
        Robot
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs focus:text-white border-black focus:bg-yellow-600"
        onClick={Car}
      >
        Car
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs focus:text-white border-black focus:bg-yellow-600"
        onClick={Marvel}
      >
        Marvel
      </button>
    </div>
  );
};

export default Categories;
