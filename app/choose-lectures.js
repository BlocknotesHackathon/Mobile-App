import { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import { Stack, router } from 'expo-router'

import { Entypo } from '@expo/vector-icons'

import LectureStorage from '../utils/LectureStorage'

import LecturePicker from '../components/Picker'

export default function ChooseLectures() {
	const [selected, setSelected] = useState([])
	const [category, setCategory] = useState('Math')
	const [subjects, setSubjects] = useState([])

	useEffect(() => {
		LectureStorage.getLectures().then((lec) => {
			setSelected(lec)
		})
	}, [])

	useEffect(() => {
		if (category === '') {
			setSubjects([])
		} else {
			setSubjects(lectures.find((lecture) => lecture.title === category).subjects)
		}
	}, [category])

	function handlePress(lecture) {
		if (selected.includes(lecture)) {
			setSelected(selected.filter((item) => item !== lecture))
		} else {
			setSelected([...selected, lecture])
		}
	}

	useEffect(() => {
		LectureStorage.setLectures(selected)
	}, [selected])

	const width = Dimensions.get('window').width

	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
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
				<View style={styles.picker}>
					<LecturePicker selectedValue={category} onValueChange={(c) => setCategory(c)} />
				</View>
				<View style={styles.lectures}>
					{subjects.map((lecture, index) => {
						return (
							<Pressable
								onPress={() => handlePress(lecture)}
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
								<Text style={{ textAlign: 'center' }}>{lecture}</Text>
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
	picker: {
		marginBottom: 8,
		backgroundColor: '#fff',
		borderRadius: 8,
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
