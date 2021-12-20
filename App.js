import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, RefreshControl, SafeAreaView, ScrollView, Button} from 'react-native';

export default function App() {
  
const Image = () => {
    return (
      <View style={styles.tinyLogo}>
        <Image source={{uri: 'https://www.upload.ee/image/13730524/logo_trans_shadow.png'}} style={{ width: 600, height: 100 }}/>
      </View>
    );
  };

const [outputText, setOutputText] = useState ('ye, gimme a sign!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button color="#284061" title="share ye wisdom!" onPress={() => setOutputText('gimme another one!')} />
    </View>
  );
};

const Sisu = () => {;
  const [titleText, setTitleText] = useState("Kanye");
  const bodyText = "Siia random tsitaat";
return (
  <Text style={styles.sisu}>
      {titleText}
  </Text>,
  <Text>{bodyText}
  </Text>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ("#090807", "#111F9A", "#b25186", "#f0e6d3", "#b9b353", "#dfa417", "#411218", "#b72124", "#f58b57", "#7acec2", "#cb2436", "#284061", "#ae6e1f", "#a89c9a", "#de6656", "#e6dfcc", "#412517", "#e5dab7", "#cb2436", "#853082", "#221e1f","#40b16d", "#2c4454", "#cd0f29"),
    alignItems: 'center',
    padding: 100,
  },
  sisu: {
    flex: 1,
    backgroundColor: ("#777777"),
  },
  tinyLogo: {
    backgroundColor: ("#FFFFFF"),
  },
});




/* kood siit: https://github.com/AnanyDeep/Random_Background_Color_React_Native/blob/main/App.js



  const [color, setColor] = useState("#Fe4");

  const BackgroundColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  const ChangeBackgroundColor = () => {
    setColor(BackgroundColor());
  };

//  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity onPress={() => ChangeBackgroundColor()}>
        <Text style={styles.txt}>TAP ME</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
*/



// alates siit minu kood, mida proovisin siin https://reactnative.dev/docs/image


// see logo peaks töötama nüüd logona, vaja klikitavaks ka teha

//-----------------------------------------------------------------------------//

// import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
// instead of just one text this should display randomized lyric portion
// const App = () => (
//   <View style={container}>
//     <Text style={text}>random kanye lyric 1</Text>
//   </View>
// );

// const page = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 30,
//     color: '#fff'
//   },
// });

// const lists = StyleSheet.create({
//   listContainer: {
//     flex: 1,
//     backgroundColor: ("#090808", "#111F9A", "#b25186", "#f0e6d3", "#b9b353", "#dfa417", "#411218", "#b72124", "#f58b57", "#7acec2", "#cb2436", "#284061", "#ae6e1f", "#a89c9a", "#de6656", "#e6dfcc", "#412517", "#e5dab7", "#cb2436", "#853082", "#221e1f","#40b16d", "#2c4454", "#cd0f29") ,
//   },
//   listItem: {
//     fontStyle: 'italic',
//     fontWeight: 'bold'
//   },
// });

// const container = StyleSheet.compose(page.container, lists.listContainer);
// const text = StyleSheet.compose(page.text, lists.listItem);

// export default App;


//-----------------------------------------------------------------------------//


// siit https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native

//import React from 'react';
// import {Image, View, StyleSheet} from 'react-native';
/* import lyrics from 'C:\Users\kolhoos\Desktop\GitHub\ye\images';
import { Button } from 'react-native-web';



function Card() {
  const randomImage =
    lyrics[Math.floor(Math.random() * lyrics.length)];
  console.log(randomImage);

  return (
    <View style={styles.container}>
      <Image source={randomImage} style={{height: 200, width: 250}} />
    </View>
  );
}

// const styles = StyleSheet.create
({
  container: {
    width: '50%',
    height: '35%',
    backgroundColor: 'pink',
  },
});



// ei saanud üldse proovida kas töötab 

// refreshimise asi siit https://reactnative.dev/docs/refreshcontrol

// import React from 'react';
// import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

//const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

//  return 
(
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
 );


//const styles = StyleSheet.create
({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default App;

//----------------------------
*/
