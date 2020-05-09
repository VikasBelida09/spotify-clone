import React from 'react'
import { BrowserRouter,Switch ,Route} from 'react-router-dom'
import App from './App'
import Dashboard from './Dashboard'
import Showcars from './Showcars'
import CurrentBookingSection from './CurrentBookingSection'
import Form from './Form'
import ShowCardetails from './ShowCardetails'
export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/showcars" exact component={Showcars}/>
                    <Route path="/bookingsection" exact component={CurrentBookingSection}/>
                    <Route path="/booking" exact component={Form}/>
                    <Route path="/:car" exact component={ShowCardetails}/>
                    
                    {/* <Route path="/:handle" exact component={Profile}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}