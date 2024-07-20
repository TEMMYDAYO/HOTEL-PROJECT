/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },

  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage:
      {
        "moon-img":'url("./assets/Pictures/moon.jpg")',
        "mountain-img":'url("./assets/Pictures/mountains.jpg")',
        "flower-img":'url("./assets/Pictures/flowers.jpg")',
        "fern-img":'url("./assets/Pictures/fern.jpg")',
        "balloon-img":'url("./assets/Pictures/balloon.jpg")',
        "hotel-img":'url("./assets/Pictures/hotel.jpg")',
        "bedroom-img":'url("./assets/Pictures/bedroom.jpg")',
        "hotelhouse-img":'url("./assets/Pictures/hotelhouse.jpg")',
        "receptionist-img":'url("./assets/Pictures/receptionist.jpg")',
        "hotelroom-img":'url("./assets/Pictures/hotel-room.jpg")',
        "hotel1-img":'url("./assets/Pictures/hotel-1.jpg")',
        "hotel2-img":'url("./assets/Pictures/hotel-2.jpg")',
        "hotel3-img":'url("./assets/Pictures/hotel-3.jpg")',
        "hotel4-img":'url("./assets/Pictures/hotel-4.jpg")',
        "hotelpg-img":'url("./assets/Pictures/hotel pg.jpg")',
        "hotelmodern-img":'url("./assets/Pictures/hotel modern-luxury.avif")',
        "hotelmodernroom-img":'url("./assets/Pictures/hotel-modernroom.avif")',
        "hotellas-vegas-hotel-img":'url("./assets/Pictures/las-vegas-hotel.jpg")',
        "reception-img":'url("./assets/Pictures/reception.jpg")',
        "hotelbuilding-img":'url("./assets/Pictures/building.jpg")',

      },
      zIndex:{
        '10000':'10000'
      }
    },
  },
  plugins: [require('tailwindcss-children'),],
}

