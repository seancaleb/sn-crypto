import { Text, useDisclosure } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import { CurrencyModal } from "../../components";

const Currency = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const currency = useAppSelector((state) => state.filteredCurrency.currency);

  return (
    <>
      <Text {...styles.text} onClick={onOpen}>
        {currency?.name}
      </Text>
      <CurrencyModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Currency;

const styles = {
  text: {
    fontSize: "14px",
    cursor: "pointer",
    bgGradient: "linear(145deg, brand.primary, brand.secondary)",
    bgClip: "text",
  },
};
