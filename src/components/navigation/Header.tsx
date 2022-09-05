import React, { ButtonHTMLAttributes } from 'react'
import styles from './Header.module.scss'
import styled from 'styled-components';
import SelectBox from '../common/SelectBox';
import { useTranslation } from 'react-i18next';


type OptionType = {
  label: string;
  value: string;
};

enum LANGUAGE {
  'EN' = 'en-EN',
  'KR' = 'ko-KR'
}

const LoginButton = styled.button`
  outline:none;
  background:none;
  padding:10px 20px;
  border: 1px solid #fff;
  border-radius:5px;
  margin-right:10px;
  color:#eee;
  transition: all 0.2s ease;
  cursor:pointer;
  &:hover {
    opacity:0.6;
    box-shadow: 0px 0px 5px #000;
  }
`

function Header() {

  const {t,i18n} = useTranslation();
  
  const loginHandler = (e:React.MouseEvent<HTMLElement>) => {
      console.log('handler')
  }

  const handleChangeTrans = (option?:OptionType | null) => {
  
    let defaultTrans = LANGUAGE.EN
    if(option){
      switch(option.value){
        case LANGUAGE.EN:
          defaultTrans = LANGUAGE.EN
          break
        case LANGUAGE.KR:
          defaultTrans = LANGUAGE.KR
          break
        default:
          defaultTrans = LANGUAGE.EN
      }
      i18n.changeLanguage(defaultTrans) 
    }
  }
  
  return (
    <div className={styles.container}>
      <div>
        <LoginButton onClick={loginHandler}>
          지갑 로그인
        </LoginButton>
      </div>
      
      <div className={styles['select-wrapper']}>
        <SelectBox onChange={handleChangeTrans}/>
      </div>
      
    </div>
  )
}

export default Header