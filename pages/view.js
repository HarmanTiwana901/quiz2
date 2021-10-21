import {useState, useEffect} from "react";
import {useSession} from "next-auth/client";

export default function listcars(){
   
    
    if(!session){
        return(
            <main>
                Sign in with github
            </main>
        )
    }

    return(
        <main>
            cars
        </main>
    )
}