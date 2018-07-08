const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  projectList: state => state.resume.projectList,
  routers: state => state.permission.routers,

}
export default getters
