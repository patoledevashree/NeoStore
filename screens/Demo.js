import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarRating from './StarRating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Product() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: '#e7e7e7', marginBottom: 10, marginTop: 20 }}>
                        <View style={styles.cardWrapper}>
                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/sofa.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                textAlign: 'right',
                                                fontSize: 20,
                                                paddingRight: 20,
                                                paddingTop: 30
                                            }}>
                                                Apollo Sofa
                                            </Text>
                                            <View style={{
                                                paddingRight: 20,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <StarRating ratings={4} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                textAlign: 'right',
                                                fontSize: 16,
                                                paddingRight: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}43,0000
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/chair.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                                paddingLeft: 20,
                                                paddingTop: 30
                                            }}>
                                                AVRO Furniture
                                            </Text>
                                            <View style={{ paddingLeft: 20 }}>
                                                <StarRating ratings={3} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                paddingLeft: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}3,999
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/bed.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                textAlign: 'right',
                                                fontSize: 20,
                                                paddingRight: 20,
                                                paddingTop: 30
                                            }}>
                                                Godrej Interio bed
                                            </Text>
                                            <View style={{
                                                paddingRight: 20,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <StarRating ratings={4} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                textAlign: 'right',
                                                fontSize: 16,
                                                paddingRight: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}20,000
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/almirah.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                                paddingLeft: 20,
                                                paddingTop: 30
                                            }}>
                                                Crystal Furniture
                                            </Text>
                                            <View style={{ paddingLeft: 20 }}>
                                                <StarRating ratings={4} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                paddingLeft: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}12,000
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/bed.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                textAlign: 'right',
                                                fontSize: 20,
                                                paddingRight: 20,
                                                paddingTop: 30
                                            }}>
                                                Godrej Interio bed
                                            </Text>
                                            <View style={{
                                                paddingRight: 20,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <StarRating ratings={4} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                textAlign: 'right',
                                                fontSize: 16,
                                                paddingRight: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}20,000
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>


                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/almirah.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                                paddingLeft: 20,
                                                paddingTop: 30
                                            }}>
                                                Crystal Furniture
                                            </Text>
                                            <View style={{ paddingLeft: 20 }}>
                                                <StarRating ratings={4} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                paddingLeft: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}12,000
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/chair.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                                textAlign: 'right',
                                                paddingRight: 20,
                                                paddingTop: 30
                                            }}>
                                                AVRO Furniture
                                            </Text>
                                            <View style={{
                                                paddingRight: 20,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <StarRating ratings={4} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                paddingRight: 20,
                                                textAlign: 'right',
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}3,999
                                            </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardImgWrapper}>
                                    <ImageBackground
                                        source={require('../assests/images/sofa.png')}
                                        resizeMode='cover'
                                        style={styles.cardImg}
                                    >
                                        <View style={styles.productView}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 20,
                                                paddingLeft: 20,
                                                paddingTop: 30
                                            }}>
                                                Apollo Sofa
                                            </Text>
                                            <View style={{ paddingLeft: 20 }}>
                                                <StarRating ratings={4} reviews={99} />
                                            </View>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                paddingLeft: 20,
                                                paddingTop: 5
                                            }}>
                                                {'\u20B9'}43,0000
                                            </Text>

                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>


                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={{ padding: 20 }}>
                    <FontAwesome name='list-alt' color={'#777'} size={25} />
                </View>
                <View style={{ padding: 20 }}>
                    <FontAwesome name='paint-brush' color={'#777'} size={25} />
                </View>
                <View style={{ padding: 20 }}>
                    <FontAwesome name='star' color={'#777'} size={25} />
                </View>
                <View style={{ padding: 20, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>{'\u20B9'}</Text>
                    </View>
                    <View>
                        <FontAwesome name='arrow-up' color={'#777'} size={25} />
                    </View>
                </View>
                <View style={{ padding: 20, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>{'\u20B9'}</Text>
                    </View>
                    <View>
                        <FontAwesome name='arrow-down' color={'#777'} size={25} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: '90%',
        alignSelf: 'center'
    },
    card: {
        marginTop: 10,
        height: 150,
        marginBottom: 20,
        flexDirection: 'row',
        shadowColor: '#777',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 5
    },
    cardImgWrapper: {
        flex: 1
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,


    },
    productView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    footer: {
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderTopColor: '#777',
        position: 'relative',
        shadowColor: '#777',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})