export default {
  form: {
    hidden: {
      x: "100vw",
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
  iconLeft: {
    hidden: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 2,
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
  iconMid: {
    hidden: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 2.2,
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
  iconRight: {
    hidden: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        delay: 2.4,
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
};
