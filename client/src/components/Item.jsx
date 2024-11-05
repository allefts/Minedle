import React, { forwardRef } from "react";
import styled from "styled-components";
import gridStore from "../store/gridStore";
import { useDraggable } from "@dnd-kit/core";

const StyledItem = styled.div`
  height: 100%;
  width: 100%;

  background-image: ${(props) => (props.url ? `url(${props.url})` : "")};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 48px 48px;

  position: relative;

  &:after {
    content: "";
    color: white;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    right: -130px;
    top: -30px;
    z-index: 2;
    font-size: 14px;
    line-height: 1.3;
  }

  &:hover:after {
    content: ${(props) => (props.name ? `"` + `${props.name}` + `"` : "")};
    padding: ${(props) => (props.name ? "0.25rem" : "0")};
    max-width: 150px;
    max-height: 50px;
  }
`;

const Item = ({ ingredientName, linkToImage, type, gridCellIdx }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `invCell-${gridCellIdx}`,
    data: { ingredientName, linkToImage, gridCellIdx, type },
  });

  if (ingredientName && linkToImage) {
    ingredientName = formatItemName(ingredientName);
  }

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  //Inventory Cell
  return (
    <StyledItem
      url={linkToImage}
      name={ingredientName}
      data-url={linkToImage}
      data-id={gridCellIdx}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    />
  );
};

export default Item;

const formatItemName = (itemName) => {
  return itemName
    .replace("minecraft:", "")
    .replaceAll("_", " ")
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
};
