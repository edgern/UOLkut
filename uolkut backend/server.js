const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const rules = auth.rewriter({
    users: 644
  })

app.db = router.db

app.use(middlewares)
app.use(rules)
app.use(auth)
app.use(router)
app.listen(3001, () => {
    console.log('JSON Server is running')
})