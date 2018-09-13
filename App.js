import React from 'react';
import { YellowBox } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { createStackNavigator } from 'react-navigation';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

/*
export default class App extends React.Component {
  render() {
    return (
      <EventList />
    );
  }
}
*/

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event'
    })
  }
});

//trigger reload
