import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import ComparePage from './pages/ComparePage';
import MatchPage from './pages/MatchPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/certificate/:id" element={<DetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/match" element={<MatchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
