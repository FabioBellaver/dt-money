import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &:hover {
      transition: box-shadow 0.2s;
      -webkit-box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.2);
      box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.2);
    }

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["green-500"]};
      border: 1px solid ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s,
        box-shadow 0.2s;

      -webkit-box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.2);
      box-shadow: 10px 10px 12px -4px rgba(0, 0, 0, 0.2);
    }
  }
`;
