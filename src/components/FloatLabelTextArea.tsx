import React, { useState } from "react";
import styled from "@emotion/styled";
import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";

interface FloatLabelInputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  requiredMessage:string
  message?: string;
  pattern?: RegExp;
  patternMessage?:string
  min?: number;
  minMessage?:string;
  max?: number;
  maxMessage?:string;
  theName:string;

}






const FloatLabelTextArea = ({
  label,

  placeholder,
  className = "",
  required=true,
  requiredMessage= "",
  pattern= /^[\w\W]*$/,
  patternMessage="",
  min= 0,
  minMessage="",
  max= 100000,
  maxMessage="",
  theName

}: FloatLabelInputProps) => {
  const StyledLabel = styled.label`
    transform-origin: top left;
  `;

  const [isActive, setIsActive] = useState<boolean>(false);
  // const [value, setValue] = useState<string>("");

  // Handle input changes
  const handleTextChange = (text: string) => {
    // setValue(text);
    setIsActive(text !== "");
  };

  return (
    <div className={`relative flex flex-col w-full ${className}`}>
                      <FormItem
                className="w-full lg:w-fit"
                name={theName}
                rules={[
                  {
                    required,
                    message:requiredMessage,
                  },
                  {
                    pattern: pattern,
                    message:patternMessage,
                  },
                  {
                    min: min,
                    message:minMessage,
                  },
                  {
                    max:max,
                    message:maxMessage,
                  },
      
                ]}
              >
      <Input.TextArea
 
        onChange={(e) => handleTextChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-[68px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]`}

      />
      </FormItem>
      <StyledLabel
        htmlFor={label}
        className={`absolute left-[18px] text-gray-500 transition-all ease-out duration-200 pointer-events-none ${
          isActive
            ? "transform scale-75 -translate-y-[-2px]"
            : "translate-y-3.5 scale-100"
        }`}
      >
        {label}
      </StyledLabel>
    </div>
  );
};

export default FloatLabelTextArea;
