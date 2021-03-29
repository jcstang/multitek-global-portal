import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { minifyRecords, table } from './api/utils/Airtable';
import { TodosContext } from '../contexts/TodosContext';
import { useEffect, useContext } from 'react';

export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);
  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <div>
      <Head>
        <title>MultiTek Global Portal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <h1>Welcome</h1>
        <ul>
          {/* If todos are there */}
          {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ul>
      </main>
    </div>
  );
}

// nextjs function, run this function before serving page
// go get airtable stuff, then add it to props here
export async function getServerSideProps(context) {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: minifyRecords(todos),
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        err: 'Something went wrong, dog',
      },
    };
  }
}
