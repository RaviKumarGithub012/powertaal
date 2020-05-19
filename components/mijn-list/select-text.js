import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import OrangeBtn from '../theme-btn/orange-btn';
import TableRow from './table-row';

class SelectText extends Component {
  render() {
    return (
      <View>
        <View style={styles.boxWrapper}>
          <Text style={styles.panelHeading}>Selected Words</Text>
          <View style={styles.sectionRow}>
            <ScrollView style={styles.scrollHeight}>
              <Text>asdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sf6ajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlasdf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjlf asdfasdlf asdf asldfja sfdajsdf alsdfalsdfjalsdf asdjl</Text>
            </ScrollView>
          </View>
          <View>
            <View style={{ paddingVertical: 10, }}>
              <OrangeBtn title="Leegmaken" size="small" center={true} />
            </View>
          </View>
        </View>
        <View style={[styles.boxWrapper, { marginTop: 15 }]}>
          <Text style={styles.panelHeading}>NEDERLANDS NEDERLANDS</Text>
          <ScrollView style={[styles.scrollHeight, { paddingVertical: 6, paddingHorizontal: 0 }]}>
            <TableRow />
          </ScrollView>
          <View>
            <View style={styles.bottomFooter}>
              <OrangeBtn title="Leegmaken" size="small" center={true} />
              <View style={{ marginLeft: 10 }}>
                <OrangeBtn title="Alles wissen" size="small" center={true} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10
  },
  scrollHeight: {
    maxHeight: 95,
    padding: 6
  },
  sectionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  boxWrapper: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: '#ddd'
  },
  panelHeading: {
    backgroundColor: '#01baf3',
    color: '#fff',
    paddingVertical: 5,
    textAlign: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default SelectText;