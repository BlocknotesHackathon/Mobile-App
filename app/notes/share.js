import { useEffect, useState } from 'react'
import { Text, Pressable, Image, View, StyleSheet, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Stack } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

import placeholderImage from '../../assets/placeholder.png'

import BackButton from '../../components/BackButton'

import LecturePicker from '../../components/Picker'
import { Picker } from '@react-native-picker/picker'

export default function share() {
	const [image, setImage] = useState(null)
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const [category, setCategory] = useState('Math')
	const [subcategory, setSubcategory] = useState('')
	const [subjects, setSubjects] = useState([])

	useEffect(() => {
		if (category === '') {
			setSubjects([])
		} else {
			setSubjects(lectures.find((lecture) => lecture.title === category).subjects)
		}
	}, [category])

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			//aspect: [3, 4],
			quality: 1,
		})

		if (!result.canceled) {
			setWidth(result.assets[0].width / 10)
			setHeight(result.assets[0].height / 10)
			setImage(result.assets[0].uri)
		}
	}

	const handleSubmit = () => {
		console.log('submit')
	}

	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					presentation: 'modal',
					headerTitle: 'Share',
					headerLeft: () => <BackButton />,
				}}
			/>

			<View style={styles.container}>
				{!image && (
					<View>
						<Image source={placeholderImage} style={{ ...styles.image, width: 210, height: 297 }} />
						<Pressable style={styles.button} onPress={pickImage}>
							<Text style={styles.button.text}>Choose a Image</Text>
						</Pressable>
					</View>
				)}
				{image && (
					<View>
						<Image source={{ uri: image }} style={{ ...styles.image, width, height }} />
						<View>
							<View style={styles.inputcontainer}>
								<Text>Title</Text>
								<TextInput style={styles.titleInput} onChangeText={setTitle} value={title} />
							</View>
							<View style={styles.inputcontainer}>
								<Text>Description</Text>
								<TextInput
									style={styles.descriptionInput}
									onChangeText={setDescription}
									value={description}
									multiline={true}
								/>
							</View>
							<LecturePicker selectedValue={category} onValueChange={(c) => setCategory(c)} />
							{category.length > 0 && (
								<Picker selectedValue={subcategory} onValueChange={(c) => setSubcategory(c)}>
									{subjects.map((subject, index) => {
										return <Picker.Item label={subject} value={subject} key={index} />
									})}
								</Picker>
							)}

							<Pressable style={styles.button} onPress={handleSubmit}>
								<Text style={styles.button.text}>Share</Text>
							</Pressable>
						</View>
					</View>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 32,
	},
	button: {
		marginHorizontal: 32,
		borderRadius: 8,
		backgroundColor: '#2e3192',
		padding: 16,

		text: {
			color: '#fff',
			textAlign: 'center',
		},
	},
	image: {
		marginTop: 32,
		marginBottom: 16,
		alignSelf: 'center',
	},

	titleInput: {
		borderWidth: 1,
		borderColor: '#2e3192',
		borderRadius: 8,
		padding: 8,
	},

	descriptionInput: {
		borderWidth: 1,
		borderColor: '#2e3192',
		borderRadius: 8,
		padding: 12,
	},

	inputcontainer: {
		marginBottom: 16,
	},
})
