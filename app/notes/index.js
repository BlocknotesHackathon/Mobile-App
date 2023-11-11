import { Stack, Tabs, router } from 'expo-router'
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground, Pressable } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

// components
import SafeArea from '../../components/SafeArea'
import Header from '../../components/Header'
import Slider from '../../components/Slider'

import { getLectures } from '../../utils/LectureStorage'
import { useEffect, useState } from 'react'

//test
import shares from '../../dummydata/shares'

export default function Main() {
	const [lectures, setLectures] = useState([])
	const [filteredShares, setFilteredShares] = useState([])

	useEffect(() => {
		getLectures().then((res) => {
			setLectures(res)
		})

		// lectures = my favorite lectures
		// shares = all shares
		// filteredShares = shares that are in my lectures
		console.log('LECTURES')
		console.log(lectures)
		console.log('SHARES')
		console.log(shares)
		setFilteredShares(shares.filter((share) => lectures.includes(share.category)))
		console.log('FİLTERED SHARES')
		console.log(filteredShares)
	}, [])

	return (
		<SafeArea>
			<Tabs.Screen
				options={{
					headerShown: false,
				}}
			/>
			<View style={styles.container}>
				<Header />
				<Slider />
				<View>
					<View style={{ ...styles.row, marginTop: 12 }}>
						<Text style={styles.ahref}>Paylaşımlarım</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} />
					</View>
					<ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<View style={styles.listitem}>
							<Pressable>
								<ImageBackground source={require('../../assets/examplenote.jpg')} style={styles.noteImage}>
									<View style={styles.overlay}>
										<View style={styles.overlay.row}>
											<Text style={styles.overlay.text}>Türev İntegrale</Text>
											<View style={styles.row}>
												<MaterialCommunityIcons name="eye" size={12} style={styles.overlay.icon} />
												<Text style={styles.overlay.count}>101</Text>
											</View>
										</View>
									</View>
								</ImageBackground>
							</Pressable>
						</View>
					</ScrollView>
				</View>

				<View>
					<View style={{ ...styles.row, marginTop: 12 }}>
						<Text style={styles.ahref}>Son Cebir Notları</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} />
					</View>
					<ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<Pressable>
							<ImageBackground source={require('../../assets/examplenote.jpg')} style={styles.noteImage}>
								<View style={styles.overlay}>
									<View style={styles.overlay.row}>
										<Text style={styles.overlay.text}>Cebirsel Bilmem Neler</Text>
										<View style={styles.row}>
											<MaterialCommunityIcons name="eye" size={12} style={styles.overlay.icon} />
											<Text style={styles.overlay.count}>101</Text>
										</View>
									</View>
								</View>
							</ImageBackground>
						</Pressable>
					</ScrollView>
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
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.35)',
		height: '100%',
		width: '100%',

		row: {
			marginTop: 'auto',
			justifyContent: 'space-between',
			padding: 5,
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-end',
		},

		text: {
			marginTop: 'auto',
			padding: 5,
			color: 'white',
			fontSize: 12,
			maxWidth: 100,
		},

		count: {
			color: 'white',
		},

		icon: {
			color: 'white',
			marginRight: 2,
		},
	},
})
