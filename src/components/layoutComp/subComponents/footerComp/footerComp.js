import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Footer,Container} from 'theme-ui' 
import {Button,Box } from 'rebass'
import {Label, Select} from '@rebass/forms'
function FooterComp(props){
    const productSelect={
        0: "Products",
        1: "DasMedia Geo",
        2: "DasGeo",
        3: "DasReady Mobile",
        4: "DasVR",
        5: "Verymir"
    };
    return (
        <Footer>
            <Container>
                <Box>
                    <Button sx={{
                        bg:"background",
                        color:"text"
                    }}> <strong>ABOUT</strong></Button>
                </Box>
                <Box  width={[ 1/4 ]}>
                    <Select
                        id='productSelectId'
                        name='productSelect'
                        defaultValue='United States'>
                        {Object.entries(productSelect).map(([ key, product ]) => (
                        <option
                            key={key}>
                            {product}
                        </option>
                        ))}
                    </Select>
                    </Box>
            </Container>

        </Footer>
    );
}
export default FooterComp;
