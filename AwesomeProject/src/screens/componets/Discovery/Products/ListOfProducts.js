import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Product from "./Product";
import PostSummary from "../../Forum/components/PostSummary";
import {connect} from "react-redux";
import {fetchProducts} from "../../../../redux/actions/productActions";

class ListOfProducts extends Component {

    async componentDidMount() {
        this.props.fetchProducts(this.props.productType);
    }

    render() {
        return (
            <View>
                {console.log("redux state")}
                {console.log(this.props.reduxState)}
                {
                    this.props.reduxState[this.props.productType].products.map((product) => (
                        <Product
                            key={product._id}
                            price={product.retail_price}
                            category={product.categories[0]}
                            name={product.name}
                            distance={"0.7"}
                        />
                    ))

                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.productsReducer
    }
};


export default connect(mapStateToProps, {fetchProducts}) (ListOfProducts);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

