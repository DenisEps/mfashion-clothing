import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/mfLogo_cropped.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  /* height: 100%; */
  width: 120px;
  padding: 7px;
  @media screen and (max-width: 800px) {
    width: 100px;
    padding: 0 0 0 10px;
  } ;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoSvg = styled(Logo)`
  width: 100%;
  height: 100%;
`;
