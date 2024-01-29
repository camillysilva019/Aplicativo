import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, Pressable, Alert, Button, TextInput } from 'react-native';
import Saudacao from './componentes/Saudacao';

const logo = require('./assets/favicon.png')

export default function App() {
    return (
        <SafeAreaView style={[styles.androidSafeArea]}>
            <ScrollView> 
                <View style={styles.container}>

                    <View>
                        <Text style={styles.labelInput}>Campo 1</Text>
                        <TextInput placeholder='Campo 1' style={styles.input}></TextInput>
                        <Text style={styles.labelInput}>Campo 2</Text>
                        <TextInput placeholder='Campo 2' style={styles.input}></TextInput>
                    </View>

                    <View style={[styles.alinharHorizontal]}>
                        <Button title='Botão 1' color='#5072A7' onPress={() => Alert.alert('Olá eu sou um alerta! ', ' Eu sou um alert!')}></Button>
                        <Button title='Botão 2' color='#6699CC' onPress={() => Alert.alert('Isso é um alerta! ', ' Cuidado')}></Button>
                        <Button title='Botão 3' color='#89CFF0' onPress={() => Alert.alert(' Esse é seu aviso final! ', ' Atenção!',
                            [
                                {
                                    text: 'Cancelar',
                                    onPress: () => console.log('Botão cancelar pressionado!')
                                },
                                {
                                    text: 'OK',
                                    onPress: () => console.log('Botão OK pressionado!')
                                }
                            ])}></Button>
                    </View>

                    <View style={styles.separador}></View>

                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#F0E68C' : '#6CB4EE'
                            },
                            styles.button,
                        ]}
                        onPress={() => Alert.alert('Botão pressionado!')}>
                        <Text>Button</Text>
                    </Pressable>

                    <View style={styles.separador}></View>

                    <Saudacao name={'Camilly Silva'}></Saudacao>
                    <Image source={logo}></Image>

                    <View style={styles.separador}></View>

                    <Image source={{ uri: 'https://picsum.photos/730' }} style={{ width: 300, borderColor: '#72A0C1', borderWidth: 3, margin: 20, height: 200, borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 20 }}></Image>

                    {/* Essse separador faz as linhas entre os textos */}
                    <View style={styles.separador}></View>

                    <Text style={{ backgroundColor: '#F0F8FF' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </Text>

                    <View style={styles.separador}></View>

                    <View style={[styles.lightgreenBox, styles.borderMargin]}>
                        <Text style={{ color: 'white' }}>Aplicando estilos</Text>
                    </View>

                    <View style={[styles.lightbluebox, styles.borderMargin]}>
                        <Text style={{ color: 'white' }}>Lightblue Box</Text>
                    </View>

                    <StatusBar style="auto" />
                </View>
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    androidSafeArea: {
        padding: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    lightgreenBox: {
        backgroundColor: '#5072A7',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
    },
    lightbluebox: {
        backgroundColor: '#6699CC',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
    },
    borderMargin: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    separador: {
        width: '100%',
        backgroundColor: 'gray',
        height: 1,
        margin: 10,
    },
    alinharHorizontal: {
        // flex: 1,
        flexDirection: 'row',
        gap: 10,
    },
    input: {
        width: '70%',
        height: 40,
        margin: 7,
        padding: 10,
        fontSize: 15,
        borderRadius: 10,
        backgroundColor: '#F0F8FF',
    },
    labelInput: {
        fontSize: 18,
        marginBottom: 1
    }
});