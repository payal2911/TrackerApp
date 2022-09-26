import {View, Text, StyleSheet} from "react-native";
import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput";

function RecentExpenses () {
    return(
       <ExpensesOutput expensesPeriod="Last 7 Days" />
    );
}

export default RecentExpenses ;