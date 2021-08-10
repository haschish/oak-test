import { Router } from 'https://deno.land/x/oak/mod.ts'
import estateController from '../controllers/estate.ts'

const router = new Router()
router
  .get('/data', estateController.getAllEstates)
  .post('/data', estateController.createEstate)

export default router
