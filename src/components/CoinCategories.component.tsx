import { Badge, Flex, useColorModeValue } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";

type CoinCategoriesProps = {
  categories: string[] | undefined;
};

const CoinCategories = ({ categories }: CoinCategoriesProps) => {
  const bg = useColorModeValue("rgba(216, 68, 83, 0.25)", "rgba(216, 68, 83, 0.1)");

  return (
    <Flex alignItems="center" gap="10px" flexWrap="wrap">
      {categories?.map((category) => {
        if (category !== null) {
          return (
            <Badge key={nanoid()} {...styles.badge} bg={bg}>
              {category}
            </Badge>
          );
        }
      })}
    </Flex>
  );
};

export default CoinCategories;

const styles = {
  badge: {
    fontWeight: "medium",
    color: "brand.primary",
  },
};
