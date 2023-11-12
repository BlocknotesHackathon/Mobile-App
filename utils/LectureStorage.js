import AsyncStorage from '@react-native-async-storage/async-storage'

export default class LectureStorage {
	static async getLectures() {
		try {
			const value = await AsyncStorage.getItem('lectures')
			if (value !== null) {
				return JSON.parse(value)
			}
		} catch (e) {
			console.log(e)
		}
	}

	static async setLectures(lectures) {
		try {
			await AsyncStorage.setItem('lectures', JSON.stringify(lectures))
		} catch (e) {
			console.log(e)
		}
	}
}
