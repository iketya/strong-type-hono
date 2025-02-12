import { Hono } from 'hono'
const app = new Hono()


app.get("/text", c => {
return c.json({"message":"test"})
})

export default app