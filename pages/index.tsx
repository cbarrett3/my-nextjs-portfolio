import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
     <>
   <div className="bg-neutral-900 bg-gradient-to-r from-neutral-900 to-neutral-800 h-screen max-h-screen overflow-y-hidden w-screen overflow-x-auto scrollbar-hide z-0 relative">
   {/* <div className="h-screen max-h-screen overflow-y-hidden w-screen overflow-x-auto scrollbar-hide z-0 relative"> */}

      <div className={styles.snowflakes} aria-hidden="true">
         {/* <div className={styles.snowflake}>
            ❅
         </div>
         <div className={styles.snowflake}>
            ❆
         </div>
         <div className={styles.snowflake}>
            ❅
         </div> */}
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-yellow-400 to-cyan-900 opacity-80 border-8 rounded-xl"
               src="/amindi.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-neutral-900 to-neutral-900 opacity-80 border-8 rounded-xl"
               src="/badbunny.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-yellow-100 to-neutral-900 opacity-80 border-8 rounded-xl"
               src="/bigthief.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-pink-900 to-pink-300 opacity-80 border-8 rounded-xl"
               src="/cannons.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-neutral-300 to-yellow-500 opacity-80 border-8 rounded-xl"
               src="/fosterthepeople.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <a href="https://www.facebook.com">
            <Image
               className="bg-gradient-to-r from-green-900 to-orange-700 opacity-80 border-8 rounded-xl"
               src="/gorrilaz.svg"
               alt="Picture of the author"
               width={100}
               height={100}
               objectFit="contain"
            />
            </a>
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-orange-800 to-neutral-900 opacity-80 border-8 rounded-xl"
               src="/illeniium.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-neutral-900 to-neutral-100 opacity-80 border-8 rounded-xl"
               src="/jaduheart.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-purple-900 to-blue-600 opacity-80 border-8 rounded-xl"
               src="/liluzivert.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
         <div className={styles.snowflake}>
            <Image
               className="bg-gradient-to-r from-blue-900 to-green-400 opacity-80 border-8 rounded-xl"
               src="/timetomelt.svg"
               alt="Picture of the author"
               width={100}
               height={100}
                  objectFit="contain"
            />
         </div>
      </div>
      {/* <div className="flex items-center flex-col scrollbar-hide overflow-y-scroll -rotate-90">
         <div className="bg-yellow-800 text-white h-96 w-auto font-bold rounded-lg border shadow-lg p-12 opacity-95 rotate-90">
            oh hello!
         </div>
         <div className="bg-neutral-900 text-white h-96 w-auto font-bold rounded-lg border shadow-lg p-12 opacity-95 rotate-90">
            hi there
         </div>
         <div className="bg-orange-900 text-white h-96 w-auto font-bold rounded-lg border shadow-lg p-12 opacity-95 rotate-90">
            hi there
         </div>
      </div> */}
      <div className="flex items-center justify-start h-screen flex-row overflow-x-scroll">
         <div className="bg-red-900 text-white h-48 min-w-full font-bold rounded-lg border shadow-lg p-12">
            oh hello!
         </div>
         <div className="bg-orange-900 text-white h-64 min-w-full font-bold rounded-lg border shadow-lg p-12 opacity-95">
            hi there
         </div>
         <div className="bg-neutral-900 text-white h-80 min-w-full font-bold rounded-lg border shadow-lg p-12 opacity-95">
            hi there
         </div>
         <div className="bg-yellow-800 text-white h-96 min-w-full font-bold rounded-lg border shadow-lg p-12 opacity-95">
            hi there
         </div>
      </div>
      {/* <div className="flex items-center justify-center h-screen overflow-y-scroll -rotate-90">   */}
      {/* <div className="h-100 w-100 flex items-center overflow-y-scroll -rotate-90">  
         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 w-40 h-80 rotate-90">
            oh hey there :)
         </div>
         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 w-40 h-80 rotate-90">
            oh hey there :)
         </div>
         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 w-40 h-80 rotate-90">
            oh hey there :)
         </div>
         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 w-40 h-40 rotate-90">
            oh hey there :)
         </div>
         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 w-40 h-40 rotate-90">
            oh hey there :)
         </div>
      </div> */}

      {/* <div className={styles.container1}>
         <div className={styles.content1}>Content 1</div>
         <div className={styles.content1}>Content 2</div>
      </div> */}

   </div>
   </>
  )
}

function Avatar() {
   return <Image src="/badbunny.svg" alt="me" width="264" height="164" />
}

// // pages/index.js
// export const getStaticProps: GetStaticProps = async () => {
//    const db = await myDB.connect({
//      host: process.env.DB_HOST,
//      username: process.env.DB_USER,
//      password: process.env.DB_PASS,
//    })
//    // ...
//  }
 
//  export const getStaticPaths: GetStaticPaths = async () => {
//    // ...
//  }
 
//  export const getServerSideProps: GetServerSideProps = async (context) => {
//    // ...
//  }

export default Home
