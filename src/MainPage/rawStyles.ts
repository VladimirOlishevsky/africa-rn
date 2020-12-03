import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        //justifyContent: 'center',
        padding: 30,
        backgroundColor: 'rgba(255, 216, 125, 0.4)'
    },
    containerTitle: {
        color: 'rgb(57, 101, 139)',
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
        paddingTop: '10%'
    },
    // input: {
    //     paddingTop: '10%',
    //     height: 40,
    //     borderStyle: 'solid'
    // }
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 5,
      },
      inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
})