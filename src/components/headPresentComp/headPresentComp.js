import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Box} from 'rebass'

function HeadPresentComp(){
    return(
        <Box sx={{color:'text', fontSize:4}}>
            WE ARE <strong>DASRC</strong>
            <br/>
            A <strong>REMOTE</strong> COMPANY
            <br/>
            <br/>
            FROM <strong>SPACE</strong>
        </Box>
    );
}

export default HeadPresentComp;