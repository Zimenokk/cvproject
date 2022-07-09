import Home from '../app/components/screens/home/Home';

export default function HomePage(props) {
  return (
    <div>
      <Home {...props} />
    </div>
  );
}

// export const getStaticProps = async () => {
//
//   const links = await axios.get(`${API_URL}/api`).then(({ data }) => data);
//   const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);
//
//
//   return {
//     props: {
//       links, me
//     },
//     revalidate: 60
//   };
// };