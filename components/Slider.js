import Swiper from 'react-native-swiper'
import { View, Image, Dimensions, StyleSheet } from 'react-native'
import AnnounceImage1 from '../assets/announces/1.png'
import AnnounceImage2 from '../assets/announces/2.png'
import AnnounceImage3 from '../assets/announces/3.png'

const announces = {
	1: AnnounceImage1,
	2: AnnounceImage2,
	3: AnnounceImage3,
}

export default function Slider() {
	const width = Dimensions.get('window').width

	return (
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
	)
}

const styles = StyleSheet.create({
	announceImage: {
		width: '100%',
		borderRadius: 8,
	},
})
