import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Button, Image} from 'react-native';
import {colors} from '../theme'

class LogoTitle extends React.Component {
  render() {
    return (
        <Image
            source={require('./spiro.png')}
            style={{ width: 30, height: 30 }}
        />
    );
  }
}

export default class Cities extends React.Component {
  // static navigationOptions = {
  //   title: 'Cities',
  //   headerTitleStyle: {
  //     color: 'black',
  //     fontSize: 20,
  //     fontWeight: '400'
  //   }
  // };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (<LogoTitle />),
      headerRight: (
          <Button
              onPress={navigation.getParam('increaseCount')}
              title="+1"
              color={'white'}
          />
      ),
      headerTitle: (
          <View>
            <Text>Hey John</Text>
            <Text>Last week you saved 17,69 $</Text>
          </View>
      )
    };
  };

  viewCity = (city) => {
    this.props.navigation.navigate('City', {city})
  };

  render() {
    console.log('props:', this.props);
    return (
      <ScrollView>
        <View style={styles.rectangle}>
          <Text>TESTING</Text>

        </View>
        <View>
          {
            this.props.screenProps.cities.map((city, index) => (
                <View>
                  <TouchableWithoutFeedback onPress={() => this.viewCity(city)}>
                    <View style={styles.cityContainer}>
                      <Text style={styles.city}>{city.city}</Text>
                      <Text style={styles.country}>{city.country}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    color: 'rgba(0,0,0,.5)'
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
    backgroundColor: 'red'
  }
});