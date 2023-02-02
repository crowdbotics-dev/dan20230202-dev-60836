import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      padding: 10,
      backgroundColor: "#f0f0f1",
      gap: 0
    }}>     
          <View style={styles.row1}><Text style={styles.BhiCbrPA}>somting</Text></View>
          <View style={styles.row2}></View>
          <View style={styles.row3}><View style={styles.mmGNicHj}><View style={styles.vqZYYLAD}></View><View style={styles.cmBMMbpm}><Text style={styles.nsNNEGQr}>Lorem ipsum…</Text></View><View style={styles.JndKZbyM}></View></View><View style={styles.bofcGXan}></View></View>  
      <View style={styles.YAvncCtf}><View style={styles.gATSUTgy}><View style={styles.TnWEZuZT}></View><View style={styles.rINrZYlQ}><Text style={styles.JQMqqcwy}>START</Text></View><View style={styles.QrwOLBwN}></View></View><View style={styles.OohoBgSB}></View></View><View style={styles.tzalHZeb}><View style={styles.sKTJSTrx}><View style={styles.XWPvVPUK}><Text style={styles.CLahLZTQ}>START!!</Text></View></View><View style={styles.oJJkQXZM}><View style={styles.zIdfSvSc}></View><View style={styles.qQadNSPG}></View></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 2
  },
  row3: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  YAvncCtf: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  tzalHZeb: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  sKTJSTrx: {
    height: 60,
    width: 140,
    backgroundColor: "#f19d9d",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1",
    alignItems: "start",
    justifyContent: "flex-start"
  },
  oJJkQXZM: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1"
  },
  BhiCbrPA: {
    width: 120,
    height: 55,
    lineHeight: 23,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center"
  },
  CLahLZTQ: {
    width: 140,
    height: 57,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center"
  },
  XWPvVPUK: {
    flex: 1
  },
  zIdfSvSc: {
    flex: 1
  },
  qQadNSPG: {
    flex: 1
  },
  gATSUTgy: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "column",
    flex: "1"
  },
  bDJzWqCF: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  OohoBgSB: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  aRmBgILJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  TnWEZuZT: {
    flex: 1
  },
  rINrZYlQ: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  QrwOLBwN: {
    flex: 1
  },
  JQMqqcwy: {
    width: 45,
    height: 17,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  mmGNicHj: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "column",
    flex: "1"
  },
  bofcGXan: {
    height: 60,
    width: 140,
    backgroundColor: "#d54141",
    borderRadius: 0,
    color: "#777777"
  },
  vqZYYLAD: {
    flex: 1
  },
  cmBMMbpm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  JndKZbyM: {
    flex: 1
  },
  nsNNEGQr: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled7;