import React, { Component } from 'react';
import InnerTab from '../../components/tabBox/toevoegen-tab';
import ToevoegenText from '../../components/tabBox/toevoegen-text';
import TabBox from '../../components/tabBox/tabBox';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';


class Toevoegen extends Component {
  render() {
    return (
      <>
        <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
          <TabBox firstTab={<InnerTab navigation={this.props.navigation} />} secondTab={<ToevoegenText navigation={this.props.navigation} />} />
        </LinearGradient>
      </>
    );
  }
}
export default Toevoegen;