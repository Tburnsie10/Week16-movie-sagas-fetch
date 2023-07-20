import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;


/* - TODO: When a movie poster is clicked, a user should be brought to the `/details` 
    view for that movie.

### Details Page

This should show all details **including ALL genres** for the selected movie, 
including title, description, and the image, too! Use Sagas and Redux to handle 
these requests and data. */