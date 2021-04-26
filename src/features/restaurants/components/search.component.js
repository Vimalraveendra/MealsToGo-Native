import React,{useContext,useState,useEffect} from 'react';
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

    useEffect(() => {
        search(searchKeyword)
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <SearchContainer >
          <Searchbar
           placeholder="Search for a location" 
           value={searchKeyword}
           onSubmitEditing={()=>search(searchKeyword)}
           onChangeText={(text)=>setSearchKeyword(text)}
           />
        </SearchContainer>

    )
}

export default Search;