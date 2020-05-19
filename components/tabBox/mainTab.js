import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { globalStyle } from '../../styles/global-style';

var bgColor = null;

class MainTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPanel: true
    }
  }

  render() {
    bgColor = this.props.bgColor;
    return (
      <>
        <View style={[globalStyle.wrapper, globalStyle.topSpace]}>
          <ScrollView>
            <>
              <View style={{ flexDirection: 'row' }}>
                <Button onPress={() => this.setState({ tabPanel: true })} style={[styles.tabBtn, this.state.tabPanel ? null : styles.activeButton]}>Word</Button>
                <Button onPress={() => this.setState({ tabPanel: false })} style={[styles.tabBtn, this.state.tabPanel ? styles.activeButton : null]}>Text</Button>
              </View>
              
              <View style={[styles.tabBox, { backgroundColor: bgColor || '#01baf3' }]}>
                {
                  this.state.tabPanel ?
                    <View>
                      {this.props.tabOne}
                    </View>
                    :
                    <View>
                      {this.props.tabTwo}
                    </View>
                }
                {
                  this.props.gereed ? <Button onPress={() => this.props.navigation.goBack()} style={styles.gereed}>Gereed</Button> : null
                }
              </View>
            </>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  gereed: {
    backgroundColor: '#01baf3',
    color: '#fff',
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 10,
  },
  tabBox: {
    borderRadius: 10,
    borderTopLeftRadius: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#01baf3',
  },
  activeButton: {
    backgroundColor: '#fff',
    color: '#000',
  },
  tabBtn: {
    color: '#fff',
    backgroundColor: '#01baf3',
    padding: 10,
    borderRadius: 4,
    marginBottom: -1,
    borderWidth: 1,
    borderColor: '#01baf3',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
export default MainTab;