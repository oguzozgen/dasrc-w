import React, {useEffect, useRef} from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Flex,Box,Heading,Text} from 'rebass'
import UnderDevelopmentComp from "../../components/underDevelopmentComp/UnderDevelopmentComp";

function AboutPage(){


  return (
       <Flex
      flexWrap='wrap'
      px={2}
      fontSize={[1,3]}
      color='text'
      alignItems='center'
      alignContent='center'
      justifyContent='center'
      >

    <Box width={[1,1/2]} fontSize={[1,3]} sx={{color:'grey'}}>
      <Heading fontSize={[3,5]} textAlign={"center"}>ABOUT</Heading>
      <Text>
      </Text>
      <UnderDevelopmentComp/>
    </Box>
      </Flex>
  );
}

export default AboutPage;
