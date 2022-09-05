import React,{useState} from 'react'
import styled from 'styled-components';

interface CategoryType {
  label:string,
  key:string
}

interface CategoryItemProps {
  active:boolean
}

const Container = styled.div`
  font-size:2.5rem;
  padding : 1rem 2rem;
  border-bottom:2px solid grey;
  margin-bottom:2rem;
`;

const CategoryList = styled.ul`
  display:flex;
  overflow-x:scroll;
  align-items:center;
  ::-webkit-scrollbar {
    display:none;
  }
`
const CategoryItem = styled.li<CategoryItemProps>`
  margin-right:2rem;
  min-width:20%;
  /* min-width:20rem; */
  color: ${props => props.active ? 'palevioletred' : 'gray'};
  border-bottom : ${props => props.active ? '.3rem solid palevioletred' : 'none'};
  cursor:pointer;
  
  span {
    display:inline-block;
    padding-bottom:1rem;
  }
`
const categoryList:CategoryType[] = [
  {
    label:'art',
    key:'0001'
  },
  {
    label:'character',
    key:'0002'
  },
  {
    label:'music',
    key:'0003'
  },
  {
    label:'sports',
    key:'0004'
  },
  {
    label:'etc',
    key:'0005'
  },
]
function Category() {

  const [selectedCategory,setSelectedCategory] = useState<string>(categoryList[0].key);
  
  const onChangeCategory = (e:React.MouseEvent) => {

    const key = e.currentTarget.getAttribute('data-key')
    const label = e.currentTarget.getAttribute('data-label')
    if(key && label) {
      setSelectedCategory(key)
    }
    
  }

  return (
    <Container>
      <CategoryList>
        {categoryList.map(({key,label})=> {
          return (
            <CategoryItem key = {key} data-key = {key} data-label = {label} onClick={onChangeCategory} active={key == selectedCategory}>
              <span>{label}</span>
            </CategoryItem>
          )
        })}
        
      </CategoryList>
    </Container>
  )
}

export default Category