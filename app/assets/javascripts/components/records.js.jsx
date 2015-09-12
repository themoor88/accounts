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
    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
      </div>
    )
  }
});