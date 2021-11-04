const setHeight = () => {
  document.documentElement.style.setProperty(
    "--height",
    `${window.innerHeight}px`
  );
};

export default setHeight;
