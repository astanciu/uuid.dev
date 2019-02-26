
const UUID = (props) => {
  const {type, value} = props

  return (<div className="uuid-container">
    <div className="uuid-type">{type}</div><div className="uuid-value"> {value} </div>
  </div>)
}


export default UUID