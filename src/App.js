import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Countries from './components/Countries';
import Details from './components/Details';
import Home from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="details/:country" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
