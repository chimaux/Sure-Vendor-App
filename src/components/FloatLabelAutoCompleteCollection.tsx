import React, { useState } from "react";
import styled from "@emotion/styled";
import { AutoComplete, Button, Input, Tag } from "antd";
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
  allItems:string[]

}


const FloatLabelAutoCompleteCollection = ({
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
  theName,
  allItems

}: FloatLabelInputProps) => {







  interface Option {
    value: string;
  }
  
  
  const [options, setOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  
  
  const handleSearch = (value: string) => {
    const filteredOptions = allItems.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filteredOptions.map((item) => ({ value: item })));
  };
  
  const handleSelect = (value: string) => {
    if (!selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
      setInputValue("");
      setOptions([]); // Clear options after selection
    }
  };
  
  const handleDelete = (value: string) => {
    setSelectedItems(selectedItems.filter((item) => item !== value));
  };
  
  const handleAddCustom = () => {
    if (inputValue && !selectedItems.includes(inputValue)) {
      setSelectedItems([...selectedItems, inputValue]);
      setInputValue("");
    }
  };
  
  const isCustomValue =
    inputValue &&
    !allItems.some((item) => item.toLowerCase() === inputValue.toLowerCase());
  




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



<div className="w-full px-[16px] py-[17px] rounded-[12px] font-[400]  border-[0.5px] h-fit lg:w-[50vw] ">
             
             <div>
                 {selectedItems.map((item) => (
                   <Tag
                     key={item}
                     closable
                     onClose={() => handleDelete(item)}
                     style={{ margin: "4px" }}
                   >
                     {item}
                   </Tag>
                 ))}
               </div>
              
              
               <AutoComplete
                 options={options}
                 style={{
                   borderColor: "rgb(0 0 0 / 20%)",
                 }}
                 onSearch={handleSearch}
                 onSelect={handleSelect}
                 value={inputValue}
                 onChange={(value) => setInputValue(value)} // `value` is of type string
               >
                 <Input
                  placeholder={placeholder}
                
                   onChange={(e) => handleTextChange(e.target.value)}
                   style={{
                     all: "unset",
                     cursor: "text",
             
                   }}
                  
                 />
               </AutoComplete>
 
         
 
               {isCustomValue && (
                 <Button
                   onClick={handleAddCustom}
                   disabled={!inputValue || selectedItems.includes(inputValue)}
                   style={{
                     display:"block",
                     marginTop: "8px",
                     position: "relative",
                     zIndex: 999,
                   }}
                 >
                   Add {inputValue}
                 </Button>
               )}
             </div>




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

export default FloatLabelAutoCompleteCollection;
