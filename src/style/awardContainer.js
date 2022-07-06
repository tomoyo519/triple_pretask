import styled from 'styled-components'

import appleLogo from '../images/badge-apple4x.png'
import playStoreLogo from '../images/play-store2x.png'

import { FadeInItems } from './animation'

export const AwardSectionContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 140px;
  margin-left: 623px;
  display: flex;
  ${(props) => FadeInItems(props.isMounted, 300)}
`
export const AwardGoogleItem = styled.div`
  display: flex;
  display: relative;
  background-size: 54px 54px;
  height: 54px;
  line-height: 22px;
  background-position: left top;
  background-repeat: no-repeat;

  background-image: url(${playStoreLogo});
`

export const AwardAppleItem = styled.div`
  display: flex;
  display: relative;
  background-size: 54px 54px;
  height: 54px;
  line-height: 22px;
  background-position: left top;
  background-repeat: no-repeat;
  background-image: url(${appleLogo});
`

export const AwardMetric = styled.div`
  margin-right: 39px;
  width: 150.14px;
  height: 44px;
  font-size: 14px;
  font-family: sans-serif;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 62px;
  color: #3a3a3acc;
  font-weight: bold;
`
