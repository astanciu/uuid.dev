import Link from 'next/link';
import UUID from '../uuid';
import getConfig from 'next/config';
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

Index.getInitialProps = async function({req, res}) {  
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const url = `${process.env.apiBaseUrl}/api`;
  const opts = {
    headers: {
      accept: 'application/json'
    }
  };
  const result = await fetch(url, opts);

  if (result.status !== 200) {
    return { error: { status: result.status, message: result.statusText } };
  }

  const { uuid } = await result.json();

  if (userAgent.indexOf('curl') === 0){
    return res.end(`${uuid}\n`)
  }

  return { uuid,  ua};
};

export default Index;
