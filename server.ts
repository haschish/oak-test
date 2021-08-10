import { Application, Router, RouterContext } from 'https://deno.land/x/oak/mod.ts'
import {green, yellow} from 'https://deno.land/std@0.104.0/fmt/colors.ts'

const app = new Application()
const port = 8080

const router = new Router()
router.get('/', ({response}: RouterContext) => {
  response.body = {message: 'Hello world!'}
})

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('listen', ({secure, hostname, port}) => {
  const protocol = secure ? 'https' : 'http';
  const url = `${protocol}://${hostname ?? 'localhost'}:${port}`;
  console.log(`${yellow('Listening on:')} ${green(url)}`);
})
await app.listen({port})
