const ProjectsTest = () => {
  return (
    <div style={styles.container}>
      <div style={styles.frameContainer}>
        <div style={styles.header}>
          <div style={styles.dot} />
          <div style={styles.dot} />
          <div style={styles.dot} />
        </div>
        <iframe src='https://quotropic-96.github.io/console.fly/' style={styles.frame}></iframe>
      </div>
    </div>
  )
};

const frameHeight = '80vh';
const frameWidth = 'calc(80vh * 16 / 9)';
const frameThick = 'calc(80vh * 1.5 /100)';
const headerHeight = 'calc(80vh * 0.5 / 16)';
const dotSize = 'calc(80vh * 0.25 / 16)';

const styles = {
  container: {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameContainer: {
    position: 'relative',
    width: frameWidth,
    height: `calc(${frameHeight} + ${headerHeight})`,
    backgroundColor: 'gray',
    borderRadius: '10px',
    overflow: 'hidden',
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    width: '100%',
    height: headerHeight,
    backgroundColor: 'gray',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    backgroundColor: 'white',
    borderRadius: '50%',
    marginRight: '5px',
  },
  frame: {
    width: '100%',
    height: frameHeight,
    borderRadius: '10px',
    borderTop: 'none',
    border: '5px solid gray'
  },
}

export default ProjectsTest;
