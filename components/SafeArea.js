import { View, StyleSheet } from 'react-native'

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SafeArea({ children }) {
	const insets = useSafeAreaInsets()
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, justifyContent: 'center' }} resizeMode="cover">
				<View style={styles.backgroundFront}></View>
				<SafeAreaProvider>
					<View style={(styles.container, { paddingTop: insets.top + 16 })}>{children}</View>
				</SafeAreaProvider>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	backgroundFront: {
		backgroundColor: '#F8F8F8',
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		opacity: 0.7,
	},
	defaultStyles: {
		color: '#fff',
	},
})
