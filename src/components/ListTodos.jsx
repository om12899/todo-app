import React from 'react';

function ListTodos() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
  const todos = [
    { id: 1, description: 'Learn AWS', status: 'Incomplete', targetDate : targetDate},
    { id: 2, description: 'Learn Java Springboot', status: 'Incomplete', targetDate : targetDate},
    { id: 3, description: 'Learn Flutter', status: 'Incomplete', targetDate : targetDate },
    { id: 4, description: 'Learn React', status: 'Incomplete', targetDate : targetDate },
    { id: 5, description: 'Learn Ruby on Rails', status: 'Incomplete', targetDate : targetDate }
  ];

  return (
    <div className='container'>
        <div className='d-flex justify-content-between'><h2>Add things you want to do</h2>
        <button className='btn btn-secondary mt-2'> Add</button>
        </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Target Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <th scope="row">{todo.id}</th>
                <td>{todo.description}</td>
                <td>{todo.status}</td>
                <td>{todo.targetDate.toDateString()}</td>
                <td className='d-flex'>
                  <button className='btn btn-primary'>Edit</button>
                  <div className='px-2'></div>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTodos;
