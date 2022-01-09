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
      {/* <div className={styles.floatercontainer}>
         <p>hey</p>
         <Image
         className={styles.floater}
         // className="top-100 bg-gradient-to-r from-neutral-900 to-cyan-900 inline"
         src="/6dogs.svg"
         alt="Picture of the author"
         width={150}
         height={250}
         layout="fill"
         objectFit="contain"
         />
      
       <Image
        className={styles.floater}
        src="/amindi.svg"
        alt="Picture of the author"
        width={250}
        height={150}
         objectFit="contain"
      />
      </div> */}
      {/*
      <Image
        className={styles.floater}
        src="/bigthief.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/badbunny.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/cannons.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/fosterthepeople.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/gorrilaz.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      /> */}
      {/* <Image
        className={styles.floater}
        src="/timetomelt.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/illeniium.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/jaduheart.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/joeybadass.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
       <Image
        className={styles.floater}
        src="/liluzivert.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/lucki.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/mtjoy.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/odesza.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      /> */}
      {/* <img className={styles.floater} src="/6dogs.svg"></img> */}
      {/* <Image
        className={styles.floater}
        src="/6dogs.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <Image
        className={styles.floater}
        src="/6dogs.svg"
        alt="Picture of the author"
        width={100}
        height={100}
      /> */}
      <p className='z-20'>Because the image has a z-index of -1, it will be placed behind the heading.</p>
      {/* <Avatar/>
      <Avatar/> */}
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
