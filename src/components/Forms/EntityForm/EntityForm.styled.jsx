import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const EntityFormStyled = styled.div`
  position: absolute;
  width: 400px;
  z-index: 999;
`;

export const FormTitleStyled = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: 600;
`;
export const FormStyled = styled.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  max-width: 500px;
`;
export const LabelStyled = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`;
export const InputStyled = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  &:focus {
    border-color: #7b61ff;
    outline: none;
  }
`;
export const TextAreaStyled = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  font-size: 14px;
  min-height: 80px;
  margin-bottom: 16px;
  &:focus {
    border-color: #3769f1;
    outline: none;
  }
`;

export const SelectStyled = styled.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const SelectContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const SelectOptionStyled = styled.option``;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
  background: none;
  outline: none;
  cursor: pointer;

  span {
    margin-right: 30px;
  }

  &:hover {
    background: #f0f0f0;
    border-color: #aaa;
  }

  &:focus {
    border-color: #7b61ff;
    outline: none;
  }
`;

export const ButtonFormStyled = styled.button`
  width: 100%;
  background: #3769f1;
  color: #fff;
  font-weight: 600;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background: #3769f1;
  }
`;
