import Head from 'next/head';
import Navbar from '../components/Navbar';
import { minifyRecords, table } from './api/utils/Airtable';

export default function Home({ initialTodos }) {
  console.log(initialTodos);
  return (
    <div>
      <Head>
        <title>MultiTek Global Portal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <h1>Welcome</h1>
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
