import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Flex,Box,Heading,Text} from 'rebass'
import UnderDevelopmentComp from "./components/underDevelopmentComp/UnderDevelopmentComp";
import LayoutCont from './containers/layoutCont/LayoutCont'
import './App.scss'

/*
function App() {
  return (
    <LayoutCont>
      <Routes />
    </LayoutCont>
  );
}
*/
function App() {
  return (
    <LayoutCont>
      <Flex
        flexWrap='wrap'
        px={2}
        fontSize={[1, 3]}
        color='text'
        alignItems='center'
        alignContent='center'
        justifyContent='center'
      >

        <Box width={[1, 1 / 2]} fontSize={[1, 3]} sx={{ color: 'grey' }}>
          <Heading fontSize={[3, 5]} textAlign={"center"}  className={"dasrc-text-style"} style={{ fontSize: 4.5 + "rem" }} >DASRC</Heading>
          <Text>
            <UnderDevelopmentComp />
          </Text>
        </Box>
      </Flex>
    </LayoutCont>
  )
}

export default App
