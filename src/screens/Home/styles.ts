import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#fdfcfe',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16
    },
    input: {
        flex: 1,
        marginRight: 12,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        color: '#fdfcfe',
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31cf67',
        borderRadius: 5,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fdfcfe',
        fontSize: 16,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        flexDirection: 'row',   
        marginTop: 36,
        marginBottom: 42
    },
  });

