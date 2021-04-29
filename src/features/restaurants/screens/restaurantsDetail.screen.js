import React,{useState} from 'react';
import {ScrollView } from 'react-native'
import { List } from 'react-native-paper';
import RestaurantsInfoCard from '../components/restaurants-info-card.component'
import {SafeArea} from '../../../components/utility/safe-area.component'

const RestaurantsDetailScreen=({route})=>{
    const [breakfastExpanded, setBreakfastExpanded] = useState(true);
    const [lunchExpanded, setLunchExpanded] = useState(true);
    const [dinnerExpanded, setDinnerExpanded] = useState(true);
    const [drinksExpanded, setDrinksExpanded] = useState(true);
    const {restaurant} = route.params


    return(
         <SafeArea>
          <RestaurantsInfoCard restaurant={restaurant}/>
             <ScrollView>
                    <List.Accordion
                        title="Breakfast"
                        left={props => <List.Icon {...props} icon="bread-slice" />}
                        expanded={breakfastExpanded}
                        onPress={()=>setBreakfastExpanded(!breakfastExpanded)}
                        >
                        <List.Item title="Eggs Benedict" />
                        <List.Item title="Classic Breakfast" />
                        
                    </List.Accordion>

                    <List.Accordion
                        title="Lunch"
                        left={props => <List.Icon {...props} icon="hamburger" />}
                        expanded={lunchExpanded}
                        onPress={()=>setLunchExpanded(!lunchExpanded)}>
                        <List.Item title="Burger w/ Fries" />
                        <List.Item title="Steak Sandwich" />
                        <List.Item title="Mushroom Soup" /> 
                    </List.Accordion>
                    <List.Accordion
                        title="Dinner"
                        left={props => <List.Icon {...props} icon="food" />}
                        expanded={dinnerExpanded}
                        onPress={()=>setDinnerExpanded(!dinnerExpanded)}>
                        <List.Item title="Spaghetti Bolognese" />
                        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                        <List.Item title="Steak Frites" />
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        left={props => <List.Icon {...props} icon="cup" />}
                        expanded={drinksExpanded}
                        onPress={()=>setDrinksExpanded(!drinksExpanded)}>
                        <List.Item title="Coffee" />
                        <List.Item title="Tea" />
                        <List.Item title="Modelo" />
                        <List.Item title="Coke" />
                        <List.Item title="Fanta" />
                    </List.Accordion>
                    </ScrollView>
          </SafeArea>
    )
}


export default RestaurantsDetailScreen;