import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import furnitures from '../../consts/furnitures';
const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {

    const categoryItems = [
      {name:'Chair', iconName:'seat-outline'},
      {name:'Table',iconName:'table-furniture'},
      {name:'Cupboard',iconName:'cupboard-outline'},
      {name:'Bed',iconName:'bed-queen-outline'},
    ]

    const ListCategories = () => {

      const [selectedCategoryIndex,setSelectedCategoryIndex] = useState(0);

      return (
        
        <View style={style.categoriesContainer}>
          {categoryItems.map((item,index) => (
            <TouchableOpacity 
              key={index} 
              activeOpacity={0.8}
              onPress={() => setSelectedCategoryIndex(index)}
            >
              <View  
                style={[style.categoryItemBtn, {
                  backgroundColor: selectedCategoryIndex == index ? COLORS.primary : COLORS.light
                }]}
              >
                <Icon 
                  name={item.iconName} size={20} 
                  color={selectedCategoryIndex == index ? COLORS.white : COLORS.primary}  
                />
                <Text style={[style.categoryText,{
                  color:selectedCategoryIndex == index ? COLORS.white : COLORS.primary
                }]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )
    }

    const Card = ({furniture}) => {
      return (
        <Pressable onPress={() => navigation.navigate('DetailsScreen', furniture)}>
          <View style={style.card}>
            <View style={style.iconContainer}>
              <Icon name="heart" color={furniture.liked ? COLORS.red : COLORS.primary} />
            </View>
            <Image 
              source={furniture.image}
              style={{height:120, width:'100%', borderRadius:10}}
            />
            <Text style={style.cardName}>{furniture.name}</Text>
            <View
              style={{
                marginTop:5,
                flexDirection:'row',
                justifyContent:'space-between'
              }}
            >
              <Text style={style.price}>{furniture.price}</Text>
              <View 
                style={{
                  flexDirection:'row',
                  marginLeft:10
                }}
              >
                <Icon name="star" color={COLORS.yellow} size={18} />
                <Text style={style.rating}>4.3</Text>
              </View>
            </View>
          </View>
        </Pressable>
      )
    }

    const PopularItemCard = ({furniture}) => {
      return (
        <View style={style.popularItemCard}>
          <View style={style.iconContainer}>
            <Icon
              name="heart"
              color={furniture.liked ? COLORS.red : COLORS.primary}
            />
          </View>
          <Image
            source={furniture.image}
            style={{
              width: 100,
              height: '100%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginRight: 10,
            }}
          />
          <View style={{paddingVertical: 15, justifyContent: 'center'}}>
            <Text style={style.cardName}>{furniture.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={style.price}>{furniture.price}</Text>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Icon name="star" color={COLORS.yellow} size={18} />
                <Text style={style.rating}>4.3</Text>
              </View>
            </View>
          </View>
        </View>
      )
    }

    return (
      <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
        <View style={style.header}>
          <Icon name="sort-variant" size={28} color={COLORS.primary} />
          <Icon name="cart-outline" size={28} color={COLORS.primary} />
        </View>
        <ScrollView showVerticalScrollIndicator={false}>
          <Text style={style.headerTitle} >Best Furniture For Your Home</Text>
          <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              padding:20
            }}
          >
            <View style={style.searchInputContainer}>
              <Icon name="magnify" color={COLORS.grey} size={25} />
              <TextInput placeholder="Search" />
            </View>
            <View style={style.sortBtn}>
                <Icon name="tune" color={COLORS.white} size={25} />
            </View>
          </View>
          <Text style={style.title}>Categories</Text>
          <ListCategories />
          <Text style={style.title}>Top Furniture</Text>
          <FlatList 
            contentContainerStyle={{paddingLeft:20}}
            horizontal
            showHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            data={furnitures}
            renderItem={({item}) => <Card furniture={item} />}
          />
          <Text style={style.title}>Popular</Text>
          <FlatList 
            contentContainerStyle={{paddingLeft:20}}
            horizontal
            showHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            data={furnitures}
            renderItem={({item}) => <PopularItemCard furniture={item} />}
          />
        </ScrollView>
      </SafeAreaView>
    )
};

const style = StyleSheet.create({
  popularItemCard:{
    height:90,
    width:width - 100,
    backgroundColor:COLORS.white,
    elevation:10,
    marginVertical:20,
    marginRight:20,
    borderRadius:10,
    flexDirection:'row'
  },
  iconContainer:{
    height:25,
    width:25,
    backgroundColor:COLORS.white,
    position:'absolute',
    elevation:2,
    right:15,
    top:15,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
  },
  rating:{
    fontWeight:'bold',
    fontSize:12,
    color:COLORS.primary,
  },
  price:{
    fontWeight:'bold',
    color:COLORS.primary,
    fontSize:12,
  },  
  cardName:{
    marginTop:10,
    fontSize:12,
    color:COLORS.primary,
    fontWeight:'bold',
  },
  card:{
    height:190,
    backgroundColor:COLORS.white,
    elevation:10,
    width:width/2.5,
    padding:10,
    marginVertical:20,
    marginRight:20,
  },
  categoryText:{
    fontSize:13,
    color:COLORS.primary,
    fontWeight:'bold',
    marginLeft:5,
  },
  categoryItemBtn:{
    flexDirection:'row',
    backgroundColor:COLORS.white,
    padding:10,
    borderRadius:7,
    alignItems:'center'
  },
  categoriesContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20
  },
  header:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  headerTitle:{
    fontSize:23,
    fontWeight:'bold',
    width:'55%',
    lineHeight:30,
    paddingHorizontal:30
  },
  searchInputContainer:{
    height:50,
    backgroundColor:COLORS.light,
    flex:1,
    borderRadius:12,
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
  },
  sortBtn:{
    backgroundColor:COLORS.primary,
    height:50,
    width:50,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:20,
  }
});
export default HomeScreen;
