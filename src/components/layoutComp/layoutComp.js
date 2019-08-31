import React from 'react'
import {
    ThemeProvider,
    Layout,
    Main,
    Container

} from 'theme-ui';
import themeRebass from '@rebass/preset';
import HeaderComp from './subComponents/headerComp/headerComp'
import FooterComp from './subComponents/footerComp/footerComp'
import './layoutComp.scss';

function LayoutComp (props){
    return (
        <ThemeProvider theme={themeRebass}>
            <Layout>
                <HeaderComp></HeaderComp>
                <Main>
                    <Container>{props.children}</Container>
                </Main>
                <FooterComp></FooterComp>
            </Layout>
        </ThemeProvider>
        );
}

export default LayoutComp;