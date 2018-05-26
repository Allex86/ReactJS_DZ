import React, {Component} from 'react';
import {Link} from 'react-router';

import Jumbotron from '../components/Jumbotron';
import Marketing from '../components/Marketing';

export default class Main extends Component
{
	render() {
      return (
         <div className="main_page">
         	<h2>This is Main Page</h2>
            <Jumbotron/>
            <Marketing/>
      	</div>
      );
   };
}