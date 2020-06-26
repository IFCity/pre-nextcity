const Event = ({data: {title, _id}}) => {
  return (
    <>
      <h1>Подія</h1>
      <h2>{title}, {_id}</h2>
    </>
  );
}

export async function getServerSideProps({params}) {
  const res = await fetch(`http://localhost:3000/api/event/${params.id}`)
  const json = await res.json()
  return { props: {data: json} }
}

export default Event;

/*export default function Post({ postData }) {
  return (
    <Layout>
    <Head>
    <title>{postData.title}</title>
    </Head>
    <article>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
    <Date dateString={postData.date} />
  </div>
  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </article>
  </Layout>
)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}*/