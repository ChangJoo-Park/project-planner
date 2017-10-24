export default function ({ store, route, error }) {
  console.log(route)
  if (!store.state.authUser) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
