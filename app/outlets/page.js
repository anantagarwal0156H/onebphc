'use client';
import { useState } from 'react';

const outletGroups = [
  {
    category: 'Fast Food & Quick Bites',
    items: [
{
  name: 'Yumpys',
  time: '11:00 AM - 11:30 PM',
  desc: 'The legendary spot for fried Maggi, quick rolls, and the student-favorite Rice Bowls.',
  menu: [
    { item: "--- MAGGI (BOILED & FRIED) ---", price: "" },
    { item: "Classic Boiled Maggi", price: "₹45" },
    { item: "Butter Boiled / Cheese Boiled", price: "₹65" },
    { item: "Double Egg Boiled / Egg Butter", price: "₹65/70" },
    { item: "Egg Cheese Boiled", price: "₹70" },
    { item: "Fried Chicken Maggi", price: "₹75" },
    { item: "Fried Paneer / Egg Maggi", price: "₹70/60" },
    { item: "Fried Veg / Butter Garlic Maggi", price: "₹55/70" },

    { item: "--- RICE BOWLS & BIRYANI ---", price: "" },
    { item: "Chicken Kadai / Makhani / Tikka Bowl", price: "₹130" },
    { item: "Paneer Butter Masala / Tikka Bowl", price: "₹130/125" },
    { item: "Chicken Biryani", price: "₹130" },
    { item: "Dum Biryani (Regular/Boneless)", price: "₹139/149" },

    { item: "--- COMBOS (BEST VALUE) ---", price: "" },
    { item: "Chicken Noodles + Manchuria", price: "₹130" },
    { item: "Chicken Rice + Manchuria", price: "₹130" },
    { item: "Veg Noodles + Manchuria", price: "₹110" },
    { item: "Veg Rice + Manchuria", price: "₹110" },

    { item: "--- NOODLES & FRIED RICE ---", price: "" },
    { item: "Chicken Noodles / Fried Rice", price: "₹90" },
    { item: "Chicken Schezwan Rice/Noodles", price: "₹99" },
    { item: "Double Egg Fried Rice", price: "₹90" },
    { item: "Paneer / Veg Fried Rice", price: "₹90/70" },

    { item: "--- SIDES & ROLLS ---", price: "" },
    { item: "Chicken / Paneer Roll", price: "₹90" },
    { item: "Chicken / Veg Momos (Fried)", price: "₹119/99" },
    { item: "French Fries (Masala/Peri Peri)", price: "₹80/85" },
    { item: "Butter Garlic Fries", price: "₹99" },
    { item: "Aloo Paratha (1pc/2pc)", price: "₹45/85" },
    { item: "Paneer Paratha (1pc/2pc)", price: "₹65/125" },
    { item: "Chicken Sandwich / Paneer Sandwich", price: "₹80/70" }
  ]
},      { name: 'Hotspot', time: '10:00 AM - 10:30 PM', desc: 'Maggi, quick snacks, and your daily caffeine fix.', menu: [
  { item: "--- THE MAGGI SPECIALS ---", price: "" },
  { item: "Aapka Original Masala", price: "₹45" },
  { item: "Double Masala Maggi (DMM)", price: "₹50" },
  { item: "Fried Double Masala Maggi", price: "₹60" },
  { item: "Cheese Oregano Maggi", price: "₹75" },
  { item: "Fried Chicken Maggi", price: "₹85" },
  { item: "Delhi Dhamaka (Egg & Chicken)", price: "₹90" },
  { item: "Fried Kaju Chicken Maggi", price: "₹120" },

  { item: "--- STARTERS & QUICK BITES ---", price: "" },
  { item: "Chicken 65 / Manchuria", price: "₹135" },
  { item: "Crispy Corn / French Fries", price: "₹90/65" },
  { item: "Chicken Drumsticks / Wings", price: "₹185/205" },
  { item: "Veg/Paneer Momos (Fried)", price: "₹90/99" },
  { item: "Chicken Momos (Fried)", price: "₹109" },

  { item: "--- RICE & BIRYANI ---", price: "" },
  { item: "Veg Fried Rice", price: "₹90" },
  { item: "Chicken Fried Rice", price: "₹125" },
  { item: "Chicken Dum Biryani", price: "₹150" },
  { item: "Boneless Chicken Biryani", price: "₹180" },

  { item: "--- BEVERAGES (HOT & COLD) ---", price: "" },
  { item: "Tea (Cardamom) / Coffee", price: "₹25/30" },
  { item: "Hot Chocolate", price: "₹35" },
  { item: "Frappe (Cold Coffee)", price: "₹55" },
  { item: "Kit Kat / Oreo Shake", price: "₹90" },
  { item: "Blueberry / Strawberry Shake", price: "₹100" },

  { item: "--- ROLLS & CURRIES ---", price: "" },
  { item: "Butter Chicken (B/BL)", price: "₹145/165" },
  { item: "Paneer Butter Masala", price: "₹135" },
  { item: "Butter Naan / Garlic Naan", price: "₹50" },
  { item: "Laccha Paratha", price: "₹50" }
] },
      { name: 'SFC', time: '12:00 PM - 10:30 PM', desc: 'Student Food Court. Burgers, pizzas, and fries.', menu: [
  { item: "--- BURGERS & SLIDERS ---", price: "" },
  { item: "Veg Burger / Cheese Burger", price: "₹70/90" },
  { item: "Chicken Burger / Zinger Burger", price: "₹100/120" },
  { item: "Double Patty Burger (Veg/Non-Veg)", price: "₹130/160" },
  { item: "SFC Special Jumbo Burger", price: "₹180" },

  { item: "--- FRIED CHICKEN & WINGS ---", price: "" },
  { item: "Hot & Crispy Wings (4 Pcs)", price: "₹140" },
  { item: "Chicken Lollipop (5 Pcs)", price: "₹160" },
  { item: "Fried Chicken Leg (1 Pc)", price: "₹80" },
  { item: "Boneless Strips (3 Pcs)", price: "₹110" },
  { item: "Popcorn Chicken (Medium/Large)", price: "₹100/180" },

  { item: "--- PIZZA & PASTA ---", price: "" },
  { item: "Margherita Pizza (7 inch)", price: "₹130" },
  { item: "Veggie Delight Pizza", price: "₹160" },
  { item: "Chicken Tikka Pizza", price: "₹190" },
  { item: "White Sauce Pasta (Veg/Chicken)", price: "₹120/150" },
  { item: "Red Sauce Pasta (Veg/Chicken)", price: "₹110/140" },

  { item: "--- SIDES & BEVERAGES ---", price: "" },
  { item: "French Fries (Salted/Peri Peri)", price: "₹70/80" },
  { item: "Cheese Loaded Fries", price: "₹110" },
  { item: "Chicken Nuggets (6 Pcs)", price: "₹90" },
  { item: "Coke / Sprite / Thums Up (Can)", price: "₹40" },
  { item: "Cold Coffee", price: "₹70" }
] },
      { name: 'Wich Please', time: '10:00 AM - 10:00 PM', desc: 'Toasted sandwiches and subs.', menu: [
  { item: "--- SANDWICHES ---", price: "" },
  { item: "Makhani Paneer Wich", price: "₹95" },
  { item: "Cheese Butter / Buttery Toast", price: "₹75/50" },
  { item: "Italian Pasta Wich (2/3 Layer)", price: "₹60/70" },
  { item: "Spinach Corn Cheese Wich (2/3 Layer)", price: "₹70/90" },
  { item: "Special Mayo Wich (2/3 Layer)", price: "₹70/85" },
  { item: "Tandoori Paneer Cheese Wich", price: "₹100" },
  { item: "Bombay Masala Wich (Plain/Mayo/Cheese)", price: "₹55/60/70" },
  { item: "Cheese Chilli Wich / Paneer Tikka Cheese", price: "₹80" },
  
  { item: "--- SWEET WICH ---", price: "" },
  { item: "Creamy Toast", price: "₹45" },
  { item: "Nutella Wich", price: "₹80" },
  { item: "Chocolate Grilled Wich", price: "₹80" },
  { item: "Peanut Butter Jam Wich", price: "₹80" },

  { item: "--- MAGGI & PASTA ---", price: "" },
  { item: "Classic Maggi (Plain/Double Masala)", price: "₹40/45" },
  { item: "Vegetable Maggi (Plain/Cheese)", price: "₹50/65" },
  { item: "Tandoori Cheese Maggi", price: "₹70" },
  { item: "White Sauce Pasta", price: "₹70" },
  { item: "Red Sauce Pasta", price: "₹60" },
  { item: "Mix Sauce Pasta", price: "₹80" },

  { item: "--- DRINKS & SHAKES ---", price: "" },
  { item: "Classic Cold Coffee", price: "₹65" },
  { item: "Oreo / KitKat / Chocolate Shake", price: "₹75" },
  { item: "Strawberry / Banana Shake", price: "₹75/60" },
  { item: "Masala Chai", price: "₹15" }
] },
      { name: 'Waffle Trend', time: '4:00 PM - 11:00 PM', desc: 'Fresh waffles and desserts.', menu: [
  { item: "--- BURGERS & SLIDERS ---", price: "" },
  { item: "Veg Burger / Cheese Burger", price: "₹70/90" },
  { item: "Chicken Burger / Zinger Burger", price: "₹100/120" },
  { item: "Double Patty Burger (Veg/Non-Veg)", price: "₹130/160" },
  { item: "SFC Special Jumbo Burger", price: "₹180" },

  { item: "--- FRIED CHICKEN & WINGS ---", price: "" },
  { item: "Hot & Crispy Wings (4 Pcs)", price: "₹140" },
  { item: "Chicken Lollipop (5 Pcs)", price: "₹160" },
  { item: "Fried Chicken Leg (1 Pc)", price: "₹80" },
  { item: "Boneless Strips (3 Pcs)", price: "₹110" },
  { item: "Popcorn Chicken (Medium/Large)", price: "₹100/180" },

  { item: "--- PIZZA & PASTA ---", price: "" },
  { item: "Margherita Pizza (7 inch)", price: "₹130" },
  { item: "Veggie Delight Pizza", price: "₹160" },
  { item: "Chicken Tikka Pizza", price: "₹190" },
  { item: "White Sauce Pasta (Veg/Chicken)", price: "₹120/150" },
  { item: "Red Sauce Pasta (Veg/Chicken)", price: "₹110/140" },

  { item: "--- SIDES & BEVERAGES ---", price: "" },
  { item: "French Fries (Salted/Peri Peri)", price: "₹70/80" },
  { item: "Cheese Loaded Fries", price: "₹110" },
  { item: "Chicken Nuggets (6 Pcs)", price: "₹90" },
  { item: "Coke / Sprite / Thums Up (Can)", price: "₹40" },
  { item: "Cold Coffee", price: "₹70" }
] },
      { name: 'C3', time: '9:00 AM - 11:00 PM', desc: 'Ice creams, milkshakes, and hot beverages.', menu: [
  { item: "--- AMUL ICE CREAM SCOOPS ---", price: "" },
  { item: "Vanilla / Strawberry", price: "₹40" },
  { item: "Chocolate / Butterscotch", price: "₹50" },
  { item: "Alfonso Mango / Rajbhog", price: "₹60" },
  { item: "Chocolate Brownie Scoop", price: "₹70" },
  { item: "Add: Choco Dip / Sprinkles", price: "₹10" },

  { item: "--- MILKSHAKES & THICK SHAKES ---", price: "" },
  { item: "Classic Chocolate Shake", price: "₹80" },
  { item: "Oreo / KitKat Thickshake", price: "₹100" },
  { item: "Cold Coffee (Plain)", price: "₹60" },
  { item: "Cold Coffee with Ice Cream", price: "₹80" },
  { item: "Mango / Strawberry Shake", price: "₹90" },

  { item: "--- HOT SNACKS ---", price: "" },
  { item: "Samosa (1 Pc) / Veg Puff", price: "₹15/25" },
  { item: "Egg Puff / Paneer Puff", price: "₹35/40" },
  { item: "Veg Cutlet / Corn Nuggets", price: "₹40/60" },
  { item: "French Fries", price: "₹70" },

  { item: "--- HOT BEVERAGES ---", price: "" },
  { item: "Amul Cool (Bottle)", price: "₹30" },
  { item: "Hot Tea / Ginger Tea", price: "₹20" },
  { item: "Coffee / Hot Chocolate", price: "₹30/45" },
  { item: "Bournvita / Horlicks Milk", price: "₹40" }
] },
    ],
  },
  {
    category: 'Indian & Full Meals',
    items: [
// Find Vijay Vahini in your outletGroups array and replace it with this:
{ 
  name: 'Vijay Vahini', 
  time: '11:00 AM - 10:30 PM', 
  desc: 'Solid North Indian curries and rice dishes. Perfectly oily, perfectly BITSian.',
  menu: [
    { item: "--- ROLLS & QUICK BITES ---", price: "" },
    { item: "Paneer Chilli Roll", price: "₹100" },
    { item: "Chicken Tikka Roll", price: "₹120" },
    { item: "Double Egg Roll", price: "₹90" },
    { item: "Mushroom Chilli Roll", price: "₹100" },
    { item: "Chaco Lava (Special)", price: "₹65" },
    { item: "French Fries (Salted/Peri Peri)", price: "₹70/75" },
    { item: "Aloo/Paneer Paratha (2 nos)", price: "₹90/110" },

    { item: "--- BIRYANIS ---", price: "" },
    { item: "Chicken Dum Biryani", price: "₹150" },
    { item: "Chicken 65 Biryani", price: "₹130" },
    { item: "Mutton Biryani", price: "₹250" },
    { item: "Veg / Egg Biryani", price: "₹90/120" },
    { item: "Paneer Biryani", price: "₹120" },

    { item: "--- VEG CURRIES ---", price: "" },
    { item: "Paneer Butter Masala", price: "₹90" },
    { item: "Kadai Paneer", price: "₹95" },
    { item: "Dal Fry / Dal Tadka", price: "₹70/80" },
    { item: "Mix Veg Curry", price: "₹80" },
    { item: "Cashew Paneer", price: "₹140" },

    { item: "--- NON-VEG CURRIES ---", price: "" },
    { item: "Butter Chicken Masala", price: "₹160" },
    { item: "Chicken Masala / Kolhapuri", price: "₹110" },
    { item: "Chicken Moghalai (Bone)", price: "₹150" },
    { item: "Egg Masala", price: "₹90" },

    { item: "--- STARTERS (VEG/NON-VEG) ---", price: "" },
    { item: "Paneer 65 / Manchurian", price: "₹95" },
    { item: "Gobi Manchurian", price: "₹65" },
    { item: "Chicken 65 / Manchurian", price: "₹110" },
    { item: "Chicken Lollipop (4 pcs)", price: "₹140" },
    { item: "Chilli Fish", price: "₹150" },

    { item: "--- RICE & BREADS ---", price: "" },
    { item: "Veg Fried Rice / Noodles", price: "₹70/80" },
    { item: "Chicken Fried Rice / Noodles", price: "₹100/110" },
    { item: "Plain Roti / Butter Roti", price: "₹12/22" },
    { item: "Butter Naan / Lacha Paratha", price: "₹30/25" },
    { item: "Jeera Rice / Masala Rice", price: "₹70" }
  ] 
},      { name: 'Bitsian Pleasant', time: '12:00 PM - 10:30 PM', desc: 'The proper sit-down dining experience.', menu: [
  { item: "--- BIRYANIS & RICE ---", price: "" },
  { item: "Veg Biryani (Mini/Full)", price: "₹100/150" },
  { item: "Paneer Biryani", price: "₹170" },
  { item: "Kaju Biryani", price: "₹180" },
  { item: "Chicken (Dum) Biryani (Mini/Full)", price: "₹130/190" },
  { item: "Special Biryani (Boneless)", price: "₹200" },
  { item: "Curd Rice / Zeera Rice", price: "₹100" },
  
  { item: "--- CHINESE VEG ---", price: "" },
  { item: "Veg Manchurian", price: "₹120" },
  { item: "Gobi Manchurian", price: "₹130" },
  { item: "Crispy Corn", price: "₹150" },
  { item: "Paneer 65", price: "₹160" },
  { item: "Veg Fried Rice / Noodles", price: "₹100" },
  
  { item: "--- CHINESE NON-VEG ---", price: "" },
  { item: "Chicken 65 / Majestic", price: "₹140/150" },
  { item: "Chilly Chicken", price: "₹150" },
  { item: "Chicken Lollipop (5 pcs)", price: "₹160" },
  { item: "Chicken Fried Rice / Noodles", price: "₹130" },
  
  { item: "--- TANDOORI & TIKKA ---", price: "" },
  { item: "Paneer Tikka / Ajwan Tikka", price: "₹190" },
  { item: "Soya Chaap Tandoori", price: "₹160" },
  { item: "Chicken Tikka", price: "₹190" },
  { item: "Murg Malai Tikka", price: "₹200" },
  { item: "Tandoori Chicken (Half/Full)", price: "₹280/540" },
  
  { item: "--- MAIN COURSE (VEG) ---", price: "" },
  { item: "Dal Tadka / Dal Fry", price: "₹110/90" },
  { item: "Paneer Butter Masala", price: "₹180" },
  { item: "Kadhai Paneer", price: "₹170" },
  { item: "Veg Kolapuri", price: "₹140" },
  
  { item: "--- MAIN COURSE (NON-VEG) ---", price: "" },
  { item: "Butter Chicken", price: "₹180" },
  { item: "Chicken Mughlai (with egg)", price: "₹190" },
  { item: "Chicken Tikka Masala", price: "₹180" },
  { item: "BPR Special Boneless Chicken", price: "₹200" },
  
  { item: "--- ROTI & NAAN ---", price: "" },
  { item: "Butter Roti / Plain Naan", price: "₹30" },
  { item: "Butter Naan", price: "₹35" },
  { item: "Garlic Naan / Till Naan", price: "₹40" },
  { item: "Paneer Kulcha", price: "₹50" }
] },
      { name: 'Chat Bhandar', time: '4:00 PM - 10:00 PM', desc: 'Agra-style parathas and spicy chaat items.', menu: [
  { item: "--- CHAT SPECIALS ---", price: "" },
  { item: "Pani Puri (7 Pcs)", price: "₹30" },
  { item: "Vada Pav / Cheese Vada Pav", price: "₹30/60" },
  { item: "Butter / Masala Pav Bhaji", price: "₹80" },
  { item: "Paneer & Cheese Pav Bhaji", price: "₹100" },
  { item: "Samosa Chat / Cutlet Chat", price: "₹50" },
  { item: "Papdi Chat / Dahi Papdi", price: "₹50/60" },
  { item: "Dhai Puri / Dhai Samosa", price: "₹60/50" },
  { item: "Bhel Puri / Cheese Bhel Puri", price: "₹50/70" },
  { item: "Chole Batura / Chole Kulcha", price: "₹90/100" },
  { item: "Aloo Tikki / Tikki Chat", price: "₹50" },

  { item: "--- KHEEMA & HEAVY BITES ---", price: "" },
  { item: "Kheema Pav / Kheema Kulcha", price: "₹100/120" },
  { item: "Paneer Bread Pakoda", price: "₹80" },
  { item: "Mutter Kulcha", price: "₹100" },
  { item: "Aloo Thost", price: "₹50" },

  { item: "--- PARATHAS ---", price: "" },
  { item: "Aloo Paratha / Aloo Onion", price: "₹90/100" },
  { item: "Paneer Paratha", price: "₹130" },
  { item: "Gobi / Methi / Muli Paratha", price: "₹110" },
  { item: "Mix Paratha", price: "₹150" },
  { item: "Palak Paratha", price: "₹100" },

  { item: "--- BADAM MILKS & DRINKS ---", price: "" },
  { item: "Cool Badam Milk", price: "₹70" },
  { item: "Hot Kesar Badam Milk", price: "₹70" },
  { item: "Badam Pista Lassi", price: "₹70" }
] },
    ],
  },
  {
    category: 'Refreshments & Healthy',
    items: [
            { name: 'Tea Time', time: '8:00 AM - 9:00 PM', desc: 'Quick chai breaks and biscuits.', menu: [
  { item: "--- TEA & COFFEE (HOT) ---", price: "" },
  { item: "Dum Tea / Ginger Tea", price: "₹20" },
  { item: "Masala Tea / Lemon Tea", price: "₹25" },
  { item: "Green Tea / Black Tea", price: "₹25" },
  { item: "Kullad Tea", price: "₹30" },
  { item: "Coffee / Filter Coffee", price: "₹30/35" },
  { item: "Boost / Horlicks / Badam Milk", price: "₹35" },

  { item: "--- COOLERS & SHAKES ---", price: "" },
  { item: "Cold Coffee", price: "₹60" },
  { item: "Oreo Shake / KitKat Shake", price: "₹80" },
  { item: "Chocolate Shake", price: "₹70" },
  { item: "Strawberry / Mango Shake", price: "₹70" },
  { item: "Blue Lime / Virgin Mojito", price: "₹50" },
  { item: "Lemon Iced Tea", price: "₹45" },

  { item: "--- QUICK SNACKS ---", price: "" },
  { item: "Finger Fries", price: "₹60" },
  { item: "Peri Peri Fries", price: "₹70" },
  { item: "Veg Nuggets (6 Pcs)", price: "₹70" },
  { item: "Chicken Nuggets (6 Pcs)", price: "₹90" },
  { item: "Potato Wedges", price: "₹70" },
  { item: "Veg Cutlet (2 Pcs)", price: "₹40" },
  { item: "Cheese Corn Nuggets (6 Pcs)", price: "₹80" }
] },
      { name: 'Fruitfull', time: '9:00 AM - 10:00 PM', desc: 'Fresh fruit juices and healthy fruit bowls.', menu: [
  { item: "--- FRESH FRUIT JUICES ---", price: "" },
  { item: "Watermelon / Mosambi", price: "₹60/70" },
  { item: "Pineapple / Grape", price: "₹70" },
  { item: "Orange / Pomegranate", price: "₹80/90" },
  { item: "Apple / Kiwi Juice", price: "₹90/100" },
  { item: "Dragon Fruit Juice", price: "₹110" },

  { item: "--- MILK FRUIT SHAKES ---", price: "" },
  { item: "Sapotas / Banana Shake", price: "₹70" },
  { item: "Papaya / Custard Apple", price: "₹70/90" },
  { item: "Mango / Strawberry Shake", price: "₹90" },
  { item: "Avocado / Mulberry Shake", price: "₹100/110" },
  { item: "Dry Fruit Shake", price: "₹130" },

  { item: "--- FRUIT BOWLS & SALADS ---", price: "" },
  { item: "Regular Fruit Bowl", price: "₹80" },
  { item: "Special Mixed Fruit Bowl", price: "₹110" },
  { item: "Fruit Salad with Ice Cream", price: "₹100" },

  { item: "--- REFRESHERS ---", price: "" },
  { item: "Lemon Soda (Salt/Sweet)", price: "₹40" },
  { item: "Mint Lime / Ginger Lime", price: "₹45" },
  { item: "Sugarcane Juice", price: "₹30" }
] },
      { name: 'Protein Isle', time: '5:00 PM - 11:00 PM', desc: 'The gym-rat go-to. High-protein bowls.', menu: [
  { item: "--- PROTEIN BOWLS ---", price: "" },
  { item: "Classic Chicken Bowl", price: "₹130" },
  { item: "Grilled Paneer Bowl", price: "₹120" },
  { item: "Double Egg Protein Bowl", price: "₹100" },
  { item: "Soya Chunk Bowl", price: "₹90" },
  { item: "Boiled Chicken (Salt & Pepper)", price: "₹110" },

  { item: "--- EGG SPECIALS ---", price: "" },
  { item: "Boiled Eggs (2 nos)", price: "₹30" },
  { item: "Oatmeal Egg White Omelette", price: "₹70" },
  { item: "Cheese Egg White Scramble", price: "₹80" },
  { item: "Classic Bullseye", price: "₹40" },

  { item: "--- SANDWICHES & SIDES ---", price: "" },
  { item: "Brown Bread Chicken Sandwich", price: "₹90" },
  { item: "Peanut Butter & Banana Toast", price: "₹60" },
  { item: "Sweet Corn / Sprouts Salad", price: "₹50" },
  { item: "Peanut Salad", price: "₹60" },

  { item: "--- SHAKES & JUICES ---", price: "" },
  { item: "Whey Protein Shake (Standard)", price: "₹100" },
  { item: "Peanut Butter Shake", price: "₹80" },
  { item: "Fresh Carrot / Beetroot Juice", price: "₹60" }
] },
      { name: 'Bits and Bytes', time: '9:00 AM - 10:00 PM', desc: 'Dependable sandwiches and South Indian snacks.', menu: [
  { item: "--- SOUTH INDIAN SPECIALS ---", price: "" },
  { item: "Idly (2 Pcs) / Sambar Vada", price: "₹40/50" },
  { item: "Plain Dosa / Onion Dosa", price: "₹60/70" },
  { item: "Masala Dosa / Paneer Dosa", price: "₹75/90" },
  { item: "Cheese Dosa / Mysore Masala", price: "₹90/85" },
  { item: "Uttapam (Onion/Tomato)", price: "₹75" },
  { item: "Poori Sabji / Upma", price: "₹60/45" },

  { item: "--- SANDWICHES & TOASTS ---", price: "" },
  { item: "Veg Grilled Sandwich", price: "₹65" },
  { item: "Cheese Chilli Toast", price: "₹75" },
  { item: "Paneer Grilled Sandwich", price: "₹85" },
  { item: "Chicken Mayo Sandwich", price: "₹95" },
  { item: "Egg Sandwich", price: "₹70" },

  { item: "--- JUICES & SHAKES ---", price: "" },
  { item: "Lime Soda / Juice", price: "₹40/35" },
  { item: "Watermelon / Mosambi Juice", price: "₹60/70" },
  { item: "Oreo / KitKat Shake", price: "₹85" },
  { item: "Cold Coffee with Ice Cream", price: "₹80" },
  { item: "Rose Milk / Badam Milk", price: "₹50" },

  { item: "--- SNACKS & SIDES ---", price: "" },
  { item: "Veg Puff / Egg Puff", price: "₹25/35" },
  { item: "Samosa (1 Pc)", price: "₹15" },
  { item: "Bread Omlette", price: "₹60" },
  { item: "Chicken 65 (Plate)", price: "₹120" }
] },
    ],
  },
];

