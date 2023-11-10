import AsyncStorage from '@react-native-async-storage/async-storage'

export default class LectureStorage {
	static async getLectures() {
		const lectures = await AsyncStorage.getItem('lectures')
		if (lectures) {
			return JSON.parse(lectures)
		} else {
			return []
		}
	}

	static async setLectures(lectures) {
		await AsyncStorage.setItem('lectures', JSON.stringify(lectures))
	}
}
