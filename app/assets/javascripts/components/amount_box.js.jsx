var AmountBox = React.createClass({
  render () {
    return (
      <div className='col-md-4'>
        <div className={'panel panel-' + this.props.type}>
          <div className='heading'>
            {this.props.text}
          </div>
          <div className='panel-body'>
            {amountFormat(this.props.amount)}
          </div>
        </div>
      </div>
    );
  }
});
