import { ScrollView, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';

import { BackButtom } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { Checkbox } from '../components/Checkbox';

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute()
  const { date } = route.params as Params;

  const parseDate = dayjs(date);
  const dayOfWeek = parseDate.format('dddd');
  const dayAndMonth = parseDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButtom />

        <Text className='mt-6 text-zinc-400 font-semibold text-base lowercase'>
          {dayOfWeek}
        </Text>

        <Text className='text-white font-extrabold text-3xl'>
          {dayAndMonth}
        </Text>

        <ProgressBar progress={30}/>

        <View className='mt-6'>
          <Checkbox
            title='Oi vidinha <3'
            checked={false}
          />

          <Checkbox
            title='Já dormiu?'
            checked={true}
          />

          <Checkbox
            title='<3<3<3<3<3'
            checked={true}
          />
        </View>
      </ScrollView>
    </View>
  )
}