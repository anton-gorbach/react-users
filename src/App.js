import React from 'react';
import './App.css';
import Card from "./components/card/Card";
import AddCard from "./components/card/AddCard";
import Header from "./components/header/Header";

class App extends React.Component {
  state = {
    data: '',
      name: '',
      email: '',
      address: {
          city: ''
      }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(result=>result.json())
          .then(value => {
              this.setState({data: value});
              console.log(value);
          })
  }

  sortByName = () => {
      const {data} = this.state;
      const newData = data.sort((a, b) => {
          if (a.name > b.name) {
              return 1;
          }
          if (a.name < b.name) {
              return -1;
          }
          return 0;
      });
      this.setState({data: newData});
  }

  sortByCity = () => {
        const {data} = this.state;
        const newData = data.sort((a, b) => {
            if (a.address.city > b.address.city) {
                return 1;
            }
            if (a.address.city < b.address.city) {
                return -1;
            }
            return 0;
        });
        this.setState({data: newData});
  }

  deleteCard = (itemId, e) => {
      const {data} = this.state;
      let newData = data.filter(item => item.id != itemId);
      this.setState({data: newData});
  }

  toggleCard = (cardId, e) => {
      const {data} = this.state;
      let toogleUser = data.find(user => user.id === cardId);
      toogleUser.isHidden = !toogleUser.isHidden;
      this.forceUpdate();
  }

  handleInputChange = (e) => {
      const {name, value} = e.target;

      if(name === 'name') this.setState({[name]: value});
      if(name === 'email') this.setState({[name]: value});
      if(name === 'address') this.setState({address: {city: value}});
  }

  getMaxId = (arr) => {
      let max = 0;
      let maxId = arr.map((el) => {
          if(el.id > max) {
              max = el.id;
          }
      });
      return max;
  }

  addUser = () => {
      const {data, name, email, address} = this.state;
      const users = [...data];
      const id = this.getMaxId(users) + 1;

      const newUser = {
          id,
          name,
          email,
          address
      };

      this.setState((state) => {
          state.data = [...data, newUser];
          state.name = '';
          state.email= '';
          state.address = '';
          state.city = '';
      });

      console.log(this.state);
      this.forceUpdate();
  }

  render() {
      const {data, name, email, address } = this.state;
      return (
        <div className="App">
            <Header sortName = {this.sortByName} sortCity = {this.sortByCity} />
            {data
                ? data.map(item=>{return <Card
                        user={item}
                        key={item.id}
                        deleteCardFunc = {this.deleteCard.bind(null, item.id)}
                        toggleCardFunc = {this.toggleCard.bind(null, item.id)}
                    />})
                : 'Loading...'
            }
            <div className="card" style={{width: '18rem', float: 'left', minHeight: '15rem'}}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="user-name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            id="user-name"
                            placeholder="Enter name"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className="form-control"
                            id="user-email"
                            placeholder="Enter email"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-city">City</label>
                        <input
                            type="text"
                            name="address"
                            value={address.city}
                            className="form-control"
                            id="user-city"
                            placeholder="Enter city"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={this.addUser}>Add user</button>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
