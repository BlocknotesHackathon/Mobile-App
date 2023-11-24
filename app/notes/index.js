import { Stack, Tabs, router, Link } from 'expo-router'
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground, Pressable } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

// components
import SafeArea from '../../components/SafeArea'
import Header from '../../components/Header'
import Slider from '../../components/Slider'

import LectureStorage from '../../utils/LectureStorage'
import { useEffect, useState } from 'react'

//test
import shares from '../../dummydata/shares'

export default function Main() {
	const [lectures, setLectures] = useState([])
	const [filteredShares, setFilteredShares] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		LectureStorage.getLectures().then((lec) => {
			setLectures(lec)
		})
	}, [])

	useEffect(() => {
		if (lectures.length > 0) {
			const filtered = shares.filter((share) => lectures.includes(share.category))
			setFilteredShares(filtered)
		}
	}, [lectures])

	useEffect(() => {
		const cats = [...new Set(filteredShares.map((share) => share.category))]
		setCategories(cats)
	}, [filteredShares])

	return (
		<SafeArea>
			<Tabs.Screen
				options={{
					headerShown: false,
				}}
			/>
			<ScrollView style={styles.container}>
				<Header />
				<Slider />
				{categories.map((cat, index) => {
					return (
						<View style={{ marginTop: 12 }} key={index}>
							<Link href={`/notes/lectures/${cat}`}>
								<View style={{ ...styles.row, marginTop: 12 }}>
									<Text style={styles.ahref}>{cat}</Text>
									<MaterialCommunityIcons name="chevron-right" size={24} />
								</View>
							</Link>
							<ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
								{filteredShares.map((share, ind) => {
									if (share.category === cat) {
										return (
											<Pressable
												style={{
													marginRight: 10,
												}}
												key={ind}
												onPress={() => {
													router.push(`/notes/lectures/${cat}/${share.title}`)
												}}
											>
												<ImageBackground source={require('../../assets/examplenote.jpg')} style={styles.noteImage}>
													<View style={styles.overlay}>
														<View style={styles.overlay.row}>
															<Text style={styles.overlay.text}>{share.title}</Text>
														</View>
													</View>
												</ImageBackground>
											</Pressable>
										)
									}
								})}
							</ScrollView>
						</View>
					)
				})}
			</ScrollView>
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
		marginBottom: 32,
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
