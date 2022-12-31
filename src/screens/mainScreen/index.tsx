import { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image, Alert, StyleSheet } from 'react-native'
import Taraji from '../../icons/taraji.png'
import Barcelona from '../../icons/barcelona.png'
import Madrid from '../../icons/madrid.png'
import Liverpool from '../../icons/liverpool.png'
import City from '../../icons/city.png'
import Arsenal from '../../icons/arsenal.png'
import Psg from '../../icons/psg.png'
import Club from '../../icons/club.png'
import Etoile from '../../icons/etoile.png'
import Bayern from '../../icons/bayern.png'
import Dortmund from '../../icons/dortmund.png'
import Juventus from '../../icons/juventus.png'
import Inter from '../../icons/inter.png'
import Milan from '../../icons/milan.png'
import Eye from '../../icons/eye.png'
import Boca from '../../icons/boca.png'
import Mazembe from '../../icons/mazembe.png'



type Icon = {
    id: string,
    coupleId: number,
    name: string,
    path: any,
    index: number
}



const ICONS: Icon[] = [
    { id: "1", coupleId: 1, name: "hand", path: Taraji, index: Math.floor(Math.random() * 1000) },
    { id: "2", coupleId: 2, name: "Birthday", path: Barcelona, index: Math.floor(Math.random() * 1000) },
    { id: "3", coupleId: 3, name: "hand", path: Madrid, index: Math.floor(Math.random() * 1000) },
    { id: "4", coupleId: 4, name: "hand", path: Liverpool, index: Math.floor(Math.random() * 1000) },
    { id: "5", coupleId: 5, name: "hand", path: City, index: Math.floor(Math.random() * 1000) },
    { id: "6", coupleId: 6, name: "hand", path: Arsenal, index: Math.floor(Math.random() * 1000) },
    { id: "7", coupleId: 7, name: "hand", path: Psg, index: Math.floor(Math.random() * 1000) },
    { id: "8", coupleId: 8, name: "hand", path: Club, index: Math.floor(Math.random() * 1000) },
    { id: "9", coupleId: 9, name: "hand", path: Etoile, index: Math.floor(Math.random() * 1000) },
    { id: "10", coupleId: 10, name: "hand", path: Bayern, index: Math.floor(Math.random() * 1000) },
    { id: "11", coupleId: 11, name: "hand", path: Dortmund, index: Math.floor(Math.random() * 1000) },
    { id: "12", coupleId: 12, name: "hand", path: Juventus, index: Math.floor(Math.random() * 1000) },
    { id: "13", coupleId: 13, name: "hand", path: Inter, index: Math.floor(Math.random() * 1000) },
    { id: "14", coupleId: 14, name: "hand", path: Milan, index: Math.floor(Math.random() * 1000) },
    { id: "15", coupleId: 15, name: "hand", path: Mazembe, index: Math.floor(Math.random() * 1000) },
    { id: "16", coupleId: 16, name: "hand", path: Boca, index: Math.floor(Math.random() * 1000) },
    { id: "17", coupleId: 1, name: "hand", path: Taraji, index: Math.floor(Math.random() * 1000) },
    { id: "18", coupleId: 2, name: "Birthday", path: Barcelona, index: Math.floor(Math.random() * 1000) },
    { id: "19", coupleId: 3, name: "hand", path: Madrid, index: Math.floor(Math.random() * 1000) },
    { id: "20", coupleId: 4, name: "hand", path: Liverpool, index: Math.floor(Math.random() * 1000) },
    { id: "21", coupleId: 5, name: "hand", path: City, index: Math.floor(Math.random() * 1000) },
    { id: "22", coupleId: 6, name: "hand", path: Arsenal, index: Math.floor(Math.random() * 1000) },
    { id: "23", coupleId: 7, name: "hand", path: Psg, index: Math.floor(Math.random() * 1000) },
    { id: "24", coupleId: 8, name: "hand", path: Club, index: Math.floor(Math.random() * 1000) },
    { id: "25", coupleId: 9, name: "hand", path: Etoile, index: Math.floor(Math.random() * 1000) },
    { id: "26", coupleId: 10, name: "hand", path: Bayern, index: Math.floor(Math.random() * 1000) },
    { id: "27", coupleId: 11, name: "hand", path: Dortmund, index: Math.floor(Math.random() * 1000) },
    { id: "28", coupleId: 12, name: "hand", path: Juventus, index: Math.floor(Math.random() * 1000) },
    { id: "29", coupleId: 13, name: "hand", path: Inter, index: Math.floor(Math.random() * 1000) },
    { id: "30", coupleId: 14, name: "hand", path: Milan, index: Math.floor(Math.random() * 1000) },
    { id: "31", coupleId: 15, name: "hand", path: Mazembe, index: Math.floor(Math.random() * 1000) },
    { id: "32", coupleId: 16, name: "hand", path: Boca, index: Math.floor(Math.random() * 1000) },
]




export const MainScreen = () => {

    const [user, setUser] = useState(0)
    const [firstChoice, setFirstChoice] = useState<Icon>({} as Icon)
    const [secondChoice, setSecondChoice] = useState<Icon>({} as Icon)
    const [whichPress, setWhichPress] = useState(1)
    const [shownIcons, setShownIcons] = useState<any[]>([])
    const [user1Score, setUSer1Score] = useState<number>(0)
    const [user2Score, setUSer2Score] = useState<number>(0)
    const [user3Score, setUSer3Score] = useState<number>(0)
    const [user4Score, setUSer4Score] = useState<number>(0)



    useEffect(() => {
        if (user1Score + user2Score + user3Score + user4Score == 16) {
            Alert.alert('the winner is', "good", [{
                text: "ok", onPress: () => {
                    setShownIcons([]);
                    setUser(1)
                }
            }])
        }
    })


    useEffect(() => {
        if (Object.keys(firstChoice).length == 0 || Object.keys(secondChoice).length == 0) {
            console.log("from one")
            console.log("firstChoice", firstChoice)
            console.log("secondChoice", secondChoice)
            console.log("from one")

            return
        }
        if (firstChoice?.coupleId == secondChoice?.coupleId) {
            console.log("from two")
            console.log("firstChoice", firstChoice)
            console.log("secondChoice", secondChoice)
            console.log("from two")
            setFirstChoice({} as Icon)
            setSecondChoice({} as Icon)
            if (user == 1) {
                setUSer1Score(p => p + 1)
            }
            else if (user == 2) {
                setUSer2Score(p => p + 1)
            }
            else if (user == 3) {
                setUSer3Score(p => p + 1)
            }
            else {
                setUSer4Score(p => p + 1)
            }
        }
        else if (firstChoice?.coupleId != secondChoice?.coupleId) {
            console.log("from three")
            console.log("firstChoice", firstChoice)
            console.log("secondChoice", secondChoice)
            console.log("from three")
            setUser(p => p == 4 ? 1 : p + 1)
            makeLater()
            setFirstChoice({} as Icon)
            setSecondChoice({} as Icon)
        }
    }, [whichPress])

    const makeLater = () => {
        setTimeout(() => {
            const _shownIons = shownIcons.slice(0, -2)
            setShownIcons(_shownIons)
        }, 1500)

    }

    const handleClick = (el: Icon) => {
        if (shownIcons.includes(el.id)) {
            return
        }
        if (whichPress == 1) {
            setFirstChoice(el)
            const _shownIcons = [...shownIcons, el.id]
            setShownIcons(_shownIcons)
            setWhichPress(2)
        }
        else {
            setSecondChoice(el)
            const _shownIcons = [...shownIcons, el.id]
            setShownIcons(_shownIcons)
            setWhichPress(1)
        }

    }



    return (
        <View style={styles.mainContainer}>
            {ICONS
                // .map((e) => {
                //     return ({ ...e, index: Math.random() })
                // })
                .sort((a, b) => a.index - b.index)?.map((el: Icon) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { handleClick(el) }}
                            key={el.id}
                            style={styles.iconConatiner}>
                            {shownIcons.includes(el?.id) ? <Image source={el.path} style={styles.icon} resizeMode={'contain'} /> :
                                //  <Image source={Eye} style={styles.icon} resizeMode={'contain'}/> 
                                <View style={styles.icon} />
                            }
                        </TouchableOpacity>
                    )
                })


            }
            <View style={{ backgroundColor: 'red', position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "white", fontSize: 30 }}>{user1Score}</Text>
            </View>
            <View style={{ backgroundColor: 'green', position: 'absolute', top: 0, right: 0, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "white", fontSize: 30 }}>{user2Score}</Text>
            </View>
            <View style={{ backgroundColor: 'blue', position: 'absolute', bottom: 0, right: 0, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "white", fontSize: 30 }}>{user3Score}</Text>
            </View>
            <View style={{ backgroundColor: '#FFFF00', position: 'absolute', bottom: 0, left: 0, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#dedede", fontSize: 30 }}>{user4Score}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor:'red',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
    },
    iconConatiner: {
        width: 60,
        height: 60,
        borderRadius: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#7371FC30",
    },
    icon: {
        width: 40,
        height: 40
    }
})