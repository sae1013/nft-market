import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "../common/category";

interface CategoryItemProps {
  active?: boolean;
}

const Container = styled.div`
  font-size: 2.5rem;
  padding: 1rem 2rem;
  border-bottom: 2px solid grey;
  margin-bottom: 2rem;
  text-align: center;
  margin: 4rem 2rem;
`;

const CategoryList = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryItem = styled.li<CategoryItemProps>`
  margin-right: 2rem;
  min-width: 20%;
  transition: color 0.3s ease-in;
  color: ${(props) => (props.active ? "#f2f2f2" : "gray")};
  border-bottom: ${(props) =>
    props.active ? ".3rem solid palevioletred" : "none"};
  cursor: pointer;

  span {
    display: inline-block;
    padding-bottom: 1rem;
  }
`;

function Category({ selectedCategory, handleCategory }) {
  const onChangeCategory = (e: React.MouseEvent) => {
    const key = e.currentTarget.getAttribute("data-key");
    const label = e.currentTarget.getAttribute("data-label");
    if (key && label) {
      handleCategory(key);
    }
  };

  return (
    <Container>
      <CategoryList>
        {Object.values(categories).map(({ key, label }) => {
          return (
            <CategoryItem
              key={key}
              data-key={key}
              data-label={label}
              onClick={onChangeCategory}
              active={key === selectedCategory}
            >
              <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
            </CategoryItem>
          );
        })}
      </CategoryList>
    </Container>
  );
}

export default Category;
