import React, { CSSProperties } from "react";
import Select, { ControlProps, OptionProps, StylesConfig } from "react-select";
import { useTranslation } from "react-i18next";

type Props = {
  onChange: (option?: OptionType | null) => void;
};

type OptionType = {
  label: string;
  value: string;
};

enum LANGUAGE {
  "EN" = "en-EN",
  "KR" = "ko-KR",
}

const customControlStyles: CSSProperties = {
  color: "white",
  borderColor: "white",
};

type IsMulti = false;

const selectStyle: StylesConfig<OptionType, IsMulti> = {
  control: (provided, state) => {
    return {
      ...provided,
      ...customControlStyles,
    };
  },
};

function SelectBox(props: Props) {
  const { t, i18n } = useTranslation();
  const defaultLanguage = i18n.language;

  let languageSet = [
    { label: "ENG", value: "en-EN" },
    { label: "KOR", value: "ko-KR" },
  ];
  const defaultValue = languageSet.find(
    (item) => item.value === defaultLanguage
  );
  languageSet = languageSet.filter((item) => {
    return item.value !== defaultLanguage;
  });

  return (
    <div>
      <Select
        options={languageSet}
        styles={selectStyle}
        defaultValue={defaultValue}
        onChange={(option?: OptionType | null) => {
          props.onChange(option);
        }}
      ></Select>
    </div>
  );
}

export default SelectBox;
