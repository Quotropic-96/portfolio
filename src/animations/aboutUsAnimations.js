export default {
  body: {
    hidden: {
      x: "50vw",
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
      x: "50vw",
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  },
  photo: {
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
  caption: {
    hidden: {
      y: "50vh",
      rotate: -90,
    },
    animate: {
      y: 0,
      rotate: -90,
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
      y: "50vh",
      rotate: -90,
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
