import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Text>🔍</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.specialOffer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/c2/00/87/c200877d51efe688d6abff22dc66330a.jpg' }}
          style={styles.specialOfferImage}
        />
        <Text style={styles.specialOfferText}>Special Offer</Text>
      </View>
      <View style={styles.browseSection}>
        <Text style={styles.browseTitle}>Browse Categories</Text>
        <View style={styles.categories}>
          <Text style={styles.category}>Shoes</Text>
          <Text style={styles.category}>Headset</Text>
          <Text style={styles.category}>Lifestyle</Text>
          <Text style={styles.category}>Accessories</Text>
        </View>
      </View>
      <View style={styles.flashSale}>
        <Text style={styles.flashSaleTitle}>Flash Sale</Text>
        <View style={styles.flashSaleItems}>
          <View style={styles.flashSaleItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/236x/c2/00/87/c200877d51efe688d6abff22dc66330a.jpg' }}
              style={styles.flashSaleImage}
            />
            <Text style={styles.flashSaleItemText}>Air Jordan XXX</Text>
            <Text style={styles.flashSalePrice}>$200.00</Text>
          </View>
          <View style={styles.flashSaleItem}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/8f/f6/ae/8ff6aeb7cae3a32b37a9cae44ad55612.jpg' }} // Remplacez par une URL valide
              style={styles.flashSaleImage}
            />
            <Text style={styles.flashSaleItemText}>Apple Smart Watch</Text>
            <Text style={styles.flashSalePrice}>$110.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.scanningSection}>
        <Image
          source={{ uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fd41b9a-fdad-4773-9070-91c1b31348b4/NIKE+DUNK+HI+RETRO+SE.jpg' }} // Remplacez par une URL valide
          style={styles.scanningImage}
        />
        <View style={styles.productDetail}>
          <Text style={styles.productName}>Nike High Top Shoe</Text>
          <Text style={styles.productRating}>6.0 (7.1k reviews)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 24,
  },
  specialOffer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  specialOfferImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  specialOfferText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  browseSection: {
    padding: 16,
  },
  browseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  category: {
    fontSize: 16,
  },
  flashSale: {
    padding: 16,
  },
  flashSaleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flashSaleItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  flashSaleItem: {
    alignItems: 'center',
  },
  flashSaleImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  flashSaleItemText: {
    fontSize: 16,
    marginTop: 8,
  },
  flashSalePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scanningSection: {
    padding: 16,
  },
  scanningImage: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
  },
  productDetail: {
    marginTop: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productRating: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;