const makeToModelMapping = {

Acura : [
    "ILX",
    "MDX",
    "NSX",
    "RDX",
    "RL",
    "RLX",
    "TL",
    "TLX",
    "TSX",
    "ZDX"
],
AlfaRomeo : [
    "Giulia",
    "Stelvio",
    "4C"
],

AstonMartin : [
    "Vantage",
    "DB11",
    "DBS Superleggera"
],

Audi : [
    "A3",
    "A4",
    "A6",
    "A8",
    "Q3",
    "Q5",
    "Q7",
    "Q8",
    "e-tron",
    "R8"
],

Bentley : [
    "Continental GT",
    "Flying Spur",
    "Bentayga"
],

BMW : [
    "3 Series",
    "5 Series",
    "7 Series",
    "X1",
    "X3",
    "X5",
    "X7",
    "I3",
    "I8",
    "Z4",
],

Bugatti : [
    "Chiron",
    "Veyron"
],

Buick : [
    "Encore",
    "Enclave",
    "Regal"
],

Cadillac : [
    "CT4",
    "CT5",
    "CT6",
    "Escalade",
    "XT4",
    "XT5",
    "XT6"
],

Chevrolet : [
    "Spark",
    "Sonic",
    "Malibu",
    "Impala",
    "Camaro",
    "Corvette",
    "Equinox",
    "Tahoe",
    "Suburban",
    "Colorado",
    "Silverado"
],

Chrysler : [
    "300",
    "Pacifica",
    "Voyager"
],

Citroen : [
    "C3",
    "C4",
    "C5",
    "Cactus",
    "Berlingo",
    "Jumpy",
    "SpaceTourer"
],
Dodge: [
    "Charger", 
    "Challenger", 
    "Durango", 
    "Grand Caravan",
    "Ram 1500",
    "Ram 2500",
    "Ram 3500"
],
  Ferrari: [
    "308GT",
    "488 GTB", 
    "812 Superfast", 
    "F8 Tributo", 
    "Enzo",
    "SF90 Stradale"
],
  Fiat: [
    "500", 
    "500X", 
    "500L", 
    "124 Spider"
],
  Ford: [
    "Fiesta",
    "Focus",
    "Fusion",
    "Mustang",
    "Escape",
    "Edge",
    "Explorer",
    "Expedition",
    "F-150",
    "F-250",
    "F-350",
    "F-450",
  ],
  Genesis: [
    "G70", 
    "G80", 
    "G90"
],
  GMC: [
    "Terrain", 
    "Acadia", 
    "Yukon", 
    "Sierra"
],
  Honda: [
    "Accord",
    "Civic",
    "Fit",
    "HR-V",
    "CR-V",
    "Pilot",
    "Passport",
    "Odyssey",
    "Ridgeline",
    "Insight",
  ],
  Hyundai: [
    "Accent",
    "Elantra",
    "Ioniq",
    "Kona",
    "Santa Fe",
    "Sonata",
    "Tucson",
    "Veloster",
    "Venue",
    "Palisade",
  ],
  Infiniti: [
    "Q50", 
    "Q60", 
    "Q70", 
    "QX30", 
    "QX50", 
    "QX60", 
    "QX80"
],
  Jaguar: [
    "XE", 
    "XF", "XJ", 
    "F-PACE",
    "E-PACE", 
    "I-PACE"
],
  Jeep: [
    "Cherokee",
    "Compass",
    "Grand Cherokee",
    "Renegade",
    "Wrangler",
    "Gladiator",
  ],
  Kia: [
    "Forte",
    "Rio",
    "Optima",
    "Cadenza",
    "Stinger",
    "Soul",
    "Niro",
    "Sportage",
    "Sorento",
    "Telluride",
  ],
  Lamborghini: [
    "Huracán", 
    "Aventador", 
    "Urus"
],
  LandRover: [
    "Range Rover",
    "Range Rover Sport",
    "Range Rover Evoque",
    "Range Rover Velar",
    "Discovery",
    "Defender 90",
  ],
  Lexus: [
    "IS",
    "ES",
    "GS",
    "LS",
    "LC",
    "UX",
    "NX",
    "RX",
    "GX",
    "LX",
    "RC",
    "CT",
  ],
  Lincoln: [
    "Corsair", 
    "Nautilus", 
    "Aviator", 
    "Navigator", 
    "MKZ", 
    "Continental"
],
  Maserati: [
    "Ghibli", 
    "Quattroporte", 
    "Levante", 
    "GranTurismo", 
    "GranCabrio"
],
  Mazda: [
    "Mazda3", 
    "Mazda6", 
    "MX-5 Miata", 
    "CX-3", 
    "CX-5", 
    "CX-9"
],
  McLaren: [
    "720S", 
    "570S",
    "600LT", 
    "Senna"],
  MercedesBenz: [
    "A-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "CLA",
    "CLS",
    "GLA",
    "GLB",
    "GLC",
    "GLE",
    "GLS",
    "G-Class",
    "GT",
  ],
  Mini: [
    "Cooper",
    "Clubman",
    "Countryman"
  ],
  Mitsubishi: [
    "Mirage",
    "Outlander",
    "Eclipse Cross"
  ],
  Nissan: [
    "Versa",
    "Sentra",
    "Altima",
    "Maxima",
    "370Z",
    "GT-R",
    "Kicks",
    "Rogue",
    "Murano",
    "Pathfinder",
    "Armada",
    "Frontier",
    "Titan"
  ],
  Pagani: [
    "Huayra",
    "Zonda"
  ],
  Peugeot: [
    "208",
    "308",
    "508",
    "2008",
    "3008",
    "5008"
  ],
  Porsche: [
    "911",
    "718 Cayman",
    "718 Boxster",
    "Panamera",
    "Macan",
    "Cayenne",
    "Taycan"
  ],
  RAM: [
    "1500",
    "2500",
    "3500"
  ],
  Renault: [
    "Clio",
    "Megane",
    "Captur",
    "Kadjar",
    "Talisman",
    "Koleos"
  ],
  RollsRoyce: [
    "Phantom",
    "Ghost",
    "Wraith",
    "Dawn",
    "Cullinan"
  ],
  Saab: [
    "9-3",
    "9-5"
  ],
  Subaru: [
    "Impreza",
    "Legacy",
    "WRX",
    "BRZ",
    "Crosstrek",
    "Forester",
    "Outback",
    "Ascent"
  ],
  Suzuki: [
    "Swift",
    "Vitara",
    "Jimny"
  ],
  Tesla: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y"
  ],
  Toyota: [
    "Camry",
    "Corolla",
    "Avalon",
    "Prius",
    "Yaris",
    "86",
    "C-HR",
    "RAV4",
    "Highlander",
    "4Runner",
    "Sienna",
    "Tacoma",
    "Tundra"
  ],
  Volkswagen: [
    "Golf",
    "Jetta",
    "Passat",
    "Arteon",
    "Tiguan",
    "Atlas",
    "ID.3",
    "ID.4"
  ],
  Volvo: [
    "S60",
    "S90",
    "V60",
    "V90",
    "XC40",
    "XC60",
    "XC90"
  ]

}
export default makeToModelMapping;