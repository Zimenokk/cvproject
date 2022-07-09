import Home from '../app/components/screens/home/Home';
import { APP_URL } from '../app/constants';
import axios from 'axios';

export default function HomePage({ props }) {
  return (
    <div>
      <Home {...props} />
    </div>
  );
}

export const getStaticProps = async () => {

  const links = await axios.get(`${APP_URL}/links`).then(({ data }) => data);
  const me = await axios.get(`${APP_URL}/me`).then(({ data }) => data);

  return {
    props: {
      links, me
    },
    revalidate: 60
  };
};