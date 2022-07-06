import styled from "styled-components";

import { FadeInItems } from "./animation";

export const MetricContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  ${(props) => FadeInItems(props.isMounted, 200)}
`;

export const MetricItem = styled.div`
  width: 417px;
  height: 36px;
  display: flex;
  font-size: 36px;
  font-family: sans-serif;
  color: #3a3a3a;
  margin-bottom: 20px;
  letter-spacing: -1px;
`;
