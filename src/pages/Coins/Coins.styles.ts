import globalStyles from "../../theme/globalStyles";

const styles = {
  wrapper: {
    py: {
      base: "60px",
      "2xl": "110px",
    },
    flexDir: "column" as const,
    gap: "40px",
    maxW: "1440px",
    w: "100%",
    m: "auto",
    minH: "80vh",
  },
  section__heading: {
    fontSize: { base: "30px", sm: "36px" },
  },
  button__container: {
    mt: "40px",
    gap: "15px",
  },
  button: {
    ...globalStyles.button,
    flex: { base: 1, md: "unset" },
  },
};

export default styles;
