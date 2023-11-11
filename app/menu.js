import { Pressable, View, Text, Button, ScrollView, StyleSheet, TextInput } from 'react-native'
import { Stack, router } from 'expo-router'
import menu from '../constants/menu'
import { Entypo } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import SafeArea from '../components/SafeArea'
export default function Menu() {
	const [input, setInput] = useState('')
	const [filter, setFilter] = useState(menu)

	function turnback() {
		router.replace('..')
	}

	useEffect(() => {
		const filteredItems = menu.filter((item) => item.title.toLowerCase().indexOf(input.toLowerCase()) !== -1)
		setFilter(filteredItems)
	}, [input])

	return (
		<View>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitleAlign: 'center',
					presentation: 'modal',
					headerTitle: 'Menu',
					headerLeft: () => (
						<Pressable onPress={turnback}>
							<Entypo name="chevron-left" size={32} />
						</Pressable>
					),
				}}
			/>
			<View style={styles.container}>
				<View style={styles.searchbar}>
					<TextInput onChangeText={setInput} value={input} style={styles.searchbar.input} placeholder="Search" />
				</View>
				<ScrollView>
					{filter.map((item, index) => {
						return (
							<Pressable key={index} style={styles.button} onPress={() => router.push(item.href)}>
								<Entypo name={item.icon} style={styles.starticon} size={24} />
								<View style={styles.menutexts}>
									<Text>{item.title}</Text>
									{item.description && item.description.length > 0 && (
										<Text style={styles.menutexts.desc}>{item.description}</Text>
									)}
								</View>
								<Entypo style={styles.endicon} name="chevron-right" size={24} />
							</Pressable>
						)
					})}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 32,
	},
	button: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5,
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 5,
	},
	menutexts: {
		display: 'flex',
		flexDirection: 'column',

		desc: {
			fontSize: 12,
		},
	},

	searchbar: {
		width: '100%',
		padding: 10,
		marginTop: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		marginBottom: 10,
	},
	starticon: {
		marginRight: 5,
	},
	endicon: {
		marginLeft: 'auto',
	},
})
