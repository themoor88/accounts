var Record = React.createClass({
  render () {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
    )
  }
});
