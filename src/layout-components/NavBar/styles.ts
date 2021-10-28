import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  padding: 1rem;
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: white;
  border-bottom: 1px solid black;

  .menu-icon {
    font-size: 1.5rem;
  }

  button {
    padding: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  h1 {
    font-size: 1.2rem;
  }

  .receipt-icon {
    font-size: 1.2rem;
  }
`;
