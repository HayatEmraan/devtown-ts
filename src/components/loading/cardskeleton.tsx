const CardSkeleton = () => {
  const UI = (
    <>
      <li className="relative animate-pulse">
        <div className="aspect-square h-[270px] w-full overflow-hidden rounded-lg bg-gray-300"></div>
        <p className="mt-2 h-4 w-1/2 rounded-lg bg-gray-600"></p>
        <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
        <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
      </li>
    </>
  );

  return (
    <div className="container mx-auto space-y-4">
      <div className="px-5 md:px-4 lg:px-3 xl:px-2">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {UI}
          {UI}
          {UI}
          {UI}
          {UI}
          {UI}
          {UI}
          {UI}
        </ul>
      </div>
    </div>
  );
};

export default CardSkeleton;
