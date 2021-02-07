import React from 'react';
import { useSelector } from 'react-redux';
import PublicView from './PublicView';
import GaurdedView from './GaurdedView';

const AppViewport = () => {
    const isLoggedIn = useSelector(isLoggedIn);
    return isLoggedIn ? <GaurdedView /> : <PublicView />;
}

export default AppViewport;