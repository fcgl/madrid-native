import React, {Component} from 'react';
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    View,
    SafeAreaView, TextInput, Platform, StatusBar, Image, Dimensions, Animated, TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Category from './componets/Explore/Category'
import AddItem from './componets/Todo/AddItem';
import ShoppingList from "./componets/Todo/ShoppingList";
import ShoppingListView from "./componets/Explore/ShoppingListView";


const {height, width} = Dimensions.get('window');
class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80;
        this.endHeaderHeight = 50;
        this.scrollY = new Animated.Value(0);
        if (Platform.OS === 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
            this.endHeaderHeight = 70 + StatusBar.currentHeight;
        }
        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0,50],
            outputRange:[this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        });

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange:[this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0,1],
            extrapolate: 'clamp'
        });

        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange:[this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-7,10],
            extrapolate: 'clamp'
        })
    }


    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    {/*<View*/}
                    {/*    // scrollEventThrottle={16}*/}
                    {/*    // onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}*/}
                    {/*>*/}
                        <View style={{flexDirection: 'row', paddingBottom: 10,
                            backgroundColor: '#4395BF',
                            marginTop: Platform.OS === 'android' ? 30 : null
                        }}
                        >
                            <View style={{paddingHorizontal: 15}}>
                            <Image source={require('../assets/home.jpg')}
                                   style={{ height: 50, width: 50,
                                       resizeMode: 'cover', borderRadius: 30}}/>
                            </View>

                            <View style={{paddingTop: 7}}>
                                <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Hey John,</Text>
                                <Text style={{color: 'white', fontSize: 10, paddingTop: 2}}>Last week you saved 17,59 $</Text>
                            </View>

                            <View style={{flex: 2}}>
                                {/* EMPTY SPACE*/}
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                            <MaterialCommunityIcons name="bell-outline" size={23} style={{color: 'white', paddingTop: 7, margin: 0, height: 30, width: 19}}/>
                            <View style={{backgroundColor: '#F50000', borderRadius: 10, width: 16, height: 16}}>
                                <Text style={{alignSelf: 'center', fontSize: 12, color: 'white', fontWeight: '800'}}>2</Text>
                            </View>
                            </View>
                        </View>

                        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
                            <View style={{marginTop: 25, marginBottom: 25}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}

                                >
                                    <Category
                                        imageUri={require('../assets/StirFry.jpg')}
                                        name="Home"
                                    />
                                    <Category
                                        imageUri={require('../assets/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category
                                        imageUri={require('../assets/restaurant.jpg')}
                                        name="Restaurant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{paddingHorizontal: 10, borderRadius: 30}}>
                                <Text style={{marginBottom: 10, fontSize:12, fontWeight: '700', color: '#575757'}}>
                                    THIS MONTH'S PRIZE
                                 </Text>
                                <ImageBackground source={require('../assets/gradient.png')} style={{width: '100%', height: 125, borderRadius: 30}}>
                                    <View style={{flexDirection: 'row', flex: 1, paddingHorizontal: 10}}>
                                        <View style={{flex: 1, paddingTop: 40}}>
                                            <Image source={require('../assets/grocery.png')} style={{ height: 50, width: 50,
                                                resizeMode: 'cover'}}/>
                                        </View>
                                        <View style={{flex: 3}}>
                                            <Text style={{color: 'white', fontWeight: '600', fontSize: 16, paddingTop: 15}}>Free Groceries for 1 Month</Text>
                                            <Text style={{marginTop: 5, color: 'white', fontSize: 11, width: '95%'}}>You're close! You only need 20 points to earn
                                                 a raffle ticket to enter!</Text>
                                            <TouchableOpacity>
                                                <View style={styles.button}>
                                                    <Text style={styles.buttonText}>
                                                        Track Progress
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    </ImageBackground>
                            </View>
                        </View>
                    <ShoppingListView shoppingListId={"active"}/>

                </View>
            </SafeAreaView>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    button :{
        height: 28,
        width: 110,
        backgroundColor: '#76ADAB',
        // opacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 10

    },
    buttonText: {
        fontSize: 11,
        color: 'white',
        opacity: 1,
        fontWeight: '500'
    }
});


