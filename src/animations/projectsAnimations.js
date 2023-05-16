export default {
  body: {
    hidden: {
      x: "-50vw",
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 1.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      x: "-50vw",
      transition: {
        ease: "easeInOut",
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
    },
    animate: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 1.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      zIndex: 40,
      x: "150vw",
      transition: {
        ease: "easeInOut",
        duration: 1.5,
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
        delay: 3,
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
  fade: {
    hidden: {
      zIndex: 0,
      opacity: 0,
    },
    animate: {
      zIndex: 30,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 3,
      },
    },
    exit: {
      opacity: 0,
      zIndex: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  },
};
