/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

import { ListTodosQuery, CreateTodoInput } from 'API';


import awsExports from "./aws-exports";
import { GraphQLResult } from '@aws-amplify/api';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App:React.FC = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState<CreateTodoInput[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const setInput = (key:string, value:string) => {
    setFormState({ ...formState, [key]: value })
  }

  const fetchTodos = async () => {
    try {
      const todoData = (await API.graphql(
        graphqlOperation(listTodos),
        )) as GraphQLResult<ListTodosQuery>;
      if ( todoData.data?.listTodos?.items) {
        const todos = todoData.data.listTodos.items as CreateTodoInput[];
      }
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  const addTodo = async() => {
    try {
      if (!formState.name || !formState.description) return
      const todo:CreateTodoInput =  { ...formState }
      setTodos([...todos, todo]);
      setFormState(initialState);
      (await API.graphql(
        graphqlOperation(createTodo, {input: todo})
      )) as GraphQLResult<CreateTodoInput>;
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles : {
  [key: string]: React.CSSProperties;
} = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App