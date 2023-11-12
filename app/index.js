import { View, Text, Pressable, ImageBackground, StyleSheet, Image } from 'react-native'
import { router } from 'expo-router'

import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native'
import { useEffect } from 'react'

import Background from '../assets/background.png'
import Logo from '../assets/logo_white.png'
import SafeArea from '../components/SafeArea'

const projectId = 'b8451f154ab353ca87425174383cae84'

const providerMetadata = {
	name: 'BLOCKNOTES',
	description: 'Lecture Notes in Blockchain',
	url: 'exp://192.168.1.159:8081',
	icons: ['https://your-project-logo.com/'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
}
export default function Home() {
	const { open, isConnected, address, provider } = useWalletConnectModal()
	useEffect(() => {
		if (isConnected) {
			//provider?.disconnect()
			router.replace('/main')
		}
	})

	return (
		<SafeArea>
			<ImageBackground source={Background} style={styles.background}>
				<WalletConnectModal
					projectId={projectId}
					providerMetadata={providerMetadata}
					accentColor="#2e3192"
					themeMode="light"
				/>
				<View style={styles.center}>
					<Image source={Logo} style={{ width: 300, height: 100, resizeMode: 'contain' }} />
				</View>
				<View style={styles.row}>
					<Text style={styles.bigtext}>Gain financial freedom while studying</Text>
				</View>
				<Pressable style={styles.button} onPress={open}>
					<Text style={styles.button.text}>Connect Wallet</Text>
				</Pressable>
			</ImageBackground>
		</SafeArea>
	)
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},

	button: {
		backgroundColor: '#787ff6',
		padding: 12,
		borderRadius: 8,
		alignItems: 'center',
		marginHorizontal: 96,
		marginTop: 64,
		text: {
			color: '#fff',
		},
	},
	bigtext: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 24,
	},
	center: {
		alignItems: 'center',
		marginBottom: 24,
		marginTop: 64,
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 24,
	},
})
