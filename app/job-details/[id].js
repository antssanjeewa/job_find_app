import { Stack, router, useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, SafeAreaView, ScrollView, View } from 'react-native'
import { Company, JobTabs, ScreenHeaderBtn, Specifics, JobAbout, JobFooter } from '../../components'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES, icons } from '../../constants'
import { useState } from 'react'

const tabs = ["About", "Qualification", "Responsibility"];

const JobDetails = () => {

    const { id } = useLocalSearchParams();

    const { data, isLoading, error } = useFetch('job-details', {
        job_id: id,
    })

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = () => {
        switch (activeTab) {
            case "About":
                return <JobAbout info={data[0].job_description ?? "N/A"} />
                break;
            case "Qualification":
                return <Specifics title="Qualification" points={data[0].job_highlights?.Qualifications ?? "N/A"} />
                break;
            case "Responsibility":
                return <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ?? "N/A"} />
                break;
            default:
                break;
        }
        <View>

        </View>
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" handlePress={() => router.back()} />
                ),
                headerTitle: ""
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text> Something Wrong </Text>
                    // ) : data.length === 0 ? (
                    // <Text> No Data </Text>
                ) : (
                    <View style={{ flex: 1, padding: SIZES.medium, paddingBottom: 100 }}>
                        <Company
                            companyLogo={data[0]?.employer_logo}
                            jobTitle={data[0]?.job_title}
                            companyName={data[0]?.employer_name}
                            location={data[0]?.job_country}
                        />

                        <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

                        {displayTabContent()}

                    </View>
                )}
            </ScrollView>

            <JobFooter url={data[0].job_google_link ?? ''} />
        </SafeAreaView >
    )
}

export default JobDetails

