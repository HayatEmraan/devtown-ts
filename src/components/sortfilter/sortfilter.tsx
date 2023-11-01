const SortFilter = ({
  filterBtn,
  handleState,
}: {
  filterBtn: boolean;
  handleState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleStateChange = (
    state: boolean | ((prevState: boolean) => boolean)
  ) => {
    handleState(state);
  };

  return (
    <div
      className="flex flex-row justify-end ml-4  items-center cursor-pointer"
      onClick={() => handleStateChange(!filterBtn)}
    >
      <span className="font-semibold">SORT & FILTER</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </div>
  );
};

export default SortFilter;
