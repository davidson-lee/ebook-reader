import { StyleSheet } from 'react-native'
import style from '../../store/reducers/style';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    loginBackground: {
        width: '80%', 
        height: '50%', 
        backgroundColor:'rgb(230,230,255)',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 1,
    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-evenly'
    },
    imageContainer: {
        flex: 1, 
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '10%',
        borderRadius: 2,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1.5, justifyContent: 'space-evenly'
    },
    input: {
        height: 40, 
        backgroundColor: 'rgba(255,255,255,0.8)', 
        fontFamily: 'Bold',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    loginButton: {
        flex: 1, 
        marginTop: 10, 
        marginBottom: 10, 
        marginLeft: 5, 
        marginRight: 5, 
        backgroundColor:'rgba(140,140,255,1)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles