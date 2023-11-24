import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import { Stack } from 'expo-router'

// components
import BackButton from '../../components/BackButton'

import auctions from '../../dummydata/auctions'

export default function share() {
	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					presentation: 'modal',
					headerTitle: 'Auctions',
					headerLeft: () => <BackButton />,
				}}
			/>
			<ScrollView style={styles.container}>
				{auctions.map((auction, index) => {
					const date = new Date(auction.enddate * 1000)

					return (
						<View style={styles.auction} key={index}>
							<Image source={require('../../assets/examplenote.jpg')} style={styles.noteImage} />
							<View style={styles.aucfooter}>
								<Text>{auction.shareTitle}</Text>
								<Text>
									End Date: {date.toLocaleDateString()} {date.toLocaleTimeString()}
								</Text>
							</View>
						</View>
					)
				})}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 12,
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
	auction: {
		marginTop: 12,
	},
	aucfooter: {
		backgroundColor: '#fff',
		padding: 12,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
})
