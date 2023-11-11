import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useWalletConnectModal } from '@walletconnect/modal-react-native'
import { router } from 'expo-router'

export default function Header() {
	const { address } = useWalletConnectModal()

	return (
		<View style={styles.topbar}>
			<Pressable onPress={() => router.replace('/')}>
				<Image
					source={require('../assets/icon.png')}
					style={{
						width: 40,
						height: 40,
					}}
				/>
			</Pressable>
			<Pressable onPress={() => router.push('/menu')}>
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
	)
}

const styles = StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},

	topbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
