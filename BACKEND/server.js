import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server litsening at port ${process.env.PORT}`);
});