import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Product from "../../Discovery/Products/Product";
import ListOfProducts from "../../Discovery/Products/ListOfProducts";

class ListOfSavedItems extends Component {
    render() {
        return (
            <ListOfProducts
                products={[
                    {_id: 1, price: "$12.30", category:"soda", name: "coca cola", distance: "0,7"},
                    {_id: 2, price: "$12.30", category:"soda", name: "coca cola", distance: "0,7"},
                    {_id: 3, price: "$12.30", category:"soda", name: "coca cola", distance: "0,7"}
                ]}
            />
        );
    }
}

export default ListOfSavedItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

