const LordIcon = ({ src,width='30px',height='30px' }) => {
    return (
      <lord-icon
        trigger="loop"
        src={src}
        stroke="60"
        target='div'
        colors="primary:#e8e230,secondary:#08a88a"
        style={{ width: width, height:height }}
      />
    );
  };
  
  export default LordIcon;
  