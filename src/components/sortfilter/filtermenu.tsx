import { slide as Menu } from "react-burger-menu";
import SortFilterItems from "./filteroptions";

const SortAndFilter = ({
  filterBtn,
  handleState,
  handleFilter,
}: {
  filterBtn: boolean;
  handleState: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilter: (stringArray: string[], singleString: string) => void;
}) => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "16px",
      height: "16px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#fafafa",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      width: "100%",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const handleStateChange = (state: {
    isOpen: boolean | ((prevState: boolean) => boolean);
  }) => {
    handleState(state.isOpen);
  };
  return (
    <div>
      <Menu
        right
        customBurgerIcon={false}
        styles={styles}
        isOpen={filterBtn}
        onStateChange={handleStateChange}
      >
        <SortFilterItems handleFilter={handleFilter} />
      </Menu>
    </div>
  );
};

export default SortAndFilter;
