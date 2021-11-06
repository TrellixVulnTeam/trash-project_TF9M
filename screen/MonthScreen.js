import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function MonthScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image source= {require('../assets/suggest/header-bg.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                    style={styles.profileiconStyle}
                    source={require('../assets/icon-profile.png')}
                    />
            </TouchableOpacity>
        <Text style={styles.headerText}>月曆</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.calendar}>
        <Calendar
          style={{ width: 365, height: 330, borderRadius: 20,}}
          markingType={'custom'}
          markedDates={{
            'selected day': {
              customStyles: {
                container: {
                  backgroundColor: '#63CFA8'
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold'
                }
              }
            },
          }}
          // Initially visible month. Default = Date()
          curren={new Date() .toDateString()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-06-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={new Date() .toDateString()}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy年   M月'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
        />
        </View>
        <View>
          <View style={styles.totalSection}>
            <Text style={styles.totalText}>當天總數量 : 6</Text>
            <Text style={styles.totalText}>當天總額 : $300</Text>
          </View>
          <View style={styles.todayDetail}>
            <View style={styles.detailTitle}>
              <Text style={styles.detailText}>類別</Text>
              <Text style={styles.detailText}>垃圾量</Text>
              <Text style={styles.detailText}>金額</Text>
            </View>
            <View>
              <View style={styles.mealDetail}>
                <Text style={styles.mealDetailText}>早餐</Text>
                <Text style={styles.mealDetailText}>2</Text>
                <Text style={styles.mealDetailText}>$30</Text>
              </View>
              <View style={styles.dashLine} />
              <View style={styles.mealDetail}>
                <Text style={styles.mealDetailText}>午餐</Text>
                <Text style={styles.mealDetailText}>3</Text>
                <Text style={styles.mealDetailText}>$120</Text>
              </View>
              <View style={styles.dashLine} />
              <View style={styles.mealDetail}>
                <Text style={styles.mealDetailText}>晚餐</Text>
                <Text style={styles.mealDetailText}>1</Text>
                <Text style={styles.mealDetailText}>$150</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 275,
  },
  headerText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: -180,
    marginLeft: 50,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:330,
    marginTop:-230
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  calendar: {
    marginTop: -100, 
    borderRadius:20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
  },
  totalSection: {
    width: 340,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 10,
    marginBottom: -10,
    justifyContent: 'space-between'
  },
  totalText: {
    fontSize: 20,
    color: '#909090',
    fontWeight:'bold'
  },
  todayDetail: {
    backgroundColor: '#fff',
    width: 365,
    height: 360,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#D9D9D9',
    marginTop: 70,
    bottom:30,
  },
  detailTitle: {
    backgroundColor: '#63CFA8',
    width: 365,
    height: 62,
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: -10,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'bold'
  },
  mealDetail: {
    width: 320,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealDetailText: {
    fontSize: 20,
    color: '#909090',
    fontWeight:'bold'
  },
  dashLine: {
    marginTop: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#35A67D',
  },
});
