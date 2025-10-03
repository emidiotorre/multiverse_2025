import React from "react";
import Hand from "./Hand";

const HandScrollUp = () => {
  return (
    <div className="flex justify-center py-20 w-full ">
      <Hand
        onClick={() =>
          document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="object- h-[18vh] w-[10vh] cursor-pointer"
        height="80"
      />
    </div>
  );
};

export default HandScrollUp;
