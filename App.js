import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import CicadaItem from './components/cicadaitem'
import AddCicada from './components/addCicada'
import ImageUpload from './components/imageUpload'

export default function App() {

  const [cicadas, setCicadas] = useState([
    { text: 'Cicada 1', key: '1' },
    { text: 'Cicada 2' , key: '2' },
    { text: 'Cicada 3' , key: '3' },
    { text: 'Cicada 4' , key: '4' },
  ]);

  const submitHandler = (text) => {
    setCicadas((prevCicadas) => {
      return [
        { text: text, key: Math.random().toString()},
        ...prevCicadas
      ]
    })
  }

  return (
    <View style={styles.container}>
      {/** header */}
      <Header />
      <View style={styles.content}>
        {/** cicada form */}
        <ImageUpload /> 
        <AddCicada submitHandler={submitHandler}/>
        {/**cicada list */}
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
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
