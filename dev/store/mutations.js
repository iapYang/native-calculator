import types from './mutation-types';

export default {
    [types.SCREEN](state, {value}) {
        if (state.screenValue === '0') {
            state.screenValue = value;
        } else {
            state.screenValue = `${state.screenValue}${value}`;
        }
    },
};
