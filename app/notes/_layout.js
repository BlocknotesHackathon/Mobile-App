import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarLabelStyle: {
					display: 'none',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => {
						return <Entypo size={24} name="home" color={focused && '#2e3192'} />
					},
				}}
			/>
			<Tabs.Screen
				name="share"
				options={{
					tabBarLabel: 'Share',
					tabBarIcon: ({ focused }) => {
						return <Entypo size={24} name="plus" color={focused && '#2e3192'} />
					},
				}}
			/>
			<Tabs.Screen
				name="auctions"
				options={{
					tabBarLabel: 'Auctions',
					tabBarIcon: ({ focused }) => {
						return <Entypo size={24} name="list" color={focused && '#2e3192'} />
					},
				}}
			/>
		</Tabs>
	)
}
