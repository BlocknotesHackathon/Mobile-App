import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import BackButton from '../../../components/BackButton'
function LecturePage() {
	const { slug } = useLocalSearchParams()

	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					headerTitle: slug,
					headerLeft: () => <BackButton />,
				}}
			/>
		</View>
	)
}

export default LecturePage
