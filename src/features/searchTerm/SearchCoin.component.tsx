import { SearchIcon } from "@chakra-ui/icons";
import {
  Center,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateSearchTerm } from "./searchTermSlice";

const SearchCoin = () => {
  const color = useColorModeValue("gray.600", "gray.300");
  const dispatch = useAppDispatch();
  const term = useAppSelector((state) => state.searchTerm.term);
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  useEffect(() => {
    if (!term) inputRef.current?.focus();
  }, [term]);

  useEffect(() => {
    dispatch(updateSearchTerm(null));
  }, [location, dispatch]);

  return (
    <InputGroup {...styles.input__group}>
      <InputLeftElement pointerEvents="none" children={<SearchIcon color={color} />} />
      <Input
        {...styles.input}
        ref={inputRef}
        color={color}
        value={term || ""}
        onChange={handleInputChange}
      />
      {term && (
        <Center {...styles.center} onClick={() => dispatch(updateSearchTerm(null))}>
          <CloseButton color={color} />
        </Center>
      )}
    </InputGroup>
  );
};

export default SearchCoin;

const styles = {
  input__group: {
    maxW: { base: "100%", lg: "450px" },
    alignSelf: "flex-end",
    pos: "relative" as const,
  },
  input: {
    _focus: {
      borderColor: "brand.primary",
      boxShadow: "0 0 0 .2px #DA4453",
    },
    borderRadius: "3px",
    placeholder: "Search coin name",
  },
  center: {
    pos: "absolute" as const,
    right: 1,
    top: 1,
    cursor: "pointer",
    zIndex: 69,
  },
};
