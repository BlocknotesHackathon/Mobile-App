import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import BackButton from '../../../../../components/BackButton'

//test
import sharesData from '../../../../../dummydata/shares'

import { useEffect, useState } from 'react'
import { useWalletConnectModal } from '@walletconnect/modal-react-native'

function LecturePage() {
	const { share } = useLocalSearchParams()
	const { address } = useWalletConnectModal()
	const [lecture, setLecture] = useState([])

	useEffect(() => {
		setData(sharesData.find((s) => s.title === share))
	}, [])

	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					headerTitle: share,
					headerLeft: () => <BackButton />,
				}}
			/>
			<RequestModal
				isVisible={requestModalVisible}
				isLoading={isLoading}
				rpcResponse={isSuccess ? data?.toString() : undefined}
				rpcError={isError ? 'Error reading contract' : undefined}
				onClose={() => setRequetsModalVisible(false)}
			/>
			<View style={styles.container}>
				<Image source={require('../../../../../assets/examplenote.jpg')} style={styles.noteImage} />
				<View>
					<Text style={styles.title}>{lecture.title}</Text>
					<Text style={styles.desc}>{lecture.description}</Text>
				</View>

				{address == lecture.author && (
					<Pressable style={styles.button.createauc}>
						<Text style={styles.button.text}>Create Auction</Text>
					</Pressable>
				)}

				{address != lecture.author && (
					<Pressable
						onPress={() => {
							console.log('press')
						}}
						style={styles.button.createauc}
					>
						<Text style={styles.button.text}>Tip</Text>
					</Pressable>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		paddingHorizontal: 16,
	},
	noteImage: {
		width: '100%',
		height: 200,
	},

	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 16,
	},

	desc: {
		marginTop: 8,
	},

	button: {
		text: {
			color: 'white',
			textAlign: 'center',
		},
		createauc: {
			backgroundColor: '#2e3192',
			padding: 16,
			borderRadius: 8,
			marginTop: 16,
		},
	},
})

export default LecturePage
