import React from "react"
import './Content.css'
import Home from '../../views/contents/Home'
import Sobre from '../../views/contents/sobre'
import { Switch, Route } from 'react-router-dom'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />  
            </Route>

            <Route path="/sobre">
                <Sobre />
            </Route>           
        
        </Switch>
    </main>
)
export default Content
