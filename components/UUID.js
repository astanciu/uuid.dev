import clipboard from "clipboard-polyfill";

const UUID = (props) => {
  const {type, value} = props
  const copy = e => clipboard.writeText(value)
  return (<div className="uuid-container">
    <div className="uuid-type">{type}</div><div className="uuid-value" onClick={copy}> {value}</div>
  </div>)
}


export default UUID