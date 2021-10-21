import React  from "react";
import { providers, signIn, getSession, csrfTok } from "next-auth/client";

export default function SignIn({providers, csrfTok}){
    return(
        <div>
            <h5>
                Sign in with github
            </h5>
            {Object.values(providers).map((provider) => {
                return (
                    <div key={provider.name}>
                        <button onClick={()=>signIn(provider.id)}>
                            Signin with github
                        </button>
                    </div>
                )

            })}

        </div>

    )
}

SignIn.getInitialProps = async(cxt) => {
    const req = cxt;
    const res = cxt;
    const sesh = await getSession({ req });
    if(sesh && res && sesh.accessToken) {
        res.writeHead(302, {  Location: "/",   });
        res.end()
        return;
    }
    return {
        sesh: undefined,
        providers: await providers(cxt),
    }
}