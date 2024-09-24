import React, { useState } from "react";
import { AutoComplete, Button, Divider, Input, Tag } from "antd";
import FormItem from "antd/es/form/FormItem";
import Image from "next/image";

interface FloatLabelInputProps {
  placeholder: string;
  className?: string;
  required?: boolean;
  requiredMessage: string;
  message?: string;
  pattern?: RegExp;
  patternMessage?: string;
  min?: number;
  minMessage?: string;
  max?: number;
  maxMessage?: string;
  theName: string;
  allItems: string[];
}

const InventoryVariationCollectionComponent = ({
  placeholder,
  className = "",
  required = true,
  requiredMessage = "",
  pattern = /^[\w\W]*$/,
  patternMessage = "",
  min = 0,
  minMessage = "",
  max = 100000,
  maxMessage = "",
  theName,
  allItems,
}: FloatLabelInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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





  return (
    <div className={`relative flex flex-col w-full ${className}`}>
      <FormItem
        className="w-full lg:w-fit"
        name={theName}
        rules={[
          {
            required,
            message: requiredMessage,
          },
          {
            pattern: pattern,
            message: patternMessage,
          },
          {
            min: min,
            message: minMessage,
          },
          {
            max: max,
            message: maxMessage,
          },
        ]}
      >
        <div className="w-full  py-[17px] rounded-[12px] font-[400]  border-[0.5px] h-fit lg:w-[50vw]">

          <div className="w-full flex items-center px-[16px] justify-between lg:w-[50vw] ">
           
              <div >
                <div className="text-[13.02px]">Option 1</div>
                <div className="text-[14px] font-[700]">Color</div>
              </div>

              <div className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center ">
                <Image
                  src="/more_horiz.svg"
                  alt="image"
                  width={12}
                  height={3}
                />
              </div>
            
          </div>
<Divider className="my-[15px]"/>
          <div className="w-full flex flex-wrap px-[16px] gap-y-[10px]">
            {selectedItems.map((item) => (
              <Tag
                key={item}
                closable
                onClose={() => handleDelete(item)}
                className="rounded-full px-[10px] w-fit flex gap-x-[20px] text-[12px] "
              >
                {item}
              </Tag>
            ))}
          </div>

          <AutoComplete
          className="px-[16px]"
            style={{
              borderColor: "rgb(0 0 0 / 20%)",
            }}
            // onSearch={handleSearch}
            // onSelect={handleSelect}
            value={inputValue}
            onChange={(value) => setInputValue(value)} // `value` is of type string
          >
            <Input
              placeholder={placeholder}
              autoComplete="off"
            
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
              className="ml-[1.25rem]"
              style={{
                display: "block",
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
    </div>
  );
};

export default InventoryVariationCollectionComponent;
