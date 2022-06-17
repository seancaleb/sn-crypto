import { As, Grid } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
  [props: string]: any;
};

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <Grid {...styles.grid} {...props}>
      {children}
    </Grid>
  );
};

export default Section;

const styles = {
  grid: {
    as: "section" as As<any>,
    templateColumns: "repeat(12,1fr)",
    gap: {
      base: "20px",
      lg: "30px",
    },
    mb: { base: "80px", md: "120px" },
    px: { base: "16px", md: "32px" },
  },
};
