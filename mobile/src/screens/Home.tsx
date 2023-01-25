import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'


import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";


const weekDay = ['D','S','T','Q','Q','S','S']
const dateFromYearStart = generateDatesFromYearBeginning()
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - dateFromYearStart.length;

export function Home() {

    const { navigate } = useNavigation();

    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />
            <View className="flex-row mt-6 mb-6">
                {
                    weekDay.map((weekDay, i ) => (
                        <Text 
                            key={`${weekDay} - ${i}`}
                            className="text-zinc-400 text-xl font-bold text-center mx-1"
                            style={{ width: DAY_SIZE }}
                        >
                            {weekDay}
                        </Text>
                    ))
                }
            </View>
            <ScrollView
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {{ paddingBottom:100 }} 
            >
                <View className="flex-row flex-wrap">
                    {
                        dateFromYearStart.map(date => (
                            <HabitDay 
                                key={date.toISOString()}
                                onPress={() => navigate('habit', {date: date.toISOString() })}
                            />
                        ))
                    }

                    {
                        amountOfDaysToFill > 0 && Array
                        .from({ length: amountOfDaysToFill })
                        .map((_, index) => (
                            <View
                                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                                style = {{ width: DAY_SIZE, height: DAY_SIZE}}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}