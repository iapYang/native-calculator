import types from './mutation-types';

export default {
    changeValue({commit}, {newValue}) {
        commit(types.SCREEN, {
            newValue,
        });
    },
};
