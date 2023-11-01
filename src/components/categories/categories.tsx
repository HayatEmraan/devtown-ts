const Categories = ({
  summer,
  autumn,
  pants,
  top,
  newly,
}: {
  summer: () => void;
  autumn: () => void;
  pants: () => void;
  top: () => void;
  newly: () => void;
}) => {
  return (
    <div className="flex flex-row overflow-auto whitespace-nowrap mt-4 sm:mt-0">
      <button
        className="border font-mono p-2 text-xs border-black focus:bg-lime-300"
        onClick={summer}
      >
        Colorful Summer
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs border-black focus:bg-lime-300"
        onClick={autumn}
      >
        Autumn
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs border-black focus:bg-lime-300"
        onClick={pants}
      >
        Pants
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs border-black focus:bg-lime-300"
        onClick={top}
      >
        Tops
      </button>
      <button
        className="ml-4 border font-mono p-2 text-xs border-black focus:bg-lime-300"
        onClick={newly}
      >
        Newly Arrival
      </button>
    </div>
  );
};

export default Categories;
