import React, {useEffect, useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Dimensions
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import QuestionLocal from '../assets/data/QuestionLocal'



const DATA = QuestionLocal();


const QuestionsScreen = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [question , nextQuestion] = useState(0);
    const [valid , isValid] = useState(false);
    const [pause , enpause] = useState(false);
    const [points , addpoints] = useState(0);
    const navigation = useNavigation();
    const route = useRoute();
    const {modSansCorrection} = route.params;
    const [timerIsPlay, setTimer] = React.useState(true);
    const [seconds, setSeconds] = React.useState(10);
    const [isActive, setIsActive] = useState(true);


    const topValue = useState(new Animated.Value(0)) [0]
    const { height, width } = Dimensions.get('window');




    const renderItem = ({item}) => {

        const backgroundColor = item.id === selectedId ? "#172f46" : "#295B8D";

        function validAnswer(id , correct) {
            setSelectedId(id)
            if (correct){
                isValid(true);
            }
            else {
                isValid(false);
            }
        }


        return (
            <Item
                item={item}
                onPress={() =>validAnswer(item.id , item.correct) }
                style={{ backgroundColor }}
            />
        );
    };

    const Item = ({ item, onPress , style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.button , pause ? modSansCorrection ? {backgroundColor: "#5d645c"} :  item.correct ? {backgroundColor: "#168d20"} : {backgroundColor:"#8d0700"} : style ]}>
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
    );

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(10);
        setIsActive(false);
    }
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        if (seconds === 0 ){
            console.log('Perdu')
            reset()
            setIsActive(!isActive);
            validate()
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    function restartAnimation(){

        Animated.timing(topValue,{
            useNativeDriver: false,
            toValue: height,
            duration: 10000
        }).start()

    }

    function startAnimation() {
        Animated.timing(topValue,{
            useNativeDriver: false,
            toValue: 0,
            duration: 0
        }).start()
    }

    function validate() {

        setIsActive(!isActive)
        if (valid){

            console.log("Bravo GG");
            addpoints(points +1);
            isValid(false);
            setSelectedId(null)
            if (modSansCorrection){

                setIsActive(!isActive)
                console.log('mode sans correction')
             continuer()
            }
            else {
                enpause(true);
            }
        }
        else {

            console.log('ahah la loose');
            if (modSansCorrection){
                console.log('mode sans correction')

                setIsActive(!isActive)
              continuer()
            }
            else {
                enpause(true);
            }
            setSelectedId(null)
        }
    }




    function continuer() {
        reset()
        setIsActive(true)
        if (question === 4) {

            nextQuestion(0);
            addpoints(0);
            enpause(false);
            reset()
            navigation.navigate('Classement', {
                points: points}) }

        else {
            nextQuestion(question + 1);
            enpause(false);

        }
    }
    return (
        <View style={styles.view}>


            <SafeAreaView style={styles.container} >
                <Text style={{
                    zIndex: 9999,
                    fontSize: 60,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>{seconds}</Text>

                <Animated.View style={[{
                    width:'100%',
                    height: height,
                    marginTop: topValue,
                    position: 'absolute',
                    backgroundColor: '#2fb7bd'},] }>
                </Animated.View>


                <View style={{

                    zIndex: 9999,
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',}}>

                    <Text style={styles.title}>Q{question + 1} {DATA[question].question}</Text>

                    <FlatList
                        data={DATA[question].answers}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                    />

                </View>
                <TouchableOpacity onPress={pause ? continuer : validate}  style={[styles.buttonNext ]}>
                    <Text style={styles.buttonText}>{pause ? "Continuer" : "Valider"  }</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </View>
    );

};


const styles = StyleSheet.create({
    block: {
        height: '100%'
    },
    view: {
        flex: 1,
       
    },
    container: {
        paddingTop : 20,
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        textAlign:'center',
        color:'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginBottom:15,
    },
    question: {
        fontSize: 20,
        textAlign:'center',
        color:'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginBottom: 15,
    },
    response: {
        fontSize: 32,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        marginHorizontal: 40,
        marginBottom: 20,
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,
    },
    buttonNext: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#1D6E72',
        marginHorizontal: "30%",
        marginBottom: 20,
        borderBottomColor: '#195E61',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#195E61',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: 'center',
        paddingLeft:10,
        paddingRight:10,
    },

});

export default QuestionsScreen;
