const recipe = {
  name: 'Basil Pizza',
  location: 'The Coffeeshop',
  occupation: {
    title: 'Fresh from the brick oven',
    author: 'Margie'
  },
  photo: 'http://lorempixel.com/output/food-q-c-280-200-3.jpg',
  updates: [{
    platform: 'twitter',
    status: 'I\'m vegan, and wonder if you can substitute a vegan cheese'
  }, {
    platform: 'twitter',
    status: 'The better the singer\'s voice, the more they shouldn\'t eat pizza.'
  }, {
    platform: 'twitter',
    status: 'Hunger makes the pizza look smaller'
  }, {
    platform: 'facebook',
    status: 'If you\'re working on something that you think is going to get accomplished in this lifetime then you\'re not thinking big enough'
  }]
};

class Photo extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.photo })
    );
  }
}

class Bio extends React.Component {

  render() {

    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.occupation.title,
          ' by ',
          this.props.occupation.author
        )
      )
    );
  }
}

class Updates extends React.Component {

  updates() {

    return this.props.updates.map(function (update, index) {

      return React.createElement(
        'li',
        { className: "update " + update.platform, key: index },
        update.status
      );
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        this.updates()
      )
    );
  }
}

class Card extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { photo: recipe.photo }),
      React.createElement(Bio, { name: recipe.name, location: recipe.location, occupation: recipe.occupation }),
      React.createElement(Updates, { updates: recipe.updates })
    );
  }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));