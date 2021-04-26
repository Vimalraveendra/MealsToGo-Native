import React,{useContext,useState} from 'react';
import {Searchbar} from 'react-native-paper'
import { set } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/restaurants/location/location.context';

 const SearchContainer =styled.View`
  padding:${props=>props.theme.space[3]}
`;
const Search = ()=>{   
    const {keyword,search} = useContext(LocationContext) 
    const [searchKeyword,setSearchKeyword] = useState(keyword)
    return (
        <SearchContainer >
          <Searchbar
           placeholder="Search for a location" 
           value={searchKeyword}
           onSubmitEditing={()=>search(searchKeyword)}
           onChangeText={(text)=>{
            if(!text) return;
            setSearchKeyword(text)
           }}
           />
        </SearchContainer>

    )
}

export default Search;