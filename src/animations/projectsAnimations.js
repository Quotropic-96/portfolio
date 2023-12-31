export default {
  body: {
    hidden: {
      x: "-100vw",
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
    animate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  },
  popUp: {
    animate: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  },
};
