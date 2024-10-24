import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actions-sheet'

const WithdrawRequestDrawer = () => {
    return (
        <ActionSheet>
            <View className='py-12 bg-red-400'>
                <Text>WithdrawRequestDrawer</Text>
            </View>
        </ActionSheet>
    )
}

export default WithdrawRequestDrawer