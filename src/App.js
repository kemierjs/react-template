import './App.css';
import Header from './components/Header'
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
let i = 0;
function App() {
    return (
        <div className="App">
            <Header name={user.firstName}></Header>
            Hello, {formatName(user)}!
        </div>
    );
}

export default App;
