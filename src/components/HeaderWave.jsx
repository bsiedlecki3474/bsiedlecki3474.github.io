// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections

const HeaderWave = () => {
  const path = 'M-20.59,59.72 C169.58,171.22 344.52,-110.02 610.32,189.97 L500.00,150.00 L0.00,150.00 Z';
  return <div style={{ height: '150px', width: '100%', overflow: 'hidden', position: 'absolute', bottom: 0 }} >
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
      <path d={path} style={{ stroke: 'none', fill: '#fff' }}></path>
    </svg>
  </div>
}

export default HeaderWave;