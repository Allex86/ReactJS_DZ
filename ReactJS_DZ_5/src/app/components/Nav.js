import React, {Component} from 'react';
import {Link} from 'react-router';

import MenuItem from '../components/MenuItem';

export default class Nav extends Component 
{
    isActive(href)
    {
        return window.location.pathname === href;
    }

    render() {
        return (
          <nav className="navbar navbar-inverse navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">TEST Jumbotron</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">


                        <MenuItem href="/" active={this.isActive('/')}>Main</MenuItem>
                        <MenuItem href="/posts" active={this.isActive('/posts')}>Posts</MenuItem>
                        <MenuItem href="/comments" active={this.isActive('/comments')}>Comments</MenuItem>
                        <MenuItem href="/users" active={this.isActive('/users')}>Users</MenuItem>

                        <MenuItem href="/links" active={this.isActive('/links')}>Links</MenuItem>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu">

                                <li><Link to="/posts">Posts</Link></li>
                                <li><Link to="/comments">Comments</Link></li>
                                <li><Link to="/users">Users</Link></li>
                                <li><Link to="/links">Link</Link></li>

                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <p className="navbar-text">Already have an account?</p>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                            <ul id="login-dp" className="dropdown-menu">
                                <li>
                                    <div className="row">
                                        <div className="col-md-12">
                                            Login via
                                            <div className="social-buttons">
                                                <a href="#" className="btn btn-fb"><i className="fa fa-facebook"/> Facebook</a>
                                                <a href="#" className="btn btn-tw"><i className="fa fa-twitter"/> Twitter</a>
                                            </div>
                                            or
                                            <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                                <div className="form-group">
                                                    <label className="sr-only" for="exampleInputEmail2">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="sr-only" for="exampleInputPassword2">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                                    <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox"/> keep me logged-in
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bottom text-center">
                                            New here ? <a href="#"><b>Join Us</b></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                      </ul>
                  </div>
              </div>
          </nav>
        );
    };
}