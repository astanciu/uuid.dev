import Link from 'next/link';
import UUID from '../uuid';
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = props => {

  return (
    <Layout>
      <h1>UUID Generator</h1>
      <UUID type="uuid/v4" value={props.uuid} />
      {props.error && props.error.message}
    </Layout>
  );
};

Index.getInitialProps = async function({ req }) {

  const url = `${process.env.apiBaseUrl}/api`
  console.log('URL: ', url)
  const res = await fetch(url);

  if (res.status !== 200) {
    return { error: { status: res.status, message: res.statusText } };
  }
  const { uuid } = await res.json();

  return { uuid };
};

export default Index;
