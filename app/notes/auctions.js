import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

// components
import BackButton from '../../components/BackButton'

export default function share() {
	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					presentation: 'modal',
					headerTitle: 'Auctions',
					headerLeft: () => <BackButton />,
				}}
			/>
			<Text>Share</Text>
		</View>
	)
}
