const styles = {
  content: {
    borderRadius: "6px",
    overflow: "hidden",
    mx: "16px",
  },
  header: {
    borderBottom: "1px solid",
    fontWeight: "medium",
  },
  body: {
    py: "30px",
  },
  grid: {
    templateColumns: "repeat(12,1fr)",
    gap: "15px",
  },
  grid__item: {
    colSpan: {
      base: 6,
      sm: 3,
    },
    borderRadius: "3px",
    cursor: "pointer",
  },
  text: {
    fontSize: "14px",
    fontWeight: "normal",
    textAlign: "center" as const,
    py: "10px",
    px: {
      base: "16px",
      lg: "24px",
    },
  },
  close__btn: {
    _focusVisible: {
      boxShadow: "unset",
    },
  },
};

export default styles;
