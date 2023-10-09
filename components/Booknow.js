import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  PixelRatio
} from "react-native";
import { Card } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";



const AppointmentBookingPage = () => {
  const [buttonColors, setButtonColors] = useState({
    textColor: "#CACACA",
    borderColor: "#CACACA",
    fontWeight: "normal",
    backgroundColor1: "white",
    backgroundColor2: "white",
    backgroundColor3: "white",
    backgroundColor4: "white",
    backgroundColor5: "white",
    backgroundColor6: "white",
    backgroundColor7: "white",
    backgroundColor8: "white"

  });

  const handleTimeSlotClick = () => {
    // Toggle text color and border color based on the current colors
    if (buttonColors.textColor === "#CACACA") {
      setButtonColors({
        textColor: "#1A936F",
        fontWeight: "700",
        backgroundColor1: "#CC9B66",
        backgroundColor2: "#CC9B66",
        backgroundColor3: "#CC9B66",
        backgroundColor4: "#CC9B66",
        backgroundColor5: "#CC9B66",
        backgroundColor6: "#CC9B66",
        backgroundColor7: "#CC9B66",
        backgroundColor8: "#CC9B66",


        borderColor: "#1A936F",
      });
    } else {
      setButtonColors({
        textColor: "#CACACA",
        borderColor: "#CACACA",
        fontWeight: "normal",
        backgroundColor1: "white",
        backgroundColor2: "white",
        backgroundColor3: "white",
        backgroundColor4: "white",
        backgroundColor5: "white",
        backgroundColor6: "white",
        backgroundColor7: "white",
        backgroundColor8: "white",


      });
    }
  };


  return (
    <View>
      <View style={styles.rectangleGroup}>
        <Image
          style={[styles.uppersliderimage, styles.text23Position]}
          resizeMode="cover"
          source={require("../assets/images/imgslider.jpg")}
        />
        <Text style={[styles.text23]}>23</Text>
        <View style={[styles.gouriKarnurkarParent, styles.groupChild7Position]}>
          <Text style={[styles.gouriKarnurkar1, styles.textTypo]}>
            Gouri Karnurkar
          </Text>
          <View style={[styles.groupContainer, styles.gynacologist1Layout]}>
            <View style={styles.dentistWrapper}>
              <Text style={[styles.dentist, styles.bookTypo]}>Dentist</Text>
            </View>
            <Text style={[styles.km7, styles.bookTypo]}>~3.3km</Text>
            <View style={[styles.parent98, styles.parentLayout]}>
              <Text style={[styles.text98, styles.textTypo]}>98%</Text>
              <Text style={[styles.text350, styles.text350Position]}> ₹ 350</Text>

              <Image
                style={[styles.iconsThumbsUp, styles.parentLayout]}
                resizeMode="cover"
                source={require("../assets/images/thumbsup.png")}
              />
            </View>
        
          </View>

          </View>
          </View>
          
    <View  style={styles.container}>
     <View style={styles.card}>
     <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/images/imgslider.jpg")}
      />
       </View>
      <Text style={[styles.bookAppointment, styles.ophtamologistTypo]}>{`Book
Appointment`}</Text>

    
      <View style={styles.todayParent}>
        <Text style={[styles.today, styles.textTypo4]}>Today</Text>
    
        <Text style={[styles.text11, styles.textTypo3, {backgroundColor: buttonColors.backgroundColor1}]}    onPress={handleTimeSlotClick} >06 : 30</Text>
        <Text style={[styles.text12, styles.textTypo2,{}]} onPress={handleTimeSlotClick}>05 : 30</Text>
        <Text style={[styles.text13, styles.textPosition1,{}]} onPress={handleTimeSlotClick}>04 : 45</Text>
        <Text style={[styles.text14, styles.textPosition1,{}]} onPress={handleTimeSlotClick}>01 : 30</Text>
        <Text style={[styles.text15, styles.textPosition,{}]} onPress={handleTimeSlotClick}>09 : 30</Text>
        <Text style={[styles.text16, styles.textPosition,{}]} onPress={handleTimeSlotClick}>02 : 40</Text>
        <Text style={[styles.text17, styles.textPosition,{}]} onPress={handleTimeSlotClick}>07 : 30</Text>
        <Text style={[styles.text18, styles.froTypo,{}]} onPress={handleTimeSlotClick}>08 : 30</Text>
        <Text style={[styles.wed, styles.textTypo4]}>22, Wed</Text>
        <Text style={[styles.thur, styles.textTypo4]}>23,Thur</Text>
        <Text style={[styles.fro, styles.froTypo]}>24,Fro</Text>
      </View>
            
         

            <View style={styles.groupParent}>

        <View style={[styles.swapnilKatareWrapper, styles.wrapperPosition]}>
          <Text style={[styles.swapnilKatare, styles.nameposition]}>
            Swapnil Katare
          </Text>
        </View>
        <View style={styles.m24Wrapper}>
        <Text style={styles.nameposition}>
            <Text style={[styles.mtext]}>M/</Text>
            <Text style={styles.m24}>24</Text> 
           
          </Text>
          <View>
            <Text style={[styles.text20, styles.textTypo1]}>8735468097</Text>
            </View>
            
        </View>
        
        </View>
        
      <TouchableOpacity
        style={[
          styles.bookNowButton,
          {  
          
          borderWidth: 2, 
          borderRadius: 10, 
          top: 350,
          borderColor: buttonColors.borderColor, // Apply the dynamic border color

          // Set the background color dynamically

         },
        ]}
      >
        <Text
          style={{

            height: 35,
            width: 242,
            color: buttonColors.textColor, // Apply the dynamic text color
            borderRadius: 2,
            fontSize: 22,
            textAlign: "center",
            fontWeight: buttonColors.fontWeight

          }}
          onPress={handleTimeSlotClick} // Call the function when the time slot is clicked

        >
          Confirm Appointment
        </Text>
        
      </TouchableOpacity>
      
    </View>
   
      <Text style={[styles.newUser, styles.userTypo]}>New user</Text>
      <Text style={[styles.changeUser, styles.userTypo]}>Change user</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flexGrow: 1,
    height: 457,
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    
  },
   // timeslot start
   todayParent: {
    width: 394,
    height: 135,
    left: 22,
    position: "absolute",
  },
  today: {
    width: 56,
    height: 22,
    fontWeight: "600",
    fontSize: 17,
    left: 22,
    top: 205,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomEndRadius: 9,
  
  },
  textTypo4: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
    position: "absolute",
  },
  text11: {

    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    left: 22,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    top: 248
  },
  text12: {
    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    left: 128,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 248,

  },
  text13: {
    borderWidth: 2,
    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    borderColor: "#CC9B66",
    left: 224,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 248,

    
  },
  text14: {
    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    left: 332,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 248,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text15: {
    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    left: 22,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 309,

    
  },
  text16: {
    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    left: 128,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 309,

  },
  text17: {
    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    left: 225,
    fontSize: 17,
    color: "black",
    textAlign: "left",
    position: "absolute",
    top: 309,

  },
  text18: {
    borderWidth: 2,
    borderColor: "#CC9B66",

    borderRadius: 10,
    height: 42,
    width: 79,
    paddingLeft: 12,
    paddingTop: 9,
    top: 309,
    fontSize: 17,
    left: 332,

    color: "black",
    textAlign: "left",
    position: "absolute"  },
  wed: {
    left: 132,
    width: 62,
    height: 22,
    top: 205,
  },
  thur: {
    left: 242,
    height: 22,
    top: 205,
    width: 59,
  },
  fro: {
    fontSize: 17,
    left: 352,
    width: 64,
    height: 22,
    top: 205,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    top: 41,
    left: 19,
    marginVertical: 10,
    width: 340, 
    backgroundColor: "white",
    
    // Set the width of the card as needed
  },
  cardContent: {
    top: 41,
    
    left: 0,
    alignItems: "center",
  },
  circularImage: {
    height: 59,
    width: 59,
      borderRadius: 20,
    }, 

  bookNowButton: {
    marginTop: 23,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,

  },
  bookAppointment: {
    top: 19,
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    left: 19,
  },
  ophtamologistTypo: {
    color: "black",
    textAlign: "left",
    position: "absolute",
  },
  rectangleIconPosition: {
    right: 305,
    position: "absolute",
  },
  rectangleIcon: {
    top: 60,
    height: 59,
    width: 59,
    borderRadius: 20,
  },
  swapnilKatare: {
    fontWeight: "500",
    fontFamily: "Roboto",
   
  },
  nameposition:{
    color: "#414141",
    lineHeight: 19,
    letterSpacing: 0.3,
    textAlign: "left",
    fontSize: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  swapnilKatareWrapper: {
    top: 109,
    marginRight: 12,
  },
  wrapperPosition: {
    height: 19,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    
    left: 90,
    height: 61,
    position: "absolute",
  },

  m24Wrapper: {
    top: 130,
  },

  mtext:{
    color: "#414141",
    fontWeight: "500"
  },
  m24:{
    color:"#414141",
    fontWeight:"300"
  },
  text20:{
    top: 20,
    fontSize: 14,
    letterSpacing: 0.2,
    color:"#414141"
  },
  changeUser: {
    top: 0,
    left: 280,
    color: "#1a936f",
    width: 75,
  },
  // upperslider 
  gouriKarnurkar1: {
    fontSize: 16,
    fontWeight: "500",
    top: 0,
    color:"#FFF",
    fontFamily:"Roboto"
  },
  dentist:{
    color:"#D5D5D5",
    fontSize:14,
    fontWeight: "700",
    fontFamily:"Roboto"
  },
  km7:{
    color:"#0074DF",
    fontSize:14,
    fontWeight: "500",
    fontFamily:"Roboto"
  },
  parent98: {
    left: 58,
    width: 41,
    bottom: 17,

  },
  text98: {
    fontSize: 12,
    width: 26,
    fontWeight: "500",

  },
  textTypo: {
    color: "white",
    textAlign: "left",
    fontFamily: "Roboto",
    left: 0,
  },
  iconsThumbsUp: {
    left: 24,
    bottom: 17,
    height: 15,
    width: 15,
    marginBottom: 60,
  },
  gouriKarnurkarParent: {
    left: 88,
    width: 265,
  },
  groupChild7Position: {
    top: 72,
  },
  uppersliderimage: {
    top: 156,

    height: 59,
    width: 59,
    borderRadius: 10,
    left: 16,
  },
  changeUser: {
    top: 380,

    left: 280,
    color: "#1a936f",
    borderBottomWidth: 1, borderBottomColor: '#1a936f' ,

  },
  newUser: {
    borderBottomWidth: 1, borderBottomColor: '#0074DF' ,
    top: 355,

    left: 300,
    color: "#0074DF",
  },
  userTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    lineHeight: 18,
    fontSize: 13,
    letterSpacing: 0.3,
    fontWeight: "500",
    position: "absolute",
  },
  text23: {
    width: 19,
    fontWeight: "700",
    fontSize: 15,
    color: "white",
    top: 75,
  },
  rectangleGroup: {
    left: 9,
    width: 353,
  },

  text350:{
    left: 160,
    position: "absolute",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#00851D",
    color: "#2cd311",
    fontWeight: "700",
    textAlign: "left",
    fontSize: 14  ,
    bottom:61,
    paddingTop: 3,
    marginTop: -15,
  },
 

});


export default AppointmentBookingPage;
