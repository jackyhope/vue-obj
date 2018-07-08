const project = {
    state: {
        projectList: []
    },
    mutations: {
        ADD_PROJECT: (state, project) => {
            state.projectList.push(project);
        }
    },
    actions: {
        addProject: ({ commit }, project) => {
            commit('ADD_PROJECT', project)
        }
    }
}

export default project
