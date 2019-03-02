import Link from 'next/link';
import UUID from '../components/UUID';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import APIUsage from '../components/APIUsage';

const Index = props => {
  return (
    <Layout>
      <h1>UUID Generator</h1>
      <h2>You may use this generated UUID below, or use the UUID Generator via the API or command line (curl, httpie, wget, etc...)</h2>
      <UUID type="uuid/v4" value={props.uuid} />
      {props.error && props.error.message}
      <div className="links">
        <Link href="/">
          <a>Generate</a>
        </Link>
      </div>
      <APIUsage />
    </Layout>
  );
};

Index.getInitialProps = async function({ req, res }) {
  let sendPlain = false;
  const accept = req ? req.headers['accept'] : "";

  if (accept.indexOf("text/html") < 0 && !!req){
    sendPlain = true;
  }

  const result = await fetch(`${process.env.apiBaseUrl}/api`, {
    headers: {
      accept: 'application/json'
    }
  });

  if (result.status !== 200) {
    return sendPlain ? result.statusText : { error: { status: result.status, message: result.statusText } };
  }

  const { uuid } = await result.json();

  return sendPlain ? res.end(`${uuid}\n`) : { uuid };
};

export default Index;
