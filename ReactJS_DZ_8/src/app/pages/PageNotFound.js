import React from 'react';

export default class PageNotFound extends React.Component
{
    render(){
        return (
            <div>
               Error 404. <br />
               Страница не найдена!
               <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            </div>
        );
    }
}