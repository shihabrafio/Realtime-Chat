const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: true}))

app.post("/authenticate",async (req,res)=>{
    const {username} = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: { 
                'Private-Key': '15848f71-ba81-487c-a9a2-ada86ebfd858'
              }}
        )
        const {data,status} = r
        res.status(status)      
        return res.json(data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
})

app.listen(3000);