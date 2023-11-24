import { View, Text, Pressable, ImageBackground, StyleSheet, Image } from 'react-native'
import { router } from 'expo-router'

import { useEffect } from 'react'

import Background from '../assets/background.png'
import Logo from '../assets/logo_white.png'
import SafeArea from '../components/SafeArea'

import { W3mButton } from '@web3modal/wagmi-react-native'

import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
export default function Home() {
	const { address, connector, isConnected } = useAccount()
	const { data: ensAvatar } = useEnsAvatar({ address })
	const { data: ensName } = useEnsName({ address })
	const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
	const { disconnect } = useDisconnect()

	useEffect(() => {
		if (isConnected) {
			router.replace('/main')
		}
	})

	return (
		<SafeArea>
			<ImageBackground source={Background} style={styles.background}>
				<View style={styles.center}>
					<Image source={Logo} style={{ width: 300, height: 100, resizeMode: 'contain' }} />
				</View>
				<View style={styles.row}>
					<Text style={styles.bigtext}>Gain financial freedom while studying</Text>
				</View>
				<W3mButton />

				{error && <Text>{error.message}</Text>}
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
