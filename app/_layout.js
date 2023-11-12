import { Stack } from 'expo-router'

import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'

const projectId = 'b8451f154ab353ca87425174383cae84'

// 2. Create config
const metadata = {
	name: 'BLOCKNOTES',
	description: 'Lecture Notes in Blockchain',
	url: 'https://web3modal.com',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
	projectId,
	chains,
	wagmiConfig,
})

export default function Layout() {
	return (
		<WagmiConfig config={wagmiConfig}>
			<Web3Modal />
			<Stack screenOptions={{ headerShown: false }} />
		</WagmiConfig>
	)
}
