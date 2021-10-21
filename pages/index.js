
import Head from 'next/head'
import {useRouter} from 'next/router';
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import {signIn, signOut, useSession} from  "next-auth/client";
import styles from '../styles/Home.module.css'



export default function Home(){
  const [session, loading] = useSession();
  const toList = () => {
    router.push('/view');
  };
  const router = useRouter();
  return(

    <wrapper className={styles.main}>

      {!session && (
      <container>
    <h1 className={styles.notlogged}>You are currently not logged in, please log in using button below</h1>  
          <button className={styles.btnStyle} onClick={signIn}>Log in</button>
      </container>

      )}
      {
        session && (
          <>
          Signed in as {session.user.name}
          <button onClick={toList}>Click to view</button>
          </>
          
        
        )
      }
    </wrapper>
  
  )
}

