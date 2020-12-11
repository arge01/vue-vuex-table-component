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
        state.data.column = column;
    },
    initRowsData(state, rows) {
        state.data.rows = rows;
    },
    updateData(state, data) {

    },
    deleteData(state, dataID) {

    }
}

const actions = {
    initColumnApp(context, column) {
        context.commit("initColumnData", column);
    },
    initRowsApp(context, rows) {
        context.commit("initRowsData", rows);
    },
    update() {},
    delete() {},
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;