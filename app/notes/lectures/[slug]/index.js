import { Stack, useLocalSearchParams, router } from 'expo-router'
import { View, Text, ScrollView, Pressable, ImageBackground, StyleSheet } from 'react-native'
import BackButton from '../../../../components/BackButton'
import { useEffect, useState } from 'react'
//TEST
import sharesData from '../../../../dummydata/shares'
export default function LecturePage() {
	const { slug } = useLocalSearchParams()
	const [shares, setShares] = useState([])

	useEffect(() => {
		setShares(sharesData.filter((share) => share.category === slug))
	}, [])

	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					headerTitle: slug,
					headerLeft: () => <BackButton />,
				}}
			/>
			<ScrollView style={styles.container}>
				{shares.map((share, index) => (
					<Pressable
						style={{
							marginTop: 12,
						}}
						key={index}
						onPress={() => {
							router.push(`/notes/lectures/${slug}/${share.title}`)
						}}
					>
						<ImageBackground source={require('../../../../assets/examplenote.jpg')} style={styles.noteImage}>
							<View style={styles.overlay}>
								<View style={styles.overlay.row}>
									<Text style={styles.overlay.text}>{share.title}</Text>
									<Text style={styles.overlay.desctext}>{share.description}</Text>
								</View>
							</View>
						</ImageBackground>
					</Pressable>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	test: {
		borderWidth: 1,
		borderColor: 'red',
	},
	container: {
		marginTop: 8,
		paddingHorizontal: 32,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	listitem: {
		marginRight: 10,
	},
	noteImage: {
		width: '100%',
		height: 190,
	},
	ahref: {
		textDecorationLine: 'underline',
		color: '#2e3192',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.35)',
		height: '100%',
		width: '100%',

		row: {
			marginTop: 'auto',
			justifyContent: 'space-between',
			padding: 10,
			display: 'flex',
			flexDirection: 'column',
		},

		text: {
			marginTop: 'auto',
			color: 'white',
			fontSize: 22,
			maxWidth: '100%',
		},
		desctext: {
			color: 'white',
			fontSize: 12,
			maxWidth: '100%',
		},
	},
})