export default function Outlets() {
  const [activeOutlet, setActiveOutlet] = useState(null);

  const toggleMenu = (name) => {
    setActiveOutlet(activeOutlet === name ? null : name);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .fade { opacity: 0; transform: translateY(12px); animation: fadeUp 0.4s ease forwards; }
        
        .section { border: 1px solid #222; border-radius: 20px; overflow: hidden; margin-bottom: 28px; background: #141414; }
        .section-header { padding: 18px 22px; background: #1a1a1a; border-bottom: 1px solid #222; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #555; }
        
        .outlet-card { padding: 22px; border-bottom: 1px solid #1e1e1e; cursor: pointer; transition: background 0.2s ease; }
        .outlet-card:hover { background: #181818; }
        .outlet-card.active { background: #1a1a1a; }
        
        .menu-drawer { 
          max-height: 0; overflow: hidden; transition: all 0.3s ease-in-out; background: #0d0d0d; 
        }
        .menu-drawer.open { max-height: 2000px; padding: 12px 22px 24px; border-bottom: 1px solid #222; }
        
        .menu-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 14px; color: #ccc; }
        .menu-item:last-child { border-bottom: none; }
        
        .time-badge { display: inline-flex; align-items: center; padding: 4px 10px; background: #1e1e1e; border: 1px solid #282828; border-radius: 100px; font-size: 11px; color: #888; margin-top: 10px; }
        .status-dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; margin-right: 6px; }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '60px 24px' }}>
        <div className="fade" style={{ marginBottom: '40px' }}>
          <a href="/" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '32px', fontWeight: '600', letterSpacing: '-0.8px' }}>Campus Outlets</h1>
          <p style={{ fontSize: '15px', color: '#555', marginTop: '6px' }}>Tap an outlet to see the menu.Credits and Thanks to JD and Gunjan Chandak</p>
        </div>

        {outletGroups.map((group, gIdx) => (
          <div key={group.category} className="section fade" style={{ animationDelay: `${gIdx * 0.1}s` }}>
            <div className="section-header">{group.category}</div>
            {group.items.map((item) => (
              <div key={item.name}>
                <div 
                  className={`outlet-card ${activeOutlet === item.name ? 'active' : ''}`}
                  onClick={() => toggleMenu(item.name)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '17px', fontWeight: '600' }}>{item.name}</div>
                    <span style={{ color: '#444' }}>{activeOutlet === item.name ? '▲' : '▼'}</span>
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#666', marginTop: '4px' }}>{item.desc}</div>
                  <div className="time-badge"><span className="status-dot"></span>{item.time}</div>
                </div>

                <div className={`menu-drawer ${activeOutlet === item.name ? 'open' : ''}`}>
                  {item.menu.length > 0 ? (
                    item.menu.map((dish, dIdx) => (
                      <div key={dIdx} className="menu-item">
                        <span>{dish.item}</span>
                        <span style={{ color: '#888' }}>{dish.price}</span>
                      </div>
                    ))
                  ) : (
                    <div style={{ color: '#444', fontSize: '13px', textAlign: 'center', padding: '20px' }}>
                      Menu photo needed. Send it to me!
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}