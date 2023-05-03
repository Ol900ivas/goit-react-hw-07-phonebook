import styled from '@emotion/styled';

export const InputWrap = styled.div`
  margin: 0 0 15px 0;
  border: none;
`;
export const Label = styled.label`
  display: inline-block;
  width: 15%;
  text-align: right;
  margin: 12px;
`;

export const Input = styled.input`
  width: 75%;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
  padding: 5px;
  font-size: 0.9em;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.07);
  :hover {
    background: #ffffff;
  }
`;

export const FormBtn = styled.button`
  display: block;
  font-size: 1em;
  padding: 10px;
  margin: 0 auto 20px auto;
  border-radius: 8px;
  border: 1px solid #59b969;
  box-shadow: 0 1px 0 0 #60bd49 inset;
  background-image: linear-gradient(to bottom, #63e651, #42753e);
  :hover {
    background-image: linear-gradient(to bottom, #51db1c, #6ba061);
  }
  :disabled {
    background: #82cf78c2;
  }
`;
