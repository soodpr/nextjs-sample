import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Index({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          NextJS Sample - Static Site
        </h1>
        <p className={styles.description}>
          This page is statically rendered at build time.
        </p>
        <p>
          <Link href="/">Back</Link>
        </p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/static/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { posts }, revalidate: 60 }
}
