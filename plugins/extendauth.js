export default function({ $auth }) {
  // extend the plugin as you want
  if ($auth.loggedIn) {
    // eslint-disable-next-line
    console.log('Hii ' + $auth.user.name)
  }
}
