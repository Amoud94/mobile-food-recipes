import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      color={'white'}
      iconSize={21}
      {...props}
    />
  );
};

export default CustomHeaderButton;
