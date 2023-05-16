export default {
  body: {
    hidden: {
      x: "-50vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  },
  simulator: {
    hidden: {
      scale: 0,
      zIndex: 10,
    },
    animate: {
      scale: 1,
      zIndex: 15,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  },
  blob: {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: .5,
        duration: 1.5,
      },
    },
  },
};
