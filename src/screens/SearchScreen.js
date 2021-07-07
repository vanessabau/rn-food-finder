import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] =
    useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$' || '$$$$'
    // function will inspect the results and just return the ones with the apropriate results
    console.log(results);
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) =>
          setTerm(newTerm)
        }
        onTermSubmit={() => searchApi(term)}
        // onTermChange={setTerm}
        // onTermSubmit={searchApi}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Priciest"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
