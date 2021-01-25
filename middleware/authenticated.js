export default function({ store, req, route, redirect }) {
  // Get meta properties from route. Example: authorizationRoles = ['GROWER_ROLE'].
  const authorizationRoles = route.meta.map((meta) => {
    if (meta.auth && meta.auth.role !== 'undefined') return meta.auth.role;
  });

  /**
   *@ Redirect to '/login' if user not authenticated and have not authorizations.
   */
  if (!store.state.auth.loggedIn) return redirect('/security/login');
  const loggedInRole = JSON.parse(store.state.auth.user).roles.shift();

  if (authorizationRoles.shift() !== loggedInRole) {
    // const role = authorizationRoles.shift();
    console.log('You are not authorized to visit this page.');
    return redirect('/error');
  }
  console.log('You are authorized');
}
