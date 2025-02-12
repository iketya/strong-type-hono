import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())

app.get("/text", c => {
return c.json({"message":"test"})
})

export default app