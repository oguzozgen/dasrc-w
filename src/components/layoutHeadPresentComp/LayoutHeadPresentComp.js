import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Box} from 'rebass'

function LayoutHeadPresentComp(){
    return(
        <Box sx={{color:'text', fontSize:4}}>
            WE ARE <strong>DASRC</strong>
            <br/>
            A <strong>REMOTE</strong> COMPANY
            <br/>
            <br/>
            FROM <strong>CLOUDS</strong>
        </Box>
    );
}

export default LayoutHeadPresentComp;
