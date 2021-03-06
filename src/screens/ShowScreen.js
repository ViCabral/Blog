import React, { useContext } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  // navigation.getParam('id');

  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
    );

    return (
      <View>
        <Text>{blogPost.id}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  
})

export default ShowScreen;