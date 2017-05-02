import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: 'AIzaSyAf1u3tOBqaLHDoTDQ6GRRBnxWvD8-DTdY',
	    authDomain: 'manager-3292a.firebaseapp.com',
	    databaseURL: 'https://manager-3292a.firebaseio.com',
	    projectId: 'manager-3292a',
	    storageBucket: 'manager-3292a.appspot.com',
	    messagingSenderId: '361265138614'
  		};

  firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;