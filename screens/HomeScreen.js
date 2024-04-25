import { SafeAreaView, StyleSheet, Text, View, Image} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <View style={styles.homeWorkout}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        {/* rendering workouts, calories and minutes */}

        {/* this view will have 3 different views */}

        <View style={styles.parentView}>
          <View>
            <Text style={styles.textOne}>0</Text>
            <Text style={styles.textTwo}>WORKOUTS</Text>
          </View>

          <View>
            <Text style={styles.textThree}>0</Text>
            <Text style={styles.textFour}>KCAL</Text>
          </View>
          <View>
            <Text style={styles.textFive}>0</Text>
            <Text style={styles.textSix}>MINS</Text>
          </View>
        </View>

        <View style={{justifyContent:"center", alignItems:"center"}}>
        <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            

            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWorkout: {
    backgroundColor: "#CD853F",
    padding: 10,
    height: 200,
    width: "100%",
  },

  parentView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20
  },

  textOne:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },

  textTwo:{
    color:"#D0D0D0",
    marginTop:6,
    fontSize:17

  },

  textThree:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },

  textFour:{
    color:"#D0D0D0",
    marginTop:6,
    fontSize:17

  },
  textFive:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },
  textSix:{
    color:"#D0D0D0",
    marginTop:6,
    fontSize:17
  }

});
