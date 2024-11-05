import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import mineStore from "../../store/minedleStore";
import gridStore from "../../store/gridStore";
import Menu from "../Menu";
import Main from "../Main";
import TopMain from "../TopMain";
import BottomMain from "../BottomMain";
import { DndContext } from "@dnd-kit/core";

const StyledGamePage = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GamePage = () => {
  const populateResult = mineStore((state) => state.populateResult);

  useEffect(() => {
    populateResult();
  }, []);

  const fromInvToGrid = gridStore((state) => state.fromInvToGrid);
  const fromInvToPopulatedCell = gridStore(
    (state) => state.fromInvToPopulatedCell
  );
  const fromGridToEmptyCell = gridStore((state) => state.fromGridToEmptyCell);
  const fromGridToPopulatedGrid = gridStore(
    (state) => state.fromGridToPopulatedGrid
  );

  const handleOnDragEnd = (e) => {
    const { active, over } = e;

    if (!over) return;

    const activeData = active.data.current;
    const activeType = active.data.current.type;
    const activeId = active.id;

    const overData = over.data.current;
    const overType = over.data.current.type;
    const overId = over.id;

    // console.log(activeType);
    // console.log(overType);

    // ingredientName, linkToImage

    //From Inv to Empty Cell
    if (activeType === "invItem" && overType === "empty") {
      // console.log("Inv -> Empty");
      fromInvToGrid(overId, activeData.ingredientName, activeData.linkToImage);
    }
    //Filled Grid Cell to Empty Cell
    else if (activeType === "gridItem" && overType === "empty") {
      // console.log("Grid -> Empty");
      fromGridToEmptyCell(
        activeId,
        overId,
        activeData.ingredientName,
        activeData.linkToImage
      );
    }

    //From Inv to Populated Cell
    // else if (activeType === "invItem" && overType === "gridItem") {
    //   fromInvToPopulatedCell(
    //     overId,
    //     activeData.ingredientName,
    //     activeData.linkToImage
    //   );
    // }

    //   //From Inv to Empty Cell
    //   if (type == "inv" && !currDragOverRef.current.draggable) {
    //     fromInvToGrid(currDragOverId, currDragItemName, currDragItemLink);
    //   }
    //   //From Populated Cell to Empty Cell
    //   else if (type == "grid" && !currDragOverRef.current.draggable) {
    //     const currDragItemId = currDragItemRef.current.dataset.id;
    //     fromGridToEmptyCell(
    //       currDragItemId,
    //       currDragOverId,
    //       currDragItemName,
    //       currDragItemLink
    //     );
    //   }
    //   //From Inv to Populated Cell
    //   else if (type == "inv" && currDragOverRef.current.draggable) {
    //     fromInvToPopulatedCell(
    //       currDragOverId,
    //       currDragItemName,
    //       currDragItemLink
    //     );
    //   }
    //   //From Populated Cell to Populated Cell
    //   else if (type == "grid" && currDragOverRef.current.draggable) {
    //     const currDragItemId = currDragItemRef.current.dataset.id;
    //     const currDragOverName = currDragOverRef.current.attributes.name.value;
    //     const currDragOverLink = currDragOverRef.current.dataset.url;

    //     fromGridToPopulatedGrid(
    //       currDragItemId,
    //       currDragItemName,
    //       currDragItemLink,
    //       currDragOverId,
    //       currDragOverName,
    //       currDragOverLink
    //     );
    //   }
    // };
  };

  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <StyledGamePage>
        {/* <Title /> */}
        <Main>
          <TopMain />
          <BottomMain />
        </Main>
        <Menu />
      </StyledGamePage>
    </DndContext>
  );
};

export default GamePage;
