import React,{CSSProperties} from 'react'
import Select, {ControlProps, OptionProps,StylesConfig} from 'react-select';

type Props = {
  onChange:(option?:OptionType | null)=> void
}

type OptionType = {
  label: string;
  value: string;
};

const options: OptionType[] = [
  { label: "ENG", value: "en-EN" },
  { label: "KOR", value: "ko-KR" },
];

const customControlStyles: CSSProperties = {
  color: "white",
  borderColor: "white",
};

type IsMulti = false;

const selectStyle: StylesConfig<OptionType, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles
    };
  }
};

function SelectBox(props:Props) {
  
  return (
    <div>
      <Select options={options} styles={selectStyle} defaultValue={{ label: "ENG", value: 'en-EN' }}
        onChange={(option?:OptionType|null)=>{
          props.onChange(option)
        }}
      ></Select>
    </div>
  )
}

export default SelectBox