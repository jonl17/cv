import styled, { css, keyframes } from "styled-components"
import { transition, BOXSIZE } from "../../../constants"

const introLoad = keyframes`
  from {
    height: ${BOXSIZE.mobile}px;
    width: ${BOXSIZE.mobile}px;
    margin-top: -${BOXSIZE.mobile / 2}px;
    margin-left: -${BOXSIZE.mobile / 2}px;
    opacity: 0;
  }
  to {
    height: ${BOXSIZE.browser}px;
    width: ${BOXSIZE.browser}px;
    margin-top: -${BOXSIZE.browser / 2}px;
    margin-left: -${BOXSIZE.browser / 2}px;
    opacity: 1;
  }
`

const ContainerStyle = css`
  position: absolute;
  top: 55%;
  left: 50%;
  border: 4px solid blue;
  transition: ${transition};
  animation: ${introLoad} 0.6s ease-in-out 0s;
`
/** here we handle props */
export const Container = styled.div`
  ${ContainerStyle};
  transform: rotate(${props => props.rotation});
  ${props =>
    props.device === `browser` &&
    css`
      height: ${BOXSIZE.browser}px;
      width: ${BOXSIZE.browser}px;
      margin-top: -${BOXSIZE.browser / 2}px;
      margin-left: -${BOXSIZE.browser / 2}px;
    `}
  ${props =>
    props.device === `tablet` &&
    css`
      height: ${BOXSIZE.browser}px;
      width: ${BOXSIZE.browser}px;
      margin-top: -${BOXSIZE.browser / 2}px;
      margin-left: -${BOXSIZE.browser / 2}px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      height: ${BOXSIZE.mobile}px;
      width: ${BOXSIZE.mobile}px;
      margin-top: -${BOXSIZE.mobile / 2}px;
      margin-left: -${BOXSIZE.mobile / 2}px;
    `}
`
const TitleStyle = css`
  position: absolute;
  margin: auto;
  width: 100%;
  text-align: center;
  height: 100%;
  font-size: 18px;
`

export const Title = styled.p`
  ${TitleStyle};
  ${props =>
    props.right &&
    css`
      transform: rotate(90deg);
      right: -${BOXSIZE.browser / 10}px;
      ${props =>
        props.device === `mobile` &&
        css`
          right: -${BOXSIZE.mobile / 10}px;
        `}
    `}
  ${props =>
    props.center &&
    css`
      top: -${BOXSIZE.browser / 10}px;
      ${props =>
        props.device === `mobile` &&
        css`
          top: -${BOXSIZE.mobile / 10}px;
        `}
    `}
  ${props =>
    props.left &&
    css`
      transform: rotate(-90deg);
      left: -${BOXSIZE.browser / 10}px;
      ${props =>
        props.device === `mobile` &&
        css`
          left: -${BOXSIZE.mobile / 10}px;
        `}
    `}
`