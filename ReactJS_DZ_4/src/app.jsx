import React from 'react';
import ReactDOM from 'react-dom';
//import KanbanBoard from './app/components/kanban/KanbanBoard';
import JumbotronContainer from './app/components/Jumbotron/JumbotronContainer';

const app = document.getElementById('app');

/* const cardList = [
    {
        id: 1,
        title: 'Прочитать книгу по React',
        description: 'Прочитать книгу по React v15+',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 2,
        title: 'Изучить React',
        description: 'Изучить React v15+',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: 'Изучить JSX',
                done: true
            },
            {
                id: 2,
                name: 'Изучить React Component',
                done: true
            },
            {
                id: 3,
                name: 'Изучить Routing',
                done: false
            }
        ]
    },
    {
        id: 3,
        title: 'Написать приложение на React',
        description: 'KanbanBoard',
        status: 'done',
        tasks: []
    },
]; */

//ReactDOM.render(<KanbanBoard cards={cardList}/>, app);
ReactDOM.render(<JumbotronContainer/>, app);