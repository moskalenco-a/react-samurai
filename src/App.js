import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { UsersListContainer } from './components/UsersList/UsersListContainer';

window.getState = store.getState;

const App = (props) => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersListContainer />} />
           </Routes>
        </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
