import { useEffect, useState, useMemo } from 'react'
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
    index: number,
    url?: string,
}



const ICONS: Icon[] = [
    { id: "1", coupleId: 1, name: "hand", path: Taraji, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    { id: "2", coupleId: 2, name: "Birthday", path: Barcelona, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/316540592_686526436203869_576966687657651084_n.jpg?stp=c0.5.480.478a_dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OCaBnN3QUgEAX8kD_vE&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBiLT8kDbKNLHNAffCVZrMz66og1ZBa9-tOrL-dFbI9kQ&oe=63B5CC14" },
    { id: "3", coupleId: 3, name: "hand", path: Madrid, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/277445671_1348782168867037_4885761443821397914_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kXdYeCTbidgAX9FQSYa&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCXZhE-Yuhg11pFtubSDMOrksBKNSWQPGXKKgff5LRqAQ&oe=63B61223" },
    { id: "4", coupleId: 4, name: "hand", path: Liverpool, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/275781748_485361929745800_9030746912234805304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j0TiOPTYTzkAX8jdTlj&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAxmd-IVj8H6YSL6x-fQUAXzugyac_RkD12tQ0gxF_Djw&oe=63B69783" },
    { id: "5", coupleId: 5, name: "hand", path: City, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/266429146_3163514153868691_2161370553049447112_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=f5gTJ-IDWm4AX9m84Ab&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBlGPm2do6st1akMVLkAmZP4v4G4rzQ1oUy4gwr1vZlNg&oe=63B6DE3D" },
    { id: "6", coupleId: 6, name: "hand", path: Arsenal, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/241866430_1052332502203249_9169990575304630079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=D3aP7nCv5-EAX8Nhds_&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDW9jd1nuJ7X19mQpJFYJQR_FLWgl6529Mj2BHeeN3_uA&oe=63B7206F" },
    { id: "7", coupleId: 7, name: "hand", path: Psg, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/31901768_1851320628221464_3494696248873582592_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_2daAmAqZjQAX_T2qV1&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDJWpZEjxpUjGc16-SBq8QOixfAAQK8_aNwob4QOuV-EQ&oe=63D8E2B2" },
    { id: "8", coupleId: 8, name: "hand", path: Club, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/287397367_3222292074718786_6957149467743667895_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=HsFb3EGs8MUAX_wai3V&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfANb0Yu_W98Aj_-dZu-2Ve0lpAsgC1Y4yQB6ynWdy46hw&oe=63B5C292" },
    { id: "9", coupleId: 9, name: "hand", path: Etoile, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/287729003_4903540219757968_1344676895429687998_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=V_SZE3S1uogAX_A1xcB&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCBxYROor3ljpzIQif7aIRkLYMs1btCnmbBXWKbLbd5dQ&oe=63B6ED0E" },
    { id: "10", coupleId: 10, name: "hand", path: Bayern, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/274680329_1866698076853203_397477546147359775_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=scmi1x7Xa2AAX9ljFp7&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfByTSk6fJbHe5a7-ZDAH8K-FGDeCMa4-pSeR2JLYbrGdw&oe=63B76B33" },
    { id: "11", coupleId: 11, name: "hand", path: Dortmund, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.18169-9/1001472_184701428362543_1850406000_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=de6eea&_nc_ohc=JHWskb3ACBAAX9fMa11&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDqPSyEEJKzT99Hm8YkREZw0hBwWIG4t1_t0x0sNPFp3Q&oe=63D8F8D6" },
    { id: "12", coupleId: 12, name: "hand", path: Juventus, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/203313383_5633041483436821_2941268785956965258_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=f67be1&_nc_ohc=6jWXx_7cHcUAX9Q1i57&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBYang2tZMKtFGdn8sJU_ZPNIlVQgxX2IlDsQL7_FC-KQ&oe=63D90403" },
    // { id: "13", coupleId: 13, name: "hand", path: Inter, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    // { id: "14", coupleId: 14, name: "hand", path: Milan, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    // { id: "15", coupleId: 15, name: "hand", path: Mazembe, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    // { id: "16", coupleId: 16, name: "hand", path: Boca, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    { id: "17", coupleId: 1, name: "hand", path: Taraji, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    { id: "18", coupleId: 2, name: "Birthday", path: Barcelona, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/316540592_686526436203869_576966687657651084_n.jpg?stp=c0.5.480.478a_dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OCaBnN3QUgEAX8kD_vE&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBiLT8kDbKNLHNAffCVZrMz66og1ZBa9-tOrL-dFbI9kQ&oe=63B5CC14" },
    { id: "19", coupleId: 3, name: "hand", path: Madrid, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/277445671_1348782168867037_4885761443821397914_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kXdYeCTbidgAX9FQSYa&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCXZhE-Yuhg11pFtubSDMOrksBKNSWQPGXKKgff5LRqAQ&oe=63B61223" },
    { id: "20", coupleId: 4, name: "hand", path: Liverpool, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/275781748_485361929745800_9030746912234805304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j0TiOPTYTzkAX8jdTlj&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAxmd-IVj8H6YSL6x-fQUAXzugyac_RkD12tQ0gxF_Djw&oe=63B69783" },
    { id: "21", coupleId: 5, name: "hand", path: City, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/266429146_3163514153868691_2161370553049447112_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=f5gTJ-IDWm4AX9m84Ab&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBlGPm2do6st1akMVLkAmZP4v4G4rzQ1oUy4gwr1vZlNg&oe=63B6DE3D" },
    { id: "22", coupleId: 6, name: "hand", path: Arsenal, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/241866430_1052332502203249_9169990575304630079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=D3aP7nCv5-EAX8Nhds_&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDW9jd1nuJ7X19mQpJFYJQR_FLWgl6529Mj2BHeeN3_uA&oe=63B7206F" },
    { id: "23", coupleId: 7, name: "hand", path: Psg, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/31901768_1851320628221464_3494696248873582592_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_2daAmAqZjQAX_T2qV1&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDJWpZEjxpUjGc16-SBq8QOixfAAQK8_aNwob4QOuV-EQ&oe=63D8E2B2" },
    { id: "24", coupleId: 8, name: "hand", path: Club, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/287397367_3222292074718786_6957149467743667895_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=HsFb3EGs8MUAX_wai3V&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfANb0Yu_W98Aj_-dZu-2Ve0lpAsgC1Y4yQB6ynWdy46hw&oe=63B5C292" },
    { id: "25", coupleId: 9, name: "hand", path: Etoile, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/287729003_4903540219757968_1344676895429687998_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=V_SZE3S1uogAX_A1xcB&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCBxYROor3ljpzIQif7aIRkLYMs1btCnmbBXWKbLbd5dQ&oe=63B6ED0E" },
    { id: "26", coupleId: 10, name: "hand", path: Bayern, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/274680329_1866698076853203_397477546147359775_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=scmi1x7Xa2AAX9ljFp7&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfByTSk6fJbHe5a7-ZDAH8K-FGDeCMa4-pSeR2JLYbrGdw&oe=63B76B33" },
    { id: "27", coupleId: 11, name: "hand", path: Dortmund, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.18169-9/1001472_184701428362543_1850406000_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=de6eea&_nc_ohc=JHWskb3ACBAAX9fMa11&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDqPSyEEJKzT99Hm8YkREZw0hBwWIG4t1_t0x0sNPFp3Q&oe=63D8F8D6" },
    { id: "28", coupleId: 12, name: "hand", path: Juventus, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/203313383_5633041483436821_2941268785956965258_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=f67be1&_nc_ohc=6jWXx_7cHcUAX9Q1i57&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBYang2tZMKtFGdn8sJU_ZPNIlVQgxX2IlDsQL7_FC-KQ&oe=63D90403" },
    // { id: "29", coupleId: 13, name: "hand", path: Inter, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    // { id: "30", coupleId: 14, name: "hand", path: Milan, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    // { id: "31", coupleId: 15, name: "hand", path: Mazembe, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
    // { id: "32", coupleId: 16, name: "hand", path: Boca, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
]




export const MainScreen = ({ navigation, route }) => {

    const option = route.params.option

    const [currentUser, setCurrentUser] = useState(1)
    const [firstChoice, setFirstChoice] = useState<Icon>({} as Icon)
    const [secondChoice, setSecondChoice] = useState<Icon>({} as Icon)
    const [whichPress, setWhichPress] = useState(1)
    const [user1Score, setUSer1Score] = useState<number>(0)
    const [user2Score, setUSer2Score] = useState<number>(0)
    const [user3Score, setUSer3Score] = useState<number>(0)
    const [user4Score, setUSer4Score] = useState<number>(0)
    const [visibleIcons, setVisibleIcons] = useState(new Set())
    // const [tmpTable, setTmpTable] = useState(ICONS)





    const PICTURES = useMemo(() => (
        [
            { id: "1", coupleId: 1, name: "hand", path: Taraji, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            { id: "2", coupleId: 2, name: "Birthday", path: Barcelona, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/316540592_686526436203869_576966687657651084_n.jpg?stp=c0.5.480.478a_dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OCaBnN3QUgEAX8kD_vE&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBiLT8kDbKNLHNAffCVZrMz66og1ZBa9-tOrL-dFbI9kQ&oe=63B5CC14" },
            { id: "3", coupleId: 3, name: "hand", path: Madrid, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/277445671_1348782168867037_4885761443821397914_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kXdYeCTbidgAX9FQSYa&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCXZhE-Yuhg11pFtubSDMOrksBKNSWQPGXKKgff5LRqAQ&oe=63B61223" },
            { id: "4", coupleId: 4, name: "hand", path: Liverpool, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/275781748_485361929745800_9030746912234805304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j0TiOPTYTzkAX8jdTlj&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAxmd-IVj8H6YSL6x-fQUAXzugyac_RkD12tQ0gxF_Djw&oe=63B69783" },
            { id: "5", coupleId: 5, name: "hand", path: City, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/266429146_3163514153868691_2161370553049447112_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=f5gTJ-IDWm4AX9m84Ab&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBlGPm2do6st1akMVLkAmZP4v4G4rzQ1oUy4gwr1vZlNg&oe=63B6DE3D" },
            { id: "6", coupleId: 6, name: "hand", path: Arsenal, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/241866430_1052332502203249_9169990575304630079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=D3aP7nCv5-EAX8Nhds_&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDW9jd1nuJ7X19mQpJFYJQR_FLWgl6529Mj2BHeeN3_uA&oe=63B7206F" },
            { id: "7", coupleId: 7, name: "hand", path: Psg, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/31901768_1851320628221464_3494696248873582592_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_2daAmAqZjQAX_T2qV1&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDJWpZEjxpUjGc16-SBq8QOixfAAQK8_aNwob4QOuV-EQ&oe=63D8E2B2" },
            { id: "8", coupleId: 8, name: "hand", path: Club, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/287397367_3222292074718786_6957149467743667895_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=HsFb3EGs8MUAX_wai3V&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfANb0Yu_W98Aj_-dZu-2Ve0lpAsgC1Y4yQB6ynWdy46hw&oe=63B5C292" },
            { id: "9", coupleId: 9, name: "hand", path: Etoile, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/287729003_4903540219757968_1344676895429687998_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=V_SZE3S1uogAX_A1xcB&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCBxYROor3ljpzIQif7aIRkLYMs1btCnmbBXWKbLbd5dQ&oe=63B6ED0E" },
            { id: "10", coupleId: 10, name: "hand", path: Bayern, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/274680329_1866698076853203_397477546147359775_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=scmi1x7Xa2AAX9ljFp7&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfByTSk6fJbHe5a7-ZDAH8K-FGDeCMa4-pSeR2JLYbrGdw&oe=63B76B33" },
            { id: "11", coupleId: 11, name: "hand", path: Dortmund, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.18169-9/1001472_184701428362543_1850406000_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=de6eea&_nc_ohc=JHWskb3ACBAAX9fMa11&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDqPSyEEJKzT99Hm8YkREZw0hBwWIG4t1_t0x0sNPFp3Q&oe=63D8F8D6" },
            { id: "12", coupleId: 12, name: "hand", path: Juventus, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/203313383_5633041483436821_2941268785956965258_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=f67be1&_nc_ohc=6jWXx_7cHcUAX9Q1i57&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBYang2tZMKtFGdn8sJU_ZPNIlVQgxX2IlDsQL7_FC-KQ&oe=63D90403" },
            // { id: "13", coupleId: 13, name: "hand", path: Inter, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            // { id: "14", coupleId: 14, name: "hand", path: Milan, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            // { id: "15", coupleId: 15, name: "hand", path: Mazembe, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            // { id: "16", coupleId: 16, name: "hand", path: Boca, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            { id: "17", coupleId: 1, name: "hand", path: Taraji, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            { id: "18", coupleId: 2, name: "Birthday", path: Barcelona, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/316540592_686526436203869_576966687657651084_n.jpg?stp=c0.5.480.478a_dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OCaBnN3QUgEAX8kD_vE&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBiLT8kDbKNLHNAffCVZrMz66og1ZBa9-tOrL-dFbI9kQ&oe=63B5CC14" },
            { id: "19", coupleId: 3, name: "hand", path: Madrid, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/277445671_1348782168867037_4885761443821397914_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kXdYeCTbidgAX9FQSYa&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCXZhE-Yuhg11pFtubSDMOrksBKNSWQPGXKKgff5LRqAQ&oe=63B61223" },
            { id: "20", coupleId: 4, name: "hand", path: Liverpool, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/275781748_485361929745800_9030746912234805304_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j0TiOPTYTzkAX8jdTlj&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAxmd-IVj8H6YSL6x-fQUAXzugyac_RkD12tQ0gxF_Djw&oe=63B69783" },
            { id: "21", coupleId: 5, name: "hand", path: City, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/266429146_3163514153868691_2161370553049447112_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=f5gTJ-IDWm4AX9m84Ab&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBlGPm2do6st1akMVLkAmZP4v4G4rzQ1oUy4gwr1vZlNg&oe=63B6DE3D" },
            { id: "22", coupleId: 6, name: "hand", path: Arsenal, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/241866430_1052332502203249_9169990575304630079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=D3aP7nCv5-EAX8Nhds_&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDW9jd1nuJ7X19mQpJFYJQR_FLWgl6529Mj2BHeeN3_uA&oe=63B7206F" },
            { id: "23", coupleId: 7, name: "hand", path: Psg, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/31901768_1851320628221464_3494696248873582592_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_2daAmAqZjQAX_T2qV1&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDJWpZEjxpUjGc16-SBq8QOixfAAQK8_aNwob4QOuV-EQ&oe=63D8E2B2" },
            { id: "24", coupleId: 8, name: "hand", path: Club, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/287397367_3222292074718786_6957149467743667895_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=HsFb3EGs8MUAX_wai3V&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfANb0Yu_W98Aj_-dZu-2Ve0lpAsgC1Y4yQB6ynWdy46hw&oe=63B5C292" },
            { id: "25", coupleId: 9, name: "hand", path: Etoile, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/287729003_4903540219757968_1344676895429687998_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=V_SZE3S1uogAX_A1xcB&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCBxYROor3ljpzIQif7aIRkLYMs1btCnmbBXWKbLbd5dQ&oe=63B6ED0E" },
            { id: "26", coupleId: 10, name: "hand", path: Bayern, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/274680329_1866698076853203_397477546147359775_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=scmi1x7Xa2AAX9ljFp7&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfByTSk6fJbHe5a7-ZDAH8K-FGDeCMa4-pSeR2JLYbrGdw&oe=63B76B33" },
            { id: "27", coupleId: 11, name: "hand", path: Dortmund, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.18169-9/1001472_184701428362543_1850406000_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=de6eea&_nc_ohc=JHWskb3ACBAAX9fMa11&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDqPSyEEJKzT99Hm8YkREZw0hBwWIG4t1_t0x0sNPFp3Q&oe=63D8F8D6" },
            { id: "28", coupleId: 12, name: "hand", path: Juventus, index: Math.floor(Math.random() * 1000), url: "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/203313383_5633041483436821_2941268785956965258_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=f67be1&_nc_ohc=6jWXx_7cHcUAX9Q1i57&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBYang2tZMKtFGdn8sJU_ZPNIlVQgxX2IlDsQL7_FC-KQ&oe=63D90403" },
            // { id: "29", coupleId: 13, name: "hand", path: Inter, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            // { id: "30", coupleId: 14, name: "hand", path: Milan, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            // { id: "31", coupleId: 15, name: "hand", path: Mazembe, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
            // { id: "32", coupleId: 16, name: "hand", path: Boca, index: Math.floor(Math.random() * 1000),url:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/118274838_3174365169350756_7156685445748665905_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=0timCjUPmE8AX_iIIAV&tn=Ha1nH_IF31pxdoq_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD079-msZWJ3sKqV5ZWFOEyMn-4zCtA7e0H40oQRnnXJg&oe=63D8F701" },
        ]
    ), [])





    useEffect(() => {
        if (user1Score + user2Score + user3Score + user4Score == 12) {
            Alert.alert('Game over', "Start again", [{
                text: "ok", onPress: () => {
                    clearAll()
                }
            }])
        }
    }, [user1Score, user2Score, user3Score, user4Score])


    const clearAll = () => {
        navigation.goBack()
        // setUSer1Score(0)
        // setUSer2Score(0)
        // setUSer3Score(0)
        // setUSer4Score(0)
        // setCurrentUser(1)
        // setFirstChoice({} as Icon)
        // setSecondChoice({} as Icon)
        // setVisibleIcons(new Set())
        // setTmpTable(ICONS)



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
            visibleIcons.delete(firstChoice.id)
            visibleIcons.delete(secondChoice.id)
            setVisibleIcons(visibleIcons)
            setFirstChoice({} as Icon)
            setSecondChoice({} as Icon)
            setCurrentUser(p => p == 4 ? 1 : p + 1)
        }, 0)

    }

    const handleClick = (el: Icon) => {
        if (Array.from(visibleIcons).includes(el.id)) {
            return
        }
        if (whichPress == 1) {
            setFirstChoice(el)
            setWhichPress(2)
            visibleIcons.add(el.id)
            setVisibleIcons(visibleIcons)
        }
        else if (whichPress == 2) {
            setWhichPress(3)
            setSecondChoice(el)
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

    const renderIcon = (el) => {
        if (option == 0) {
            return (
                <Image source={el.path} style={{ ...styles.icon, width: 60, height: 60, }} resizeMode={'contain'} />
            )
        }
        else return (
            <Image source={{ uri: el.url }} style={{ ...styles.icon, width: 60, height: 60, borderRadius: 60 }} resizeMode={'contain'} />
        )
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
                {PICTURES
                    .sort((a, b) => a.index - b.index)?.map((el: Icon) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { handleClick(el) }}
                                key={el.id}
                                style={styles.iconConatiner}>
                                {
                                    // shownIcons.includes(el?.id) 
                                    Array.from(visibleIcons).includes(el.id)
                                        ?
                                        //  <Image source={el.path} style={{ ...styles.icon, width: 60, height: 60, }} resizeMode={'contain'} /> 
                                        renderIcon(el)
                                        :
                                        // <Image source={Qestion3} style={styles.icon} resizeMode={'contain'} />
                                        <View style={{ ...styles.icon, borderWidth: 5, borderColor: '#dedede', width: 70, height: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: 45, width: 45, borderRadius: 45, backgroundColor: "#dedede" }} />
                                        </View>
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
                <View style={{
                    ...styles.scoreContainer,
                    backgroundColor: currentUser == 3 ? '#57569C' : '#FFFFFF',
                    borderColor: currentUser == 3 ? "#FFFFFF" : "#57569C"
                }}>
                    <Text style={{ ...styles.scoreLabel, color: currentUser == 3 ? "#FFFFFF" : "#57569C" }}>{user3Score}</Text>
                </View>
            </View>
            <View style={styles.bottomSpace} />
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
        width: 70,
        height: 70,
        borderRadius: 35,
        marginVertical: 13,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        // overflow:'hidden'
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
        height: 80,
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
        height: 10,
        width: "100%",
        paddingStart: 50
    }
})