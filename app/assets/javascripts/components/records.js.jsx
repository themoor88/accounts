var Records = React.createClass({
  getInitialState () {
    return {
      records: this.props.data
    };
  },

  getDefaultProps () {
    return {
      records: []
    };
  },

  addRecord (record) {
    var records = this.state.records.slice();
    records.push(record);
    this.setState({records: records});
  },

  deleteRecord () {

  },

  updateRecord () {

  },

  credits () {
    var credits = this.state.records.filter((record) => {
      return record.amount >= 0;
    });
    return credits.reduce((prev, curr) => {
      return prev + parseFloat(curr.amount);
    }, 0);
  },

  debits () {
    var debits = this.state.records.filter((record) => {
      return record.amount < 0;
    });
    return debits.reduce((prev, curr) => {
      return prev + parseFloat(curr.amount);
    }, 0);
  },

  balance () {
    return this.debits() + this.credits();
  },

  render () {
    var records = this.state.records.map((record) => {
      return (
        <Record
          key={record.id}
          record={record}
          handleDeleteRecord={this.deleteRecord}
          handleEditRecord={this.updateRecord} />
      );
    });

    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <div className='row'>
          <AmountBox type='success' amount={this.credits()} text='Credit' />
          <AmountBox type='danger' amount={this.debits()} text='Debit' />
          <AmountBox type='info' amount={this.balance()} text='Balance' />
        </div>
        <RecordForm handleNewRecord={this.addRecord} />
        <hr />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </table>
      </div>
    );
  }
});