import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import Main from './Main';
import Gist from './Gist';
import Home from './Home';
import About from '../components/about';
import { Link, Route } from 'react-router-dom';

const style = {
    display: 'flex',
    alignItems: 'stretch'
};

export default ({ gists }) => (
    <div style={style}>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Main>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
        </Main>
    </div>
);

