import {View, Text, StyleSheet} from "react-native";
import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";

function  AllExpenses () {
    return(
        <ExpensesOutput expensesPeriod="Total" />
    );
}

export default AllExpenses;