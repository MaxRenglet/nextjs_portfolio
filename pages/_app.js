import { motion, AnimatePresence } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from 'next/head'

import '../styles/app.scss';

function MyApp({ Component, pageProps, router }) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
  };

  let title = "RMAX";

  if (router.pathname.split("").length > 1) {
    let items = router.asPath.split('/');
    let _items = [];
    items.forEach(element => {
      _items.push(element.toUpperCase());
    });
    title = title + _items.join(" / ")
  }

  return (

    <>
            <Head>
              <title>{title}</title>
            </Head>
           

           <main className="container is-fluid pt-6">
              <AnimatePresence exitBeforeEnter>

                <motion.div
                  transition={spring}
                  key={router.pathname}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: -300, opacity: 0 }}
                  id="page-transition-container"
                >
                  <Header />
                  <Component {...pageProps} key={router.route} />
                  <Footer />
                </motion.div>



              </AnimatePresence>
              </main>
              
      
         
    </>

  )
}

export default MyApp