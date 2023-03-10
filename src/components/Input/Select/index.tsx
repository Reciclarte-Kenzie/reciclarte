import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FilterLabelList } from "../../FilterLabelList";
import { FieldsetStyled } from "../Fieldset/styles";
import { LabelStyled } from "../Label/styles";
import { StyledSelect } from "./style";

interface iSelect extends React.HTMLProps<HTMLSelectElement> {
  options: {
    value: string;
    text: string;
  }[];
  placeholder: string;
  id: string;
  width?: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  className?: string;
  label: string;
  error?: string;
  selOptions?: string[];
  setSelOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
export const Select = ({
  options,
  placeholder,
  id,
  width,
  register,
  disabled,
  className,
  label,
  error,
  selOptions,
  setSelOptions,
}: iSelect) => {
  return (
    <FieldsetStyled>
      <LabelStyled htmlFor={id}>{placeholder}</LabelStyled>
      <StyledSelect
        name={id}
        id={id}
        width={width}
        {...register}
        disabled={disabled}
        className={className}
        aria-label={label}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          return (
            <option
              value={opt.value}
              key={opt.value}
              aria-label={`Opção: ${opt.text}`}
            >
              {opt.text}
            </option>
          );
        })}
      </StyledSelect>
      {error && <p>{error}</p>}
      {selOptions && selOptions.length > 0 && (
        <FilterLabelList labelList={selOptions} setLabelList={setSelOptions} />
      )}
    </FieldsetStyled>
  );
};
