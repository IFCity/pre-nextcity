const Events = ({data}) => {
  return (
    <ul>
      {data.map(({ title }) => (
          <li>{title}</li>
      ))}
    </ul>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/events')
  const json = await res.json()
  return { props: {data: json} }
}

export default Events;