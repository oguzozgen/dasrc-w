import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Box} from 'rebass'

function LayoutHeadPresentComp(){
    return(
        <Box fontSize={[1,3]} sx={{color:'text'}}>
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
