import styled from 'styled-components';
import { elevation, transition, colors } from 'Utilities';

//genetic card style
export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 5px;
  color: ${colors.teal};
  ${elevation[3]}
  ${transition({
    ease: 'ease-in',
    length: '1s'
  })};
  &:hover {
    ${elevation[5]}
  }
`;
