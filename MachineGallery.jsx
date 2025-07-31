import React from 'react';

function MachineGallery() {
  const machines = ['jcb.jpg', 'volvo.jpg', 'trala.jpg', 'pickup.jpg'];
  return (
    <div>
      {machines.map((src, i) => (
        <img key={i} src={src} alt={`Machine ${i + 1}`} />
      ))}
    </div>
  );
}

export default MachineGallery;
