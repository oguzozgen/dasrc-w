import React from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Footer,Container} from 'theme-ui'
import {Button,Box } from 'rebass'
import {Label, Select} from '@rebass/forms'
function LayoutFooterComp(props){
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

                   <Link to="/AboutPage" style={{textDecoration:"none"}} sx={{color:"text"}}><span><strong>ABOUT</strong></span></Link>

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
export default LayoutFooterComp;
