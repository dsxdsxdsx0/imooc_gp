/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'tab_popular'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_popular'}
                        title="最热"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'tab_popular'})}>

                        <View style={styles.page}></View>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_trending'}
                        title="趋势"
                        selectedTitleStyle={{color: 'blue'}}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tab_trending'})}>

                        <View style={styles.page1}></View>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_favorite'}
                        title="收藏"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('./res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_favorite.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'tab_favorite'})}>
                        <View style={styles.page}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_my'}
                        title="我的"
                        selectedTitleStyle={{color: 'blue'}}
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tab_my'})}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    page: {
        flex: 1,
        backgroundColor: 'red'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    },
    image: {
        width: 22,
        height: 22
    }
});
