const recipe = {
  name: 'Basil Pizza',
  location: 'The Coffeeshop',
  occupation: {
    title: 'Fresh from the brick oven',
    author: 'Margie'
  },
  photo: 'http://lorempixel.com/output/food-q-c-280-200-3.jpg',
  updates: [
    {
      platform: 'twitter',
      status: 'I\'m vegan, and wonder if you can substitute a vegan cheese'
    },
    {
      platform: 'twitter',
      status: 'The better the singer\'s voice, the more they shouldn\'t eat pizza.'
    },
    {
      platform: 'twitter',
      status: 'Hunger makes the pizza look smaller'
    },
    {
      platform: 'facebook',
      status: 'If you\'re working on something that you think is going to get accomplished in this lifetime then you\'re not thinking big enough'
    }
  ]
};

class Photo extends React.Component {

  render() {

    return (
      <div className="photo">
      <img src={this.props.photo} />
    </div>
  )
  }
}

class Bio extends React.Component {

  render() {

    return (
      <div className="bio">
      <h1 className="name">{this.props.name}</h1>
      <h2 className="location">{this.props.location}</h2>
      <div className="occupation">
      <p>{this.props.occupation.title} by {this.props.occupation.author}</p>
    </div>
    </div>
  )
  }
}



class Updates extends React.Component {


  updates() {

    return this.props.updates.map(function(update, index) {

      return (
          <li className={"update " + update.platform} key={index}>
            {update.status}
          </li>
      )
    });

  }

  render() {
    return (
      <div className="updates">
      <ul>
        {this.updates()}
      </ul>
      </div>
  )
  }
}

class Card extends React.Component {
  render() {
    return(
      <div className="card">
      <Photo photo={recipe.photo} />
      <Bio name ={recipe.name} location={recipe.location} occupation = {recipe.occupation}/>
      <Updates updates={recipe.updates} />
      </div>
  )
  }
}

ReactDOM.render(<Card />,document.getElementById('app')
);