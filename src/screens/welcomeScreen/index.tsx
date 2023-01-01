import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'



export const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.popUp}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MainScreen', { option: 0 })}
                    style={styles.playerButton}>
                    <Text style={styles.optionLabel}>Teams pictures</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MainScreen', { option: 1 })}
                    style={styles.playerButton}>
                    <Text style={styles.optionLabel}>Profils pictures</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#57569C'
    },
    popUp: {
        height: "30%",
        width: '90%',
        //backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 40,
        borderRadius: 5,
        marginVertical: 5
    },
    optionLabel: {
        color: '#57569C',
        fontSize: 15,
        fontStyle: 'italic'
    }
})