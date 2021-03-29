import '../styles/globals.css';
import { TodosProvider } from '../contexts/TodosContext';
// import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <div className='container mx-auto my-6 max-w-xl'>
        <Component {...pageProps} />
      </div>
    </TodosProvider>
  );
}

export default MyApp;
