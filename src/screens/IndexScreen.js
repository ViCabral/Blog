import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const { data, addBlogPosts } = useContext(BlogContext);
    
    return (
        <View>
            <Text>Blog List</Text>

            <Button title="Add Post" onPress={addBlogPosts}/>

            <FlatList 
            data={data}
            keyExtractor={blogPosts => blogPosts.title}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({


})

export default IndexScreen;