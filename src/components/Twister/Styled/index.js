import styled, { css, keyframes } from "styled-components"
import { transition, BOXSIZE } from "../../../constants"
import { Link } from "gatsby"

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
  top: 50%;
  left: 50%;
  border: 1px solid black;
  transition: ${transition};
  animation: ${introLoad} 0.6s ease-in-out 0s;
  background: white;
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
  font-weight: bold;
  font-size: 23px;
  pointer-events: none;
  z-index: 10;
  box-sizing: border-box;
  padding-top: 15px;
`

export const BTN = styled(Link)`
  text-decoration: none;
  pointer-events: all;
  transition: 0.2s ease-in-out;
  text-transform: uppercase;
  z-index: 10;
  opacity: 1;
  color: black;
  &&:hover {
    opacity: 0.8;
  }
`
export const Title = styled.p`
  ${TitleStyle};
  ${props =>
    props.position === `right` &&
    css`
      transform: rotate(90deg);
      right: -${BOXSIZE.browser / 10}px;
      transform-origin: 45% 45%;
      ${props =>
        props.device === `mobile` &&
        css`
          right: -${BOXSIZE.mobile / 10}px;
        `}
    `}
  ${props =>
    props.position === `center` &&
    css`
      bottom: 0;
      ${props =>
        props.device === `mobile` &&
        css`
          top: -${BOXSIZE.mobile / 10}px;
        `}
    `}
  ${props =>
    props.position === `left` &&
    css`
      transform: rotate(-90deg);
      left: -${BOXSIZE.browser / 10}px;
      transform-origin: 55% 45%;
      ${props =>
        props.device === `mobile` &&
        css`
          left: -${BOXSIZE.mobile / 10}px;
        `}
    `}
    ${props =>
      props.position === `bottom` &&
      css`
        transform: rotate(-180deg);
        left: -${BOXSIZE.browser / 10}px;
        transform-origin: 55% 50%;
        ${props =>
          props.device === `mobile` &&
          css`
            left: -${BOXSIZE.mobile / 10}px;
          `}
      `}
`
