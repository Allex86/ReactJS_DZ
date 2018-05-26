import React, {Component} from 'react';

export default class Alert extends Component {
    render() {
        return (
          <div id="myModal" className="modal fade alert alert-success" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Modal Header</h4>
                </div>
                <div className="modal-body">
                  <p>Some text in the modal.</p>
                  <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                </div>
                <div className="modal-footer">
                  <div className="button_left"/>

                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                  <div className="button_right"/>
                </div>
              </div>
            </div>
          </div>
        );
    };
}