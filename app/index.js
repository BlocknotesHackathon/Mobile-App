import { View, Text, Pressable } from 'react-native'
import { Link, useRouter, Stack, router } from 'expo-router'
import SafeArea from '../components/SafeArea'

import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native'
import { useEffect } from 'react'

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
			router.replace('/main')
		}
	})

	return (
		<SafeArea>
			<WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<Text>Hello World!</Text>
			<Pressable onPress={open}>
				<Text>{isConnected ? 'View Account' : 'Connect'}</Text>
			</Pressable>
			<Pressable onPress={() => provider?.disconnect()}>
				<Text>disconnect</Text>
			</Pressable>
			<Text>{isConnected ? address : 'No Connected'}</Text>
		</SafeArea>
	)
}
