import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Dashboard() {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.search}>
                    <View>
                        <FontAwesome style={{ padding: 10, paddingLeft: 20 }}
                            name='search' size={25} color='#777' />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder='Search for Products'
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2874F0'
    },
    input: {
        width: 350,
        borderRadius: 1,
        paddingLeft: 10,
        

    },
    search: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10
    }
})