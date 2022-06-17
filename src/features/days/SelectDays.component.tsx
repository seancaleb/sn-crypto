import { As, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { Day } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateSelectedDay } from "./daysSlice";

const SelectDays = () => {
  const { days, selected } = useAppSelector((state) => state.days);
  const dispatch = useAppDispatch();
  const bg = useColorModeValue("rgba(216, 68, 83, 0.25)", "rgba(216, 68, 83, 0.5)");
  const color = useColorModeValue("brand.secondary", "white");

  const handleClick = (day: Day) => {
    dispatch(updateSelectedDay(day));
  };

  return (
    <Flex {...styles.container} borderColor={bg}>
      {days.map((day) => {
        return (
          <Text
            key={nanoid()}
            onClick={() => handleClick(day)}
            {...styles.text}
            bg={day.value === selected.value ? "brand.secondary" : "transparent"}
            color={day.value === selected.value ? "white" : color}
            _hover={{
              bg: day.value === selected.value ? "brand.secondary" : "rgba(216, 68, 83, 0.25)",
            }}
          >
            {day.label}
          </Text>
        );
      })}
    </Flex>
  );
};

export default SelectDays;

const styles = {
  container: {
    justifyContent: "center",
    maxW: {
      base: "100%",
      sm: "fit-content",
    },
    mx: "auto",
    gap: "5px",
    px: "20px",
    py: "5px",
    borderRadius: "3px",
    border: "1px solid",
  },
  text: {
    as: "button" as As<any>,
    fontSize: " 11px",
    px: {
      base: "12px",
      sm: "16px",
      lg: "20px",
    },
    py: "8px",
    borderRadius: "3px",
    fontWeight: "medium",
    letterSpacing: ".5px",
  },
};
