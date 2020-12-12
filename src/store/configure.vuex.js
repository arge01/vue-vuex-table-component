import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    data: {column: {}, rows: {}},
}

const getters = {
    getColumn(state) {
        return state.data.column;
    },
    getRows(state) {
        return state.data.rows;
    }
}

const mutations = {
    initColumnData(state, column) {
        return state.data.column = column;
    },
    initRowsData(state, rows) {
        return state.data.rows = rows;
    },
    updateData(state, data) {
        const index = state.data.rows.findIndex(f => f.key === data.key);
        if ( index > -1 )
            state.data.rows[index] = data;
    },
    deleteData(state, data) {
        const index = state.data.rows.findIndex(f => f.key === data.key);
        if ( index > -1 )
            state.data.rows.splice(index, 1);
    }
}

const actions = {
    initColumnApp(context, column) {
        return context.commit("initColumnData", column);
    },
    initRowsApp(context, rows) {
        return context.commit("initRowsData", rows);
    },
    updateApp(context, data) {
        return context.commit("updateData", data);
    },
    deleteApp(context, data) {
        return context.commit("deleteData", data);
    },
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;