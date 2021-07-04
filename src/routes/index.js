import  React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from '../components/Body/Body';
import VirtualAssistantLink from '../components/VirtualAssiatantLink/VirtualAssistantLink';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const Routes = () => (
    <BrowserRouter>
<Navbar />
      <Switch>

        <Route exact path="/visual" component={VirtualAssistantLink} />
        <Route exact path="/" component={Body} />
 
        <Route exact path="*" component={() => <div>Page No Found</div>} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );

    export default Routes

