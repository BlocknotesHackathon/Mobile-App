import { Stack, router } from 'expo-router'
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Pressable } from 'react-native'
import SafeArea from '../components/SafeArea'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useWalletConnectModal } from '@walletconnect/modal-react-native'
import Swiper from 'react-native-swiper'

import AnnounceImage1 from '../assets/announces/1.png'
import AnnounceImage2 from '../assets/announces/2.png'
import AnnounceImage3 from '../assets/announces/3.png'

const announces = {
	1: AnnounceImage1,
	2: AnnounceImage2,
	3: AnnounceImage3,
}

export default function Main() {
	const { address } = useWalletConnectModal()
	const width = Dimensions.get('window').width

	function openmenu() {
		router.replace('/menu')
	}

	return (
		<SafeArea>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<View style={styles.container}>
				<View style={styles.topbar}>
					<Image
						source={require('../assets/icon.png')}
						style={{
							width: 40,
							height: 40,
						}}
					/>
					<Pressable onPress={openmenu}>
						<View style={{ ...styles.row }}>
							<Text
								style={{
									marginRight: 5,
								}}
								numberOfLines={1}
							>
								{address.substring(0, 7)}
							</Text>

							<MaterialCommunityIcons name="account-circle" size={24} color="black" />
						</View>
					</Pressable>
				</View>

				<View
					style={{
						width: width - 64,
						height: 175,
						marginTop: 12,
					}}
				>
					<Swiper style={{ borderRadius: 8 }} width={width - 64} height={175} showsPagination={false} loop autoplay>
						{[1, 2, 3].map((item, index) => {
							return (
								<View key={index}>
									<Image source={announces[item]} style={styles.announceImage} />
								</View>
							)
						})}
					</Swiper>
				</View>

				<View>
					<View style={{ ...styles.row, marginTop: 12 }}>
						<Text style={styles.ahref}>Paylaşımlarım</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} />
					</View>
					<ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<View style={styles.listitem}>
							<Pressable>
								<ImageBackground source={require('../assets/examplenote.jpg')} style={styles.noteImage}>
									<View style={styles.overlay}>
										<View style={styles.overlay.row}>
											<Text style={styles.overlay.text}>Türev İntegrale</Text>
											<View style={styles.row}>
												<MaterialCommunityIcons name="eye" size={12} style={styles.overlay.icon} />
												<Text style={styles.overlay.count}>101</Text>
											</View>
										</View>
									</View>
								</ImageBackground>
							</Pressable>
						</View>
					</ScrollView>
				</View>

				<View>
					<View style={{ ...styles.row, marginTop: 12 }}>
						<Text style={styles.ahref}>Son Cebir Notları</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} />
					</View>
					<ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<Pressable>
							<ImageBackground source={require('../assets/examplenote.jpg')} style={styles.noteImage}>
								<View style={styles.overlay}>
									<View style={styles.overlay.row}>
										<Text style={styles.overlay.text}>Cebirsel Bilmem Neler</Text>
										<View style={styles.row}>
											<MaterialCommunityIcons name="eye" size={12} style={styles.overlay.icon} />
											<Text style={styles.overlay.count}>101</Text>
										</View>
									</View>
								</View>
							</ImageBackground>
						</Pressable>
					</ScrollView>
				</View>
			</View>
		</SafeArea>
	)
}

const styles = StyleSheet.create({
	test: {
		borderWidth: 1,
		borderColor: 'red',
	},
	container: {
		paddingHorizontal: 32,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	wrapper: {},
	topbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	announceImage: {
		width: '100%',
		borderRadius: 8,
	},
	listitem: {
		marginRight: 10,
	},
	noteImage: {
		width: 150,
		height: 190,
	},
	ahref: {
		textDecorationLine: 'underline',
		color: '#2e3192',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.35)',
		height: '100%',
		width: '100%',

		row: {
			marginTop: 'auto',
			justifyContent: 'space-between',
			padding: 5,
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-end',
		},

		text: {
			marginTop: 'auto',
			padding: 5,
			color: 'white',
			fontSize: 12,
			maxWidth: 100,
		},

		count: {
			color: 'white',
		},

		icon: {
			color: 'white',
			marginRight: 2,
		},
	},
})
