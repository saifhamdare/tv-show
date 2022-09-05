import React from "react";
import styles from "../styles";
import icon from "../assets/TV.png";
const Navbar = () => {
  return (
    <div className="bg-primary w-full mb-4 ">
      <div className={`${styles.paddingX} font-poppins font-semibold xs:text-[30px] text-[24px] text-white xs:leading-[76.8px] leading-[66.8px] w-full `}>
        <div className={`flex `}>
          <img
            src={icon}
            className="place-self-center"
            height="50px"
            width="50px"
            alt=""
          />
          <h1 className="text-white mt-5 ">TV SHOW</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
