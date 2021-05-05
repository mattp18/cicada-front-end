import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import CicadaItem from './components/cicadaitem'

export default function App() {

  const [cicadas, setCicadas] = useState([
    { text: 'Cicada 1', key: '1' },
    { text: 'Cicada 2' , key: '2' },
    { text: 'Cicada 3' , key: '3' },
    { text: 'Cicada 4' , key: '4' },
  ]);

  return (
    <View style={styles.container}>
      {/** header */}
      <Header />
      <View style={styles.content}>
        {/** cicada form */}
        <View style={styles.list}>
          <FlatList
            data={cicadas}
            renderItem={({ item }) => (
              <CicadaItem item={item} />
            )}
          />
        </View>
      </View>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
