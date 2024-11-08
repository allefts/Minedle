import React from "react";
import Borders from "./styles/Border";
import styled from "styled-components";
import Item from "./Item";
import mineStore from "../store/minedleStore";

const StyledPopulatedCell = styled(Borders.StyledCellBorder)`
  width: 64px;
  height: 64px;
  background-color: #8b8b8b;
  border-radius: 1.5px;
  border-color: ${(props) => {
    if (props.bColor === "t" && props.type != "grid") {
      return "green";
    } else if (props.bColor === "f" && props.type != "grid") {
      return "red";
    } else {
      return " ";
    }
  }};
`;

const PopulatedCell = ({
  linkToImage,
  ingredientName,
  type,
  gridCellIdx,
  addBorder,
  droppable,
}) => {
  const getItemNames = mineStore((state) => state.getItemNames);

  let itemsUsed = getItemNames();
  let bColor = "";
  if (addBorder) {
    if (itemsUsed.includes(ingredientName)) {
      bColor = "t";
    } else {
      bColor = "f";
    }
  }

  //ref ONLY RECEIVES ITEM BEING DRAGGED REF NOT ITEM BEING DRAGGED OVER
  return (
    <StyledPopulatedCell bColor={bColor} type={type}>
      <Item
        linkToImage={linkToImage}
        type={type}
        gridCellIdx={gridCellIdx}
        ingredientName={ingredientName}
      />
    </StyledPopulatedCell>
  );
};

export default PopulatedCell;
