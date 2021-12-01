import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
const DetailsScreen = ({navigation, route}) => {
  const furniture = route.params;

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={style.header}>
        <View style={style.headerBtn}>
          <Icon 
            name="chevron-left"
            size={25}
            onPress={navigation.goBack}
          />
        </View>
        <Text style={{fontWeight:'bold', fontSize:18}}>Details</Text>
        <View style={style.headerBtn}>
          <Icon 
            name="dots-vertical"
            size={25}
          />
        </View>
      </View> 
      <ScrollView>
        <ImageBackground 
          style={style.backgroundImage}
          source={furniture.image}
        >
          <View style={style.details}>
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom:5,
              }}
            >
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text 
                style={{
                  fontSize:10,
                  color:COLORS.white,
                  fontWeight:'bold'
                }}
              >
                4.3
              </Text>
            </View>
            <Text 
              style={{
                fontSize:9,
                color:COLORS.white,
                fontWeight:'bold'
              }}
            >
              250 Reviews
            </Text>
          </View>
        </ImageBackground>
        <View style={style.detailsContainer}>
            <Text
              style={{
                fontSize:20,
                fontWeight:'bold',
                color:COLORS.primary
              }}
            >
              {furniture.name}
            </Text>
            <Text 
              style={{
                marginVertical:20,
                fontSize:16,
                fontWeight:'bold',
                color:COLORS.primary
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontSize:12,
                color:COLORS.dark,
                lineHeight:20,
              }}
            >
              Designed modern chair with luxury curves in an organic yet
              structured design that holds the sitting body and provides a feeling
              of relaxation while offering excellent back support.
            </Text>
            <View
              style={{
                marginVertical:20,
                flexDirection:'row',
                justifyContent:'space-between'
              }}
            >
              <Text
                style={{
                  fontSize:22,
                  color:COLORS.yellow,
                  fontWeight:'bold'
                }}
              >
                {furniture.price}
              </Text>
              <View style={style.quantityContainer}>
                <View style={style.quantityBtn}>
                  <Icon name="plus" size={20} />
                </View>
                <Text style={{color:COLORS.white,fontWeight:'bold'}}>
                  1
                </Text>
                <View style={style.quantityBtn}>
                  <Icon name="minus" size={20} />
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View
                  style={{
                    height:50,
                    width:50,
                    elevation:7,
                    marginRight:30,
                    backgroundColor:COLORS.white,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:25
                  }}
                >
                  <Icon name="heart-outline" color={COLORS.primary} size={28} />
                </View>
                <View style={style.addToCartBtn}>
                  <Text style={{color:COLORS.white}}>Add To Cart</Text>
                </View>
            </View>
        </View>
      </ScrollView>  
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  addToCartBtn:{
    height:50,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.primary,
    borderRadius:10,
    paddingHorizontal:20,
    marginVertical:20,
  },
  quantityBtn:{
    height:25,
    width:25,
    backgroundColor:COLORS.white,
    borderRadius:7,
    marginHorizontal:5,
    justifyContent:'center',
    alignItems:'center',
  },
  quantityContainer:{
    height:35,
    width:100,
    backgroundColor:COLORS.primary,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  detailsContainer:{
    flex:1,
    paddingHorizontal:20,
    marginTop:40
  },
  details:{
    height:60,
    width:70,
    backgroundColor:COLORS.primary,
    position:'absolute',
    bottom:0,
    right:0,
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:15
  },
  backgroundImage:{
    overflow:'hidden',
    borderRadius:15,
    marginHorizontal:20,
    height:300,
  },
  header:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
  },
  headerBtn:{
    height:50,
    width:50,
    backgroundColor:COLORS.light,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default DetailsScreen;
