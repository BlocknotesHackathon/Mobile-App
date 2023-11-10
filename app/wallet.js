import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import { Stack, router } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

const WalletPage = () => {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					headerTitleAlign: 'center',
					headerTitle: 'Wallet',
					headerLeft: () => (
						<Pressable onPress={() => router.replace('/menu')}>
							<Entypo name="chevron-left" size={32} />
						</Pressable>
					),
				}}
			/>
			<Text style={styles.balance}>Wallet Balance: $100</Text>
			<View style={styles.buttonContainer}>
				<Button title="Add Funds" onPress={() => console.log('Add Funds')} />
				<Button title="Withdraw Funds" onPress={() => console.log('Withdraw Funds')} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	balance: {
		fontSize: 24,
		marginBottom: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
	},
})

export default WalletPage
