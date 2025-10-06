import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import SavedProfilesPage from './pages/SevedProfilesPage';
import SearchPage from './pages/SearchPage';
import SavedSearchesPage from './pages/SavedSearchesPage';
import SettingsPage from './pages/SettingsPage';
import Layout from './components/layout/Layout';


function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="saved-profiles" element={<SavedProfilesPage />} />
            <Route path="saved-searches" element={<SavedSearchesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
