import React from 'react'
import {
    ThemeProvider,
    Layout,
    Main,
    Container

} from 'theme-ui';
import themeRebass from '@rebass/preset';
import LayoutHeaderComp from '../../components/layoutHeaderComp/layoutHeaderComp'
import LayoutFooterComp from '../../components/layoutFooterComp/layoutFooterComp'
import './layoutCont.scss';

function LayoutCont (props){
    return (
        <ThemeProvider theme={themeRebass}>
            <Layout>
                <LayoutHeaderComp></LayoutHeaderComp>
                <Main>
                    <Container>{props.children}</Container>
                </Main>
                <LayoutFooterComp></LayoutFooterComp>
            </Layout>
        </ThemeProvider>
        );
}

export default LayoutCont;
