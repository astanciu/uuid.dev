const APIUsage = props => (
  <div className="wrap-collabsible">
    <input id="collapsible" className="toggle" type="checkbox" />
    <label htmlFor="collapsible" className="lbl-toggle">
      API Usage
    </label>
    <div className="collapsible-content">
      <div className="content-inner">
        <div className="apiusage">
          <div className="apisample">curl -L uuid.dev <span className="api-comment">[default to v4]</span></div>
          <div className="apisample">GET https://uuid.dev/api <span className="api-comment">[default to v4]</span></div>
          <div className="apisample">GET https://uuid.dev/api/v1</div>
          <div className="apisample">GET http://localhost:4000/api/v3?name=NAME[&namespace=NAMESPACE]</div>
          <div className="apisample">GET https://uuid.dev/api/v4</div>
          <div className="apisample">GET https://uuid.dev/api/v5?name=NAME</div>
          <div className="apisample"></div>
          <div className="apisample">Accept: [application/json | application/xml | text/plain]</div>
        </div>
      </div>
    </div>
  </div>
);

export default APIUsage;
