import {Provider} from "next-auth/client"


function MyApp({ Component, pageProps }) {

  return (
    //keeps the session available 
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
  )
}
export default MyApp
