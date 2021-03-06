'use strict';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types'
import SegmentedView from '../segmentedView/index'
import SegmentedControlTab from '../common/SegmentedControlTab';
import ChatGroupPage from './chatGroup/index';
import GiftSE from './GiftSE';

class Content extends React.PureComponent {

    static propTypes = {
        messages: PropTypes.array,
        giftsData: PropTypes.array,
    }

    static defaultProps = {

    }

    render() {
        const { messages, giftsData, giftData } = this.props
        return (
            <View style={styles.container}>
                <SegmentedView indicatorLineColor="#01B9A0">
                    <View title={'群英会'} style={styles.container} activeTitleStyle={styles.activeTitleStyle} titleStyle={styles.titleStyle} >
                        <ChatGroupPage messages={messages} />
                    </View>
                    <View title={'英雄榜'} style={styles.container} activeTitleStyle={styles.activeTitleStyle} titleStyle={styles.titleStyle}>
                        <SegmentedControlTab
                            tabsContainerStyle={styles.tabContainer}
                            tabStyle={styles.tab}
                            activeTabStyle={styles.activeTabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            values={['贡献日榜', '贡献月榜', '贡献年榜']}
                        />
                        <Text>内容</Text>
                    </View>
                    <View title={'其他直播'} style={styles.container} activeTitleStyle={styles.activeTitleStyle} titleStyle={styles.titleStyle}>

                    </View>
                </SegmentedView>
                <GiftSE giftsData={giftsData} giftData={giftData} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleStyle: {
        fontSize: FontSize(13)
    },
    activeTitleStyle: {
        color: '#01B9A0',
        fontSize: FontSize(13)
    },
    tabContainer: {
        marginTop: 30,
        marginHorizontal: 50,
        borderWidth: 0,
        borderRadius: 6,
    },
    tab: {
        borderLeftWidth: 0,
    },
    activeTabStyle: {
        backgroundColor: '#01B9A0',
        borderRadius: 6,
        borderLeftWidth: 0,
    },
    tabTextStyle: {
        color: '#01B9A0',
        fontSize: FontSize(13),
    }
});

export default Content