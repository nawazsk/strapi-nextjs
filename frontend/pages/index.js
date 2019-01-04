// import Layout from '../components/Layout.js'
// import Link from 'next/link'

// function getPosts () {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js'},
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
//   ]
// }

// const Index = () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       {getPosts().map((post) => (
//         <li key={post.id}>
//           <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//             <a>{post.title}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )


import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
  return (
    <Layout>
    <h1>POSTS</h1>
    <ul>
      {props.posts.map((post) => {
        return(
          <li key={post.id}>
            <Link as={`/${post.slug}`} href={`/post?slug=${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
  )
  
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/posts')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    posts:data
  }
}

export default Index