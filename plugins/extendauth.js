export default function({ $auth }) {
  // extend the plugin as you want
  if ($auth.loggedIn) {
    console.log('Hii ' + $auth.user.name)
  }
}
