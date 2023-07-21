import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { takeEvery, put } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const table = (state = [], action) => {
    switch (action.type) {
        case 'SET_TABLE':
            return action.payload;
        default:
            return state;
    }
}

const detail = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return [action.payload];
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        movies,
        genres,
        table,
        detail,
    }),
    applyMiddleware(sagaMiddleware, logger),
);



function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const response = yield fetch('/api/movie');
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const movies = yield response.json();
        yield put({ type: 'SET_MOVIES', payload: movies });
    } catch {
        console.log('get all error');
        alert('Something went wrong.')
    }
}

function* fetchTable() {
    try {
        const response = yield fetch('/api/table');
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const table = yield response.json();
        yield put({ type: 'SET_TABLE', payload: table });
    } catch {
        console.log('get all table error');
        alert('Something went wrong fetching the table.')
    }
}

function* fetchAllGenres() {
    try {
        const response = yield fetch('/api/genre');
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const genres = yield response.json();
        yield put({ type: 'SET_GENRES', payload: genres });
    } catch {
        console.log('get all error from genres');
        alert('Something went wrong fetching the genres.')
    }
}


function* watcherSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_TABLE', fetchTable);
    yield takeEvery('FETCH_GENRE', fetchAllGenres);

}

sagaMiddleware.run(watcherSaga);

export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}


