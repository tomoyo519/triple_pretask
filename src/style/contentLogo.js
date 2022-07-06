import styled from 'styled-components'

import triple from '../images/triple2x.png'

import { FadeInItems } from './animation'

export const ContentLogoSection = styled.div`
  position: absolute;
  width: 400px;
  height: 338px;
  ${(props) => FadeInItems(props.isMounted, 100)}
`

export const LogoMetric = styled.div`
  position: absolute;
  padding-top: 280px;
  text-align: center;
  background-image: url(${triple});
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: 400px 338px;
  width: 400px;
  height: 338px;
  top: 150px;
  color: #3a3a3ab3;
  font-size: 15px;
  font-family: sans-serif;
`
