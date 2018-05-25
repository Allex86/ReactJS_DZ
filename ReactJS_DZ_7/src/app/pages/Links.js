import React, {Component} from 'react';
import {Link} from 'react-router';

import Jumbotron from '../components/Jumbotron';
import Marketing from '../components/Marketing';

export default class Links extends Component
{
	render() {
      return (
         <div className="links_page">
            <h2>This is Links</h2>
            <Jumbotron/>
            <Marketing/>
      	</div>
      );
   };
}