import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Grid,
  Text,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { Currency } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateCurrency } from "../../features/filteredCurrency/filteredCurrencySlice";
import styles from "./CurrencyModal.styles";

type CurrencyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CurrencyModal = ({ isOpen, onClose }: CurrencyModalProps) => {
  const currencies = useAppSelector((state) => state.currencies.currencies);
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("#eee", "#333");
  const color = useColorModeValue("gray.700", "white");
  const bgHover = useColorModeValue("rgba(216, 68, 83, 0.25)", "whiteAlpha.50");
  const dispatch = useAppDispatch();

  const handleClick = (currency: Currency) => {
    dispatch(updateCurrency(currency));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent {...styles.content}>
        <ModalHeader {...styles.header} bg={bg} borderBottomColor={borderColor}>
          <Text>Choose a currency</Text>
        </ModalHeader>
        <ModalCloseButton {...styles.close__btn} />
        <ModalBody {...styles.body} bg={bg}>
          <Grid {...styles.grid}>
            {currencies?.map((currency) => {
              return (
                <GridItem
                  key={nanoid()}
                  {...styles.grid__item}
                  _hover={{ bg: bgHover }}
                  onClick={() => handleClick(currency)}
                >
                  <Text {...styles.text} color={color}>
                    {currency.name} - {currency.symbol}
                  </Text>
                </GridItem>
              );
            })}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CurrencyModal;
