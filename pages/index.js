import Home from '../app/components/screens/home/Home';
import axios from 'axios';
import { API_URL } from '../app/constants';


export default function HomePage(props) {
  return (
    <div>
      <Home {...props} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const links = await axios.get(`${API_URL}/linksTech`).then(({ data }) => data);
    const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);
    const linksSocials = await axios.get(`${API_URL}/linksSocials`).then(({ data }) => data);


    return {
      props: {
        links, me, linksSocials
      },
      revalidate: 60
    };
  } catch {
    return {
      props: { link: null, me: null, linksSocials: null },
      revalidate: 60
    };
  }
};