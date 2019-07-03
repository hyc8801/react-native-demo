import React, {Component} from 'react';

import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {View, Text} from 'react-native';

LocaleConfig.locales['fr'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  dayNames: ['星期日', '星期一','星期二','星期三','星期四','星期五','星期六'],
  dayNamesShort: ['日', '一','二','三','四','五','六'],
  today: 'Aujourd\'hui'
};

LocaleConfig.defaultLocale = 'fr';

export default class HorizontalCalendarList extends Component {
  constructor(props) {
    super(props);
  }
  onMonthChange(date) {
    console.log(date)
  }
  onDayPress(date) {
    console.log('日期', date)

  }
  onDayLongPress(date) {
    console.log('长按日期', date)
  }
  onVisibleMonthsChange(date) {
    console.log('滚动', date)
  }
  onPressArrowLeft(date) {
    console.log('←', date)
  }
  render() {
    return (
      <View>
        <CalendarList
          // current={'2012-05-16'} 当前日期，默认当天
          hideExtraDays={false} // 是否隐藏非本月，模式true
          pastScrollRange={24}
          futureScrollRange={24}
          horizontal // 水平滚动
          pagingEnabled // 启用分页
          // hideDayNames // 是否隐藏星期名
          // showWeekNumbers
          style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
          markingType={'multi-period'}
          onMonthChange={this.onMonthChange}
          onDayPress={this.onDayPress}
          onDayLongPress={this.onDayLongPress}
          onVisibleMonthsChange ={this.onVisibleMonthsChange }
          onPressArrowLeft={this.onPressArrowLeft}
          dayComponent={({date, marking, state}) => {
            console.log(date, marking, state);
            return (
              <View><Text>{date.day}</Text></View>
            )
          }}
          markedDates={{
            '2019-07-03': {
              periods: [
                { startingDay: true, endingDay: false, color: '#5f9ea0' },
                { startingDay: true, endingDay: false, color: '#ffa500' },
              ]
            },
            '2019-07-04': {
              periods: [
                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                { startingDay: false, endingDay: true, color: '#ffa500' },
                { startingDay: true, endingDay: false, color: '#f0e68c' },
              ]
            },
            '2019-07-05': {
              periods: [
                { startingDay: true, endingDay: true, color: '#ffa500' },
                { color: 'transparent' },
                { startingDay: false, endingDay: false, color: '#f0e68c' },
              ]
            },
          }}
        />
      </View>
    );
  }
}