import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';

export default function Page() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />

                    <PopularJobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
