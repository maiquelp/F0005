import React from 'react';

import {connect} from 'react-redux';

function Todos(todos) {
  return (
    <ul className="Todos">
      {todos.map(e => (
        <li key={e.id}>{e.text}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
