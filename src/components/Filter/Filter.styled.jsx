import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  gap: 12px;
  margin: 0 0 20px 0;
  border: none;
`;

export const Input = styled.input`
  width: 57%;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
  padding: 5px;
  font-size: 0.9em;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.07);
  :hover {
    background: #ffffff;
  }
`;
