import { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import lectures from '../constants/lectures'
import { Stack, router } from 'expo-router'

import { Entypo } from '@expo/vector-icons'

import LectureStorage from '../utils/LectureStorage'

export default function ChooseLectures() {
	const [selected, setSelected] = useState([])

	useEffect(() => {
		LectureStorage.getLectures().then((lec) => {
			setSelected(lec)
		})
	}, [])

	const width = Dimensions.get('window').width

	return (
		<View>
			<Stack.Screen
				options={{
					headerTitleAlign: 'center',
					headerTitle: 'Choose Lectures',
					headerLeft: () => (
						<Pressable onPress={() => router.replace('/menu')}>
							<Entypo name="chevron-left" size={32} />
						</Pressable>
					),
				}}
			/>
			<View style={styles.container}>
				<View style={styles.lectures}>
					{lectures.map((lecture, index) => {
						return (
							<Pressable
								onPress={() => {
									if (selected.includes(lecture)) {
										setSelected(selected.filter((item) => item !== lecture))
									} else {
										setSelected([...selected, lecture])
									}

									LectureStorage.setLectures(selected)
								}}
								style={{
									...styles.lecture,
									width: (width - 90) / 3,
									height: (width - 90) / 3,
									marginVertical: 10,
									borderRadius: 5,
									borderColor: selected.includes(lecture) ? '#2e3192' : '#fff',
									borderWidth: selected.includes(lecture) ? 2 : 0,
								}}
								key={index}
							>
								<Text>{lecture}</Text>
							</Pressable>
						)
					})}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		paddingHorizontal: 32,
	},
	lectures: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	lecture: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	buttonbar: {
		marginTop: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	savebutton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		backgroundColor: '#2e3192',
	},
	btntxt: {
		color: '#fff',
		fontSize: 16,
	},
})
