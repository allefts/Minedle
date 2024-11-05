import React, { forwardRef } from "react";
import styled from "styled-components";
import Borders from "./styles/Border";
import { useDroppable } from "@dnd-kit/core";

const StyledEmptyCell = styled(Borders.StyledCellBorder)`
  width: 64px;
  height: 64px;
  background-color: #8b8b8b;
  border-radius: 1.5px;
  border-right: ${(props) =>
    props.isOver ? "3px solid green" : "3px solid #fcfcfc"};
  border-bottom: ${(props) =>
    props.isOver ? "3px solid green" : "3px solid #fcfcfc"};
  border-left: ${(props) =>
    props.isOver ? "3px solid green" : "3px solid #35353"};
  border-top: ${(props) =>
    props.isOver ? "3px solid green" : "3px solid #35353"};
`;

const EmptyCell = ({ id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `gridCell-${id}`,
    data: { type: "empty" },
  });

  return (
    <StyledEmptyCell
      ref={setNodeRef}
      isOver={isOver}
      data-id={id}
      onDragEnter={(e) => handleDragEnter(e, ref)}
    />
  );
};

export default EmptyCell;
