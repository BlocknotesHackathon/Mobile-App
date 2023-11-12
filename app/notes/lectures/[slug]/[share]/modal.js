import React, { useState } from 'react'
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'

const CreateAuctionModal = ({ visible, onClose, onSubmit }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [startingPrice, setStartingPrice] = useState('')

	const handleSubmit = () => {
		// Validate form data
		if (!title || !description || !startingPrice) {
			alert('Please fill out all fields')
			return
		}

		// Submit form data
		onSubmit({
			title,
			description,
			startingPrice: parseFloat(startingPrice),
		})

		// Clear form data
		setTitle('')
		setDescription('')
		setStartingPrice('')
	}

	return (
		<Modal visible={visible} onRequestClose={onClose}>
			<View style={{ padding: 16 }}>
				<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Create Auction</Text>
				<TextInput
					placeholder="Title"
					value={title}
					onChangeText={setTitle}
					style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 8 }}
				/>
				<TextInput
					placeholder="Description"
					value={description}
					onChangeText={setDescription}
					style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 8 }}
				/>
				<TextInput
					placeholder="Starting Price"
					value={startingPrice}
					onChangeText={setStartingPrice}
					keyboardType="numeric"
					style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 16 }}
				/>
				<TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: 'blue', padding: 12, borderRadius: 4 }}>
					<Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Create Auction</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={onClose} style={{ marginTop: 16 }}>
					<Text style={{ color: 'blue', textAlign: 'center' }}>Cancel</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	)
}

export default CreateAuctionModal
