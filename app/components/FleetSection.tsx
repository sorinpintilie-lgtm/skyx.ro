'use client';

import DroneItem from './DroneItem';

const drones = [
  {
    name: 'DJI M300 RTK',
    image: '/m300-rtk_r1.600x600.png',
    description: 'Dronă profesională cu poziționare RTK pentru precizie la nivel de centimetru. Perfectă pentru topografie, cartografiere și inspecții.',
    specs: ['Autonomie de 55 minute', 'Rază de transmisie 15km', 'Rezistență IP45', 'Capabilități AI avansate'],
    side: 'right' as const,
  },
  {
    name: 'DJI Mini 3',
    image: '/DJI-Mini-3-(8)-min.png',
    description: 'Dronă compactă și ușoară, perfectă pentru fotografie aeriană și videografie. Portabilă și ușor de utilizat.',
    specs: ['Greutate sub 249g', 'Cameră 4K HDR', 'Autonomie 38 minute', 'Rezistență la vânt nivel 5'],
    side: 'left' as const,
  },
  {
    name: 'DJI M30T',
    image: '/M30T-RTK-2_1024x1024.png',
    description: 'Dronă industrială cu camere termice și zoom. Ideală pentru inspecții, căutare și salvare, și operațiuni de noapte.',
    specs: ['Cameră termică 640×512', 'Zoom optic 200x', 'Rezistență IP55', 'Funcționare -20°C to 50°C'],
    side: 'right' as const,
  },
];

export default function FleetSection() {
  return (
    <section id="fleet" className="relative min-h-[300vh]">
      <div className="sticky top-20 md:top-32 z-10 text-center py-8 md:py-12 px-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-shadow">Flota Noastră Avansată</h2>
        <p className="text-base md:text-xl text-gray-700 mt-2 md:mt-4">Drone profesionale pentru fiecare misiune</p>
      </div>
      <div className="relative">
        {drones.map((drone, index) => (
          <DroneItem key={index} name={drone.name} image={drone.image} description={drone.description} specs={drone.specs} side={drone.side} index={index} />
        ))}
      </div>
    </section>
  );
}