import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../Constants/Styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id : 'el',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-09-24')
    },

    {
        id : 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-10-10')
    },

    {
        id : 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2022-11-15')
    },
    {
        id : 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-12-15')
    },

    {
        id : 'e5',
        description: 'Another book',
        amount: 5.99,
        date: new Date('2022-11-25')
    },
    {
        id : 'e6',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-12-15')
    },

    {
        id : 'e7',
        description: 'Another book',
        amount: 5.99,
        date: new Date('2022-11-25')
    },
    {
        id : 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-12-15')
    },

    {
        id : 'e9',
        description: 'Another book',
        amount: 5.99,
        date: new Date('2022-11-25')
    },
    {
        id : 'e10',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-12-15')
    },

    {
        id : 'e11',
        description: 'Another book',
        amount: 5.99,
        date: new Date('2022-11-25')
    }
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}


export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop:24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});