export default function({ store, route, redirect }) {
  // Get meta properties from route. Example: authorizationRoles = ['GROWER_ROLE'].
  const authorizationRoles = route.meta.map((meta) => {
    if (meta.auth) return meta.auth.role;
  });

  /**
   *@ Redirect to '/login' if user not authenticated or have not authorizations.
   */
  if (
    !store.state.auth.loggedIn ||
    !authorizationRoles.includes(
      JSON.parse(store.state.auth.user).roles.shift()
    )
  ) {
    return redirect('/login');
  }
}
