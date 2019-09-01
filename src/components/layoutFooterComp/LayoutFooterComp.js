import React from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Footer,Container} from 'theme-ui'
import {Button,Box,Text ,Flex} from 'rebass'
import {Label, Select} from '@rebass/forms'
import './LayoutFooterComp.scss'

function LayoutFooterComp(props){
    const productSelect=[
      {name:"Products"},
        {name:"DasMedia Geo"},
        {name:"DasGeo"},
        {name:"DasReady Mobile"},
        {name:"DasVR"},
        {name:"Verymir"}
    ];


    /**
    * when link element transform to "a" element
    * variants='nav' some of property overriding
    * Here original nav copy-pasted from
    * Through theme-ui elements
    * @see @rebass/preset in node_modules
    * @url https://github.com/rebassjs/rebass/blob/cf6cf963ea0f736ec899bba401175ed062eca3c8/packages/preset/src/index.js
    */
    const variantNavStyleFix={
       textDecoration:'none',
       fontWeight: 'bold',
       display: 'inline-block',
       p: 2,
       color: 'inherit',
       textDecoration: 'none',
       ':hover,:focus,.active': {
         color: 'primary',
        }
    };
    return (
        <Footer className={"fixed-footer-addition"}>
            <Container className={"fixed-footer-addition"}>
              <Flex
                bg="white"
                flexWrap='wrap'
                px={2}
                fontSize={[1,2]}
                color='text'
                alignItems='center'
                alignContent='center'
                justifyContent='flex-end'
                >
                <Link variant='nav' to="/" sx={variantNavStyleFix} >
                  HOME
                </Link>
                <Link variant='nav' to="/ProductsPage" sx={variantNavStyleFix} >
                  PRODUCTS
                </Link>
                <Link variant='nav' to="/ServicesPage" sx={variantNavStyleFix} >
                  SERVICES
                </Link>
                <Link variant='nav' to="/AboutPage" sx={variantNavStyleFix} >
                  ABOUT
                </Link>
              </Flex>
            </Container>
        </Footer>
    );
}
export default LayoutFooterComp;

/*
<Select
    id='productSelectId'
    name='productSelect'>
    {Object.entries(productSelect).map(([ key, product ]) => (
    <option
        key={key}>
        <Link key={key} variant='nav' to="/AboutPage"  >
        {product.name}
        </Link>
    </option>
    ))}
</Select>
*/
