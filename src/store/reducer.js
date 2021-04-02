import { findAllByDisplayValue } from "@testing-library/react";
import { TYPES } from './type';

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case TYPES.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case TYPES.SET_PLAYING:
            return {
                ...state,
                playing: action.playing,
            };
        case TYPES.SET_ITEM:
            return {
                ...state,
                item: action.item,
            };
        case TYPES.SET_DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case TYPES.SET_TOP_ARTISTS:
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case TYPES.SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case TYPES.SET_SPOTIFY:
            return {
                ...state,
                spotify: action.spotify,
            };
        case TYPES.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;