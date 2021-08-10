import { Application, Router, RouterContext } from 'https://deno.land/x/oak/mod.ts'
import {green, yellow} from 'https://deno.land/std@0.104.0/fmt/colors.ts'
import estateRouter from './routes/estate.ts'

const app = new Application()
const port = 8080

app.use(estateRouter.routes())
app.use(estateRouter.allowedMethods())

app.addEventListener('listen', ({secure, hostname, port}) => {
  const protocol = secure ? 'https' : 'http';
  const url = `${protocol}://${hostname ?? 'localhost'}:${port}`;
  console.log(`${yellow('Listening on:')} ${green(url)}`);
})
await app.listen({port})
