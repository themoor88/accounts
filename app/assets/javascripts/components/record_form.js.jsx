var RecordForm = React.createClass({
  getInitialState () {
    return {
      title: '',
      date: '',
      amount: ''
    };
  },

  // This function has to be present in order to assign the value property to a this.state value.
  // This sets each properties of the state object every time it changes.
  handleChange (e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  valid () {
    return (this.state.title && this.state.date && this.state.amount);
  },

  handleSubmit (e) {
    e.preventDefault();
    $.post (
      '',
      {record: this.state},
      function (data) {
        this.props.handleNewRecord(data);
        this.setState(this.getInitialState());
      }.bind(this),
      'JSON'
    );
  },

  render () {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input
            type='date'
            className='form-control'
            placeholder='Date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange} />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange} />
        </div>

        <div className='form-group'>
          <input
            type='number'
            className='form-control'
            placeholder='Amount'
            name='amount'
            value={this.state.amount}
            onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            className='btn btn-primary'
            disabled={!this.valid()} />
        </div>
      </form>
    );
  }
});
