import {Hono} from 'hono'
const app = new Hono()

app.get("/api/home",(c)=>{
 return c.json('Hello Hono')
})
export default app
