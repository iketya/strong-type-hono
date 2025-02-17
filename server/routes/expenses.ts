import { Hono } from 'hono'


type Expenses={
    id:number,
    title:string,
    amount:number,
}

const fakeExpenses: Expenses[]=[
    {id:1, title:"Groceries",amount:50},
    {id:2, title:"Utilities",amount:100},
    {id:3, title:"Rent",amount:1000},
];

export const expensesRoute = new Hono()

.get("/", async (c) => {
    return c.json({expenses:fakeExpenses});
})
.post("/", async (c) => {
    const expenses =await c.req.json()
    console.log({expenses})
    return c.json(expenses);
});
