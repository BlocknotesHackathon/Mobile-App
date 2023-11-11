import { Stack, router } from 'expo-router'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import SafeArea from '../components/SafeArea'
import Slider from '../components/Slider'
import Header from '../components/Header'

export default function Main() {
	function openmenu() {
		router.push('/menu')
	}

	return (
		<SafeArea>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<View style={styles.container}>
				<Header />
				<Slider />

				<View style={styles.buttoncontainer}>
					<Pressable onPress={() => router.push('/jobs')} style={{ ...styles.mainbutton, ...styles.jobs }}>
						<Text style={styles.jobs.text}>Jobs</Text>
					</Pressable>

					<Pressable onPress={() => router.push('/notes')} style={{ ...styles.mainbutton, ...styles.notes }}>
						<Text style={styles.notes.text}>Lecture Notes</Text>
					</Pressable>
				</View>
			</View>
		</SafeArea>
	)
}

const styles = StyleSheet.create({
	test: {
		borderWidth: 1,
		borderColor: 'red',
	},
	container: {
		paddingHorizontal: 32,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	wrapper: {},
	topbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	announceImage: {
		width: '100%',
		borderRadius: 8,
	},
	listitem: {
		marginRight: 10,
	},
	noteImage: {
		width: 150,
		height: 190,
	},
	ahref: {
		textDecorationLine: 'underline',
		color: '#2e3192',
	},

	buttoncontainer: {
		marginTop: 16,
		display: 'flex',
	},

	mainbutton: {
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginBottom: 16,
	},

	jobs: {
		backgroundColor: '#5a53ba',

		text: {
			color: '#fff',
		},
	},

	notes: {
		backgroundColor: '#8477e4',

		text: {
			color: '#fff',
		},
	},
})
