import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				tabBarLabelStyle: {
					display: 'none',
				},
			}}
		>
			<Tabs.Screen
				name="main"
				options={{
					href: '/main',
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => {
						return <Entypo size={24} name="home" color={focused && '#2e3192'} />
					},
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
					tabBarStyle: { display: 'none' },
				}}
			/>
			<Tabs.Screen
				name="menu"
				options={{
					href: null,
					tabBarStyle: { display: 'none' },
				}}
			/>

			<Tabs.Screen
				name="choose-lectures"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="wallet"
				options={{
					href: null,
				}}
			/>

			<Tabs.Screen
				name="share"
				options={{
					href: '/share',
					tabBarLabel: 'Share',
					tabBarIcon: ({ focused }) => {
						return <Entypo size={24} name="plus" color={focused && '#2e3192'} />
					},
				}}
			/>
			<Tabs.Screen
				name="auctions"
				options={{
					href: '/auctions',
					tabBarLabel: 'Auctions',
					tabBarIcon: ({ focused }) => {
						return <Entypo size={24} name="list" color={focused && '#2e3192'} />
					},
				}}
			/>
		</Tabs>
	)
}
