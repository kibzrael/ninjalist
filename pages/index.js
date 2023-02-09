import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          adipisci sint cum, minima commodi aspernatur quia explicabo officia,
          provident repellat deleniti tenetur tempora voluptatem quasi,
          accusantium aut iure impedit. Deserunt!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem
          reiciendis distinctio consequuntur facilis pariatur iusto nesciunt.
          Laboriosam ex rerum iusto sequi, numquam qui, officiis quisquam
          corrupti maiores quidem ipsa.
        </p>
        <Link className={styles.btn} href="/ninjas">
          See Ninja Listing
        </Link>
      </div>
    </>
  );
};

export default Home;
