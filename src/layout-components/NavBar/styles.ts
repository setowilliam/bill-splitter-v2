import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  padding: 1rem;
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.border};

  .menu-icon {
    font-size: 1.5rem;
  }

  button {
    margin: -1rem;
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
