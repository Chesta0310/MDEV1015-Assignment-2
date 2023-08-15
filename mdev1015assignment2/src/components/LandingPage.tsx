import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";

const LandingPage = ({ navigation }) => {
	return (
		<View style={styles.wrapper}>
			<Image
				source={{
					uri: "https://educationconcern.com/wp-content/uploads/2021/07/Georgian-College-Canada.jpg",
					height: 300,
				}}
				style={{ width: "100%" }}
			/>
			<Text style={styles.header}>Welcome To the Georgian College</Text>
			<View style={styles.btnWrapper}>
				<Button title="Login" onPress={() => navigation.navigate("Login")}/>
				<Button title="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "white",
	},
	header: {
		fontSize: 24,
		width: "100%",
		textAlign: "center",
		marginTop: 20,
	},
    btnWrapper: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        padding: 10, 
        marginTop: 20
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});

export default LandingPage;
