const styles = {
  container: {
    p: "20px",
    borderRadius: "3px",
    flexDir: "column" as const,
    gap: "10px",
    boxShadow: "sm",
  },
  stat: {
    flex: 1,
  },
  stat__number: {
    fontSize: "18px",
    fontWeight: "medium",
  },
  stat__label: {
    bgGradient: "linear(145deg, brand.primary, brand.secondary)",
    bgClip: "text",
    textTransform: "uppercase" as const,
    fontSize: "12px",
  },
  grid: {
    templateColumns: "repeat(12,1fr)",
    gap: {
      base: "10px",
      md: "20px",
    },
  },
};

export default styles;
