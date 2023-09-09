import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [value, setvalue] = useState("")
  const [calculatedValue, setCalculatedValue] = useState("")
  const getValue = (e) => {
    var getValue = value + e
    setvalue(getValue)
    console.log(value)
  }
  const calculate = () => {
    try {
      const calculatedValue = eval(value);
      setvalue(calculatedValue)
      setCalculatedValue(calculatedValue)
    } catch (error) {

    }
  }
  const goback = () => {
    var ans = value.toString();
    try {
      slicedAns = ans.slice(0, -1);
      setvalue(slicedAns)
      if (value == "") {
        setCalculatedValue("")
      }
      else if (value == "infinity") {
        setCalculatedValue("")
      }

    } catch (error) {
      console.log(error);
    }
  }

  const reset = () => {
    setvalue("")
    setCalculatedValue("")
  }

  useEffect(() => {
    try {
      if (!isNaN(eval(value))) {
        setCalculatedValue(eval(value))
      }
    } catch (error) {
      console.log(error)
    }
  }, [value])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#3e4246"
        color="white"
      />
      <View style={styles.container}>
        <View style={styles.display}>
            <Text style={{ color: "white", fontSize: 50 }}>{value}</Text>
            {calculatedValue && <Text style={{ color: "white", fontSize: 30,opacity:0.5 }}>= {calculatedValue}</Text>}
        </View>
        <View style={styles.keysConatiner}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => { reset() }} style={[styles.operator, { height: 40, borderRadius: 5, backgroundColor:"#daf2b4" }]}><Text style={styles.operatorColor}>AC</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { getValue("(") }} style={{ flex: 1, alignItems: "center", justifyContent: 'center', height: 40, borderRadius: 6, borderWidth: 1, borderColor: "#7ad6dc" }}><Text style={{ color: "#7ad6dc" }}>(</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { getValue(")") }} style={{ flex: 1, alignItems: "center", justifyContent: 'center', height: 40, borderRadius: 6, borderWidth: 1, borderColor: "#7ad6dc" }}><Text style={{ color: "#7ad6dc" }}>)</Text></TouchableOpacity>
          </View>
          <View style={[styles.row, { flex: 3 }]}>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => { getValue("7") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>7</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("4") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>4</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("1") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>1</Text></TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => { getValue("8") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>8</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("5") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>5</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("2") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>2</Text></TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => { getValue("8") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>9</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("6") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>6</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("3") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => { getValue("/") }} style={styles.operator}><Text style={styles.operatorColor}>/</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("+") }} style={[styles.operator, { flex: 2 }]}><Text style={styles.operatorColor}>+</Text></TouchableOpacity>

            </View>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => { getValue("*") }} style={styles.operator}><Text style={styles.operatorColor}>X</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("-") }} style={styles.operator}><Text style={styles.operatorColor}>-</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { getValue("%") }} style={styles.operator}><Text style={styles.operatorColor}>%</Text></TouchableOpacity>
            </View>

          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => { getValue("0") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { getValue(".") }} style={styles.numberKeys}><Text style={styles.numberKeysColor}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { goback() }} style={[styles.operator, { height: 60 }]}><Text style={styles.operatorColor}>⬅</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { calculate() }} style={[styles.operator, { flex: 2, backgroundColor: "#daf2b4", height: 60 }]}><Text style={styles.operatorColor}>=</Text></TouchableOpacity>
          </View>

        </View>
        <View></View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e4246",
    gap: 10
  },
  display: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
  },
  keysConatiner: {
    flex: 1,
    borderColor: "white",
    borderTopWidth: 1,
    padding: 10
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: "center"
  },
  column: {
    flex: 1,
    gap: 10
  },
  numberKeys: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',

  },
  numberKeysColor: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 22
  },
  operator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7ad6dc",
    borderRadius: 50
  },
  operatorColor: {
    color: "black",
    fontWeight: "600",
    fontSize: 22
  }

});
