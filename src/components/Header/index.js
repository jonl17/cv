import React from "react"
import { Container, Item, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import "./index.css"
import { useSelector } from "react-redux"

const Header = ({
  data: {
    site: {
      siteMetadata: { menuitems },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device}>
      {menuitems.map((item, index) => (
        <Item key={index} activeClassName="selected-header-item" to={item.url}>
          <Text>{item.title}</Text>
        </Item>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            menuitems {
              title
              url
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props}></Header>}
  ></StaticQuery>
)
