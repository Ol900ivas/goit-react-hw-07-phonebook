import styled from '@emotion/styled';

export const Ul = styled.ul`
  width: 60%;
  margin: 0 auto;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  transition: background-color 300ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
