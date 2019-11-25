import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core'
import { createBrowserHistory } from "history";
import { Router, BrowserRouter as Route, Switch} from 'react-router-dom';
import RESET_STYLES from './commonStyles/__reset_styles'
import LandingPage from './components/layouts/landingPage';
import ProgrammePage from './components/layouts/pragrammePage';
import ArticlePage from './components/layouts/articlesPage';
const customHistory = createBrowserHistory();

export default  function App(){
    return (

             <Router history={customHistory}>

                <Switch>
                     <Route exact path='/articles'>
                         <Global styles={RESET_STYLES}/>
                        <ArticlePage/>
                    </Route>
                    <Route exact path='/programme'>
                        <ProgrammePage/>
                    </Route>
                    <Route exact path='/'>
                        <Global styles={RESET_STYLES}/>
                        <LandingPage/>
                    </Route>
                </Switch>

            </Router>

    )
};
App.Wrapper = styled.div`
    
    background-color: red;
`;


