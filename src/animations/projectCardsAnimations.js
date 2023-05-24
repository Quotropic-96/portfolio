export default {
  card: {
    hidden: {
      maxHeight: "6rem",
    },
    animate: {
      maxHeight: "100vh",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      maxHeight: "6rem",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  },
  arrow: {
    hidden: {
      rotate: 0,
    },
    animate: {
      rotate: -90,
      x: -10,
      transition: {
        ease: "easeInOut",
        duration: 0.25,
      },
    },
    exit: {
      rotate: 0,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.25,
      },
    },
  },
};
