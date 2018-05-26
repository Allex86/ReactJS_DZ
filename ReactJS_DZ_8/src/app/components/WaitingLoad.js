import React, {Component} from 'react';

export default class WaitingLoad extends Component {
   render() {
   	return (
      	<div>
      		<p>Waiting load . . .</p>
      		<i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"/>
      	</div>
      );
   };
}