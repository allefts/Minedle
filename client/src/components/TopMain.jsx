import React from "react";
import styled from "styled-components";
import GridTitle from "./GridTitle";
import Grid from "./Grid";
import Arrow from "./Arrow";
import ResultCell from "./ResultCell";

const StyledTopMain = styled.div`
  padding: 0 3rem;
`;

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopMain = () => {
  return (
    <StyledTopMain>
      <GridTitle word="Crafting" />
      <GridContainer>
        <Grid />
        <Arrow />
        <ResultCell />
      </GridContainer>
    </StyledTopMain>
  );
};

export default TopMain;
