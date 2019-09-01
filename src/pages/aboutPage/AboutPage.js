import React, {useEffect, useRef} from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Flex,Box,Heading,Text} from 'rebass'

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
        who w r <br/>
        DASRC is a remote software company with its 4 companions.<br/>

        what w do<br/>
        We do cloud and SAAS related products that effects millions of people around the world.<br/>

        how w do<br/>
        Our team member touch +15 million of peoples live till now. Now we grow.<br/>

        why w do<br/>
        Doing international effective and creative field related products<br/>

      </Text>
    </Box>
      </Flex>
  );
}

export default AboutPage;
