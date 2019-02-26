import Link from 'next/link';
import UUID from '../uuid';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = props => {
  if (props.ua.indexOf('curl') === 0){
    return "hello curl"
  }
  return (
    <Layout>
      <h1>UUID Generator</h1>
      <UUID type="uuid/v4" value={props.uuid} />
      {props.error && props.error.message}
    </Layout>
  );
};

Index.getInitialProps = async function({ req }) {
  const ua = req ? req.headers['user-agent'] : navigator.userAgent
  const url = `${process.env.apiBaseUrl}/api`;
  const opts = {
    headers: {
      accept: 'application/json'
    }
  };
  const res = await fetch(url, opts);

  if (res.status !== 200) {
    return { error: { status: res.status, message: res.statusText } };
  }

  const { uuid } = await res.json();

  return { uuid,  ua};
};

export default Index;
