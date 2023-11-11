import { Picker } from '@react-native-picker/picker'
import lectures from '../constants/lectures'
const lecture_titles = lectures.map((lecture) => lecture.title)
export default function LecturePicker({ selectedValue, onValueChange }) {
	return (
		<Picker selectedValue={selectedValue} onValueChange={onValueChange}>
			{lecture_titles.map((title, index) => (
				<Picker.Item label={title} value={title} key={index} />
			))}
		</Picker>
	)
}
