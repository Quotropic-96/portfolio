export default {
  text: {
    hidden: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  },
  body: {
    hidden: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
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
        ease: "easeInOut",
        duration: 1.5,
        delay: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
      },
    },
  },
  menuItem: {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: .5,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 5.5,
      },
    },
  },
};
