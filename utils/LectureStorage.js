import AsyncStorage from '@react-native-async-storage/async-storage'

async function setLectures(lectures) {
	await AsyncStorage.setItem('lectures', JSON.stringify(lectures))
}

async function getLectures() {
	const lectures = await AsyncStorage.getItem('lectures')
	if (lectures) {
		return JSON.parse(lectures)
	} else {
		return []
	}
}

module.exports = {
	setLectures,
	getLectures,
}
