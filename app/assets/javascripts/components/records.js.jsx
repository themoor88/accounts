var Records = React.createClass({
  getInitialState () {
    return {
      records: this.props.data
    }
  },

  getDefaultProps () {
    return {
      records: []
    }
  },

  render () {
    var records = this.state.records.map((record) => {
      return (
        <Record key={record.id} record={record}/>
      )
    });

    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </table>
      </div>
    )
  }
});