import React from "react";
import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./../redux/actions";
import rootReducer from "./../redux/reduser";

function FlatLists() {
  const { getdata } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <View style={{ width: "100%", marginTop: 30 }}>
      <FlatList
        data={getdata}
        renderItem={(item) => {
          return (
            <View style={styles.box} key={item.item.id}>
              <Image
                style={styles.avatar}
                source={require("./../../assets/avatar.png")}
              />
              <View style={styles.info}>
                <Text style={styles.p}>Name : {item.item.name}</Text>
                <Text style={styles.p}>User Name : {item.item.username}</Text>
                <Text style={styles.p}>Email Adress : {item.item.email}</Text>
                <Text style={styles.p}>Phone Namber : {item.item.phone}</Text>
                <Text style={styles.p}>Website : {item.item.website}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          index.toString();
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  box: {
    marginTop: 15,
    padding: 15,
    marginVertical: 20,
    width: "70%",
    backgroundColor: "#fafafa",
    shadowColor: "#212121",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
    alignSelf: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  p: {
    color: "#354665",
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default FlatLists;
