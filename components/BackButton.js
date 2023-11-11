import { Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function BackButton() {
	return (
		<Pressable
			style={{
				paddingLeft: 12,
			}}
			onPress={() => router.back()}
		>
			<Entypo name="chevron-left" size={32} />
		</Pressable>
	)
}
