import React, { Component } from 'react';
import TabBox from '../../components/tabBox/tabBox';
import SelectWords from '../../components/mijn-list/select-word';
import SelectText from '../../components/mijn-list/select-text';
import LinearGradient from  'react-native-linear-gradient';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';


class MijnList extends Component {
  render() {
    return (
      <>
        <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
          <TabBox navigation={this.props.navigation} gereed={true} bgColor='#fff' firstTab={<SelectWords navigation={this.props.navigation} />} secondTab={<SelectText navigation={this.props.navigation} />} />
        </LinearGradient>
      </>
    );
  }
}

export default MijnList;