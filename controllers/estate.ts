import {RouterContext} from 'https://deno.land/x/oak/mod.ts'
import estates from '../stubs/estates.ts'

export default {
  getAllEstates: ({response}: RouterContext ) => {
    response.status = 200;
    response.body = estates;
  },
  createEstate: async () => {}
}
