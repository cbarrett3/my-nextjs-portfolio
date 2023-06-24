import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const Admin: NextPage = () => {
  return (
    <div>
      admin page
      <Avatar />
    </div>
  );
};

function Avatar() {
  return (
    <Image
      src="/vercel.svg"
      alt="me"
      width="64"
      height="64"
    />
  );
}

export default Admin;
