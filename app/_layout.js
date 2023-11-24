import 'text-encoding-polyfill'
import 'react-native-gesture-handler'
import 'text-encoding'
import '../utils/crypto-polyfill'
import { Stack } from 'expo-router'

import { WagmiConfig, configureChains, createConfig, sepolia } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import '@walletconnect/react-native-compat'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'

const projectId = 'b8451f154ab353ca87425174383cae84'

const metadata = {
	name: 'Web3Modal RN',
	description: 'Web3Modal RN Example',
	url: 'https://web3modal.com',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[sepolia],
	[alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()]
)

const config = createConfig({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
		new CoinbaseWalletConnector({
			chains,
			options: {
				appName: 'wagmi',
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				projectId: 'b8451f154ab353ca87425174383cae84',
			},
		}),
		new InjectedConnector({
			chains,
			options: {
				name: 'Injected',
				shimDisconnect: true,
			},
		}),
	],
	publicClient,
	webSocketPublicClient,
})

createWeb3Modal({
	projectId,
	chains,
	wagmiConfig: defaultWagmiConfig({ chains, projectId, metadata }),
})

export default function Layout() {
	return (
		<WagmiConfig config={config}>
			<Web3Modal />
			<Stack screenOptions={{ headerShown: false }} />
		</WagmiConfig>
	)
}
