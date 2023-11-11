import { View, Text, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

// components
import SafeArea from '../../components/SafeArea'
import Header from '../../components/Header'

export default function Jobs() {
	return (
		<SafeArea>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<View style={styles.container}>
				<Header />
			</View>
		</SafeArea>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 32,
	},
})
