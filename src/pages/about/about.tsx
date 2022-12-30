import React from 'react';

function About() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center font-bold mb-6">About Us</h2>
        <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Nam vel consequat nisi. Vivamus ullamcorper dui turpis, eu pretium massa aliquet vel.</p>
        <p className="text-xl mb-8">Donec non elit quis velit consectetur fermentum. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
      </div>
    </section>
  );
}

export default About;