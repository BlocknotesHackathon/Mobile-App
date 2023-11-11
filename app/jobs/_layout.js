import { Stack } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		/>
	)
}
