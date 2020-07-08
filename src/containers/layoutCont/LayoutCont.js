import React from 'react'
import {
    ThemeProvider,
    Layout,
    Main,
    Container,
    Flex,
} from 'theme-ui';
import themeRebass from '@rebass/preset';
import LayoutHeaderComp from '../../components/layoutHeaderComp/LayoutHeaderComp'
import LayoutFooterComp from '../../components/layoutFooterComp/LayoutFooterComp'
import LayoutHeadPresentComp from '../../components/layoutHeadPresentComp/LayoutHeadPresentComp'
import './LayoutCont.scss';

function LayoutCont (props){
    return (
        <ThemeProvider theme={themeRebass}>
            <Layout>
               
                <Main>
                    <Container>
                     
                    </Container>
                      <Container style={{
                        display: 'flex',
                          alignItems: 'center',
                          alignSelf: 'center',
                          alignContent: 'center',
                          justifyContent: 'center'
                        }}>
                              {props.children}
                      </Container>
                </Main>
               
            </Layout>
        </ThemeProvider>
        );
}

export default LayoutCont;
/** 
 *  in first container inside main
 *  <LayoutHeadPresentComp></LayoutHeadPresentComp>
 *  before main
 *  <LayoutHeaderComp></LayoutHeaderComp>
 * afteher main
 * <LayoutFooterComp></LayoutFooterComp> 
 * 
 * */