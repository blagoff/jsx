  var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
   
    render: function () {
      return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={"https://img.icons8.com/ios/50/000000/user-male-circle-filled.png"}/>
          <div>
            <p>
              Imię: {this.props.item.firstName} 
            </p>
            <p>
              Nazwisko: {this.props.item.lastName}
            </p>
            <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
            </a>
          </div>
        </div>
      )
    }

  });