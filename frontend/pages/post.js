import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => {
  const {post} = props;
  return(
      <Layout>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        
      </Layout>
  )
}

Post.getInitialProps = async function (context) {
  console.log(context);
  const { slug } = context.query
  const res = await fetch(`http://localhost:1337/posts?slug=${slug}`)
  const data = await res.json()
  console.log(`Fetched show: ${data[0].title}`)

  return { post:data[0] }
}

export default Post