import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import { takeEvery, put } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";


const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
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
        detail,
    }),
    applyMiddleware(sagaMiddleware, logger),
);



function* fetchAllMovies() {
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



function* watcherSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);

}

sagaMiddleware.run(watcherSaga);

export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}


