import React, { lazy, Suspense } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutePri from './Route';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../components/Spinner';


//import Main from '../pages/Main';

//import SignIn from '../pages/SignIn';
//import SignUp from '../pages/SignUp';
//import Prueba from '../pages/prueba';


const Main = lazy(() => import("../pages/Main"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Post = lazy(() => import("../pages/Post"));
const Profile = lazy(() => import("../pages/Profile"));


const Routes = () => {
    return (
        <BrowserRouter>
        <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
            draggable
        />
            <Switch>
                <Suspense fallback={<p>Cargando ... { <Spinner style={{width: '100px', height: '120px', borderradius: '200%'}} />}</p>}>
                    <RoutePri exact path= "/" component={Main} isPrivate/> 
                    <RoutePri exact path= "/photo/:photo_id" component={Post} isPrivate/> 
                    <RoutePri exact path= "/profile/:username" component={Profile} isPrivate/> 
                    <RoutePri exact path= "/signin" component={SignIn} />
                    <Route exact path= "/signup" component={SignUp} />
                </Suspense>{/*<Route exact path= "/prueba" component={Prueba} />*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;