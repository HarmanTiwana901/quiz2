 import {getSession} from "next-auth/client";


 export default async (req, res) => {

    const session = await getSession({req});


    if(session){
        res.send({
            content: "List of the cars"
        });
    } else {
        res.send("Please sign in ")
    }
 }