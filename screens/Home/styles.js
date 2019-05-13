import { StyleSheet } from 'react-native'
import style from '../../store/reducers/style';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    headerContainer: {
        height: 50, 
        flexDirection: 'row', 
        borderBottomWidth: 2, 
        borderBottomColor: 'rgba(0,0,0,0.2)', 
        paddingLeft: 20, 
        paddingRight: 20, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }
})

export default styles