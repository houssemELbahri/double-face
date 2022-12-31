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
import Boca from '../../icons/boca.png'
import Mazembe from '../../icons/mazembe.png'
import Qestion3 from '../../icons/question3.png'




const USERCOLORS = {
    0: { state: "absent", color: "#FB3640" },
    1: { state: "present", color: "#21CB88" },
    2: { state: "toCome", color: "#57569C" },
    3: { state: "late", color: "#F9C067" },
}

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

    const [currentUser, setCurrentUser] = useState(1)
    const [firstChoice, setFirstChoice] = useState<Icon>({} as Icon)
    const [secondChoice, setSecondChoice] = useState<Icon>({} as Icon)
    const [whichPress, setWhichPress] = useState(1)
    const [user1Score, setUSer1Score] = useState<number>(0)
    const [user2Score, setUSer2Score] = useState<number>(0)
    const [user3Score, setUSer3Score] = useState<number>(0)
    const [user4Score, setUSer4Score] = useState<number>(0)
    const [shownIcons, setShownIcons] = useState<any[]>([])
    const [visibleIcons, setVisibleIcons] = useState(new Set())



    // useEffect(() => {
    //     if (user1Score + user2Score + user3Score + user4Score == 1) {
    //         Alert.alert('Game over', "Start again", [{
    //             text: "ok", onPress: () => {
    //                 clearAll()
    //             }
    //         }])
    //     }
    // }, [])


    const clearAll = () => {
        setUSer1Score(0)
        setUSer2Score(0)
        setUSer3Score(0)
        setUSer4Score(0)
        setCurrentUser(1)
        setShownIcons([])
        setFirstChoice({} as Icon)
        setSecondChoice({} as Icon)


    }


    useEffect(() => {
        if (Object.keys(firstChoice).length == 0 || Object.keys(secondChoice).length == 0) {
            return
        }
        if (firstChoice?.coupleId == secondChoice?.coupleId) {
            setFirstChoice({} as Icon)
            setSecondChoice({} as Icon)
            if (currentUser == 1) {
                setUSer1Score(p => p + 1)
            }
            else if (currentUser == 2) {
                setUSer2Score(p => p + 1)
            }
            else if (currentUser == 3) {
                setUSer3Score(p => p + 1)
            }
            else {
                setUSer4Score(p => p + 1)
            }
        }
        else if (firstChoice?.coupleId != secondChoice?.coupleId) {
            makeLater()
        }
    }, [whichPress])

    const makeLater = () => {
        setTimeout(() => {
            const _shownIons = shownIcons.slice(0, -2)
            setShownIcons(_shownIons)
            visibleIcons.delete(firstChoice.id)
            visibleIcons.delete(secondChoice.id)
            setVisibleIcons(visibleIcons)
            setFirstChoice({} as Icon)
            setSecondChoice({} as Icon)
            setCurrentUser(p => p == 4 ? 1 : p + 1)
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
            visibleIcons.add(el.id)
            setVisibleIcons(visibleIcons)
        }
        else {
            setSecondChoice(el)
            const _shownIcons = [...shownIcons, el.id]
            setShownIcons(_shownIcons)
            setWhichPress(1)
            visibleIcons.add(el.id)
            setVisibleIcons(visibleIcons)
        }

    }

    const chnageBg = () => {
        if (currentUser == 1) {
            return "#FB3640"
        }
        else if (currentUser == 2) {
            return "#21CB88"
        }
        else if (currentUser == 3) {
            return "#57569C"
        }
        else {
            return "#F9C067"
        }
    }



    return (
        <View style={{ ...styles.mainContainer, backgroundColor: chnageBg() }}>
            <View style={styles.scoreRow}>
                <View style={{
                    ...styles.scoreContainer,
                    backgroundColor: currentUser == 1 ? '#FB3640' : '#FFFFFF',
                    borderColor: currentUser == 1 ? "#FFFFFF" : "#FB3640"
                }}>
                    <Text style={{ ...styles.scoreLabel, color: currentUser == 1 ? "#FFFFFF" : "#FB3640" }}>{user1Score}</Text>
                </View>
                <View style={{
                    ...styles.scoreContainer,
                    backgroundColor: currentUser == 2 ? '#21CB88' : '#FFFFFF',
                    borderColor: currentUser == 2 ? "#FFFFFF" : "#21CB88"
                }}>
                    <Text style={{ ...styles.scoreLabel, color: currentUser == 2 ? "#FFFFFF" : "#21CB88" }}>{user2Score}</Text>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                {ICONS
                    .sort((a, b) => a.index - b.index)?.map((el: Icon) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { handleClick(el) }}
                                key={el.id}
                                style={styles.iconConatiner}>
                                {
                                    // shownIcons.includes(el?.id) 
                                    Array.from(visibleIcons).includes(el.id)
                                        ? <Image source={el.path} style={{ ...styles.icon, width: 45, height: 45 }} resizeMode={'contain'} /> :
                                        <Image source={Qestion3} style={styles.icon} resizeMode={'contain'} />
                                    // <View style={styles.icon} />
                                }
                            </TouchableOpacity>
                        )
                    })


                }
            </View>
            <View style={styles.scoreRow}>
                <View style={{
                    ...styles.scoreContainer,
                    backgroundColor: currentUser == 4 ? '#F9C067' : '#FFFFFF',
                    borderColor: currentUser == 4 ? "#FFFFFF" : "#F9C067"
                }}>
                    <Text style={{ ...styles.scoreLabel, color: currentUser == 4 ? "#FFFFFF" : "#F9C067" }}>{user4Score}</Text>
                </View>
                <Text>{JSON.stringify(Array.from(visibleIcons))}</Text>
                <View style={{
                    ...styles.scoreContainer,
                    backgroundColor: currentUser == 3 ? '#57569C' : '#FFFFFF',
                    borderColor: currentUser == 3 ? "#FFFFFF" : "#57569C"
                }}>
                    <Text style={{ ...styles.scoreLabel, color: currentUser == 3 ? "#FFFFFF" : "#57569C" }}>{user3Score}</Text>
                </View>
            </View>
            <View style={styles.bottomSpace}>
                <Text>{JSON.stringify(firstChoice)}</Text>
                <Text>{JSON.stringify(secondChoice)}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    iconsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    iconConatiner: {
        width: 60,
        height: 60,
        borderRadius: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1'
    },
    icon: {
        width: 40,
        height: 40
    },
    hiddenIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF'
    },
    scoreRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: 50,
        paddingHorizontal: 20,
    },
    scoreContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },
    scoreLabel: {
        color: "#dedede",
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700'
    },
    bottomSpace: {
        height: 30,
        width: "100%",
        paddingStart: 50
    }
})