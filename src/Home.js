import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { product } from './Database/product';
import { categoryGroup } from './Database/CategoryGroup';

// Mock data for categories and products
const fashionProducts = product.filter(
  (product) => product.category === 'Fashion'
);

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../assets/Shopsphere.png')}
            style={styles.logo}
          />
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => alert('Location pressed')}>
              <FontAwesome5
                name='location-arrow'
                size={24}
                color='black'
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Bell pressed')}>
              <FontAwesome5
                name='bell'
                size={24}
                color='black'
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <FontAwesome5
            name='search'
            size={20}
            color='black'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder='Search on shopshere'
          />
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categoryGroup}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.name)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.sectionTitle}>Featured Products</Text>
        <FlatList
          data={product.slice(0, 13)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              onPress={() =>
                navigation.navigate('ProductInfo', { product: item })
              }>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={{ color: '#ff5454' }}>GH&#8373; {item.price}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Fashion */}
        <Text style={styles.sectionTitle}>Fashion</Text>
        <FlatList
          data={fashionProducts}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              onPress={() =>
                navigation.navigate('ProductInfo', { product: item })
              }>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={{ color: '#ff5454' }}>GH&#8373; {item.price}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Best Selling Products */}
        <Text style={styles.sectionTitle}>Best Selling Products</Text>
        <FlatList
          data={product.slice(9, 17)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              onPress={() =>
                navigation.navigate('ProductInfo', { product: item })
              }>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={{ color: '#ff5454' }}>GH&#8373; {item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: -20,
  },
  logo: {
    width: '60%',
    height: 60,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 35,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 30,
    marginBottom: 2,
    marginHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  card: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  productCard: {
    marginRight: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  footerButtonText: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Home;
