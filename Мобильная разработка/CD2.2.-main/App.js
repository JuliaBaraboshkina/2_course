
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1.8, bottom: 15, backgroundColor: 'white' }}>
      <Text style={{textAlign: 'center', top: 60, fontSize:19, fontWeight:'bold'}}>5 книжных новинок октября</Text>
    </View>
    <View style={{ flex: 3, backgroundColor: '#D3D3D3' }}>
      <Text style={{textAlign: 'center', top: 25, fontSize:19}}>«Кадиш.com» Натан Ингаланедер.{"\n"} Издательство «Книжники»</Text>
    </View>
    <View style={{ flex: 8, backgroundColor: '#808080' }}>
    <Text style={{marginStart:6,textAlign: 'center', top: 25, fontSize:16}}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.</Text>
    </View>
  </View>
  );
}
