// Form Handling Functions

// Park entrance data
const parkEntrances = {
  abisko: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'abisko-turiststation', text: 'Abisko Turiststation' },
    { value: 'abisko-oj', text: 'Abisko Östra' },
    { value: 'boat-ajtte', text: 'Boat from Ajtte Museum' }
  ],
  skarpholmen: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'boat', text: 'Boat access' }
  ],
  angso: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance (Ängsö Castle)' },
    { value: 'boat', text: 'Boat from Stockholm' }
  ],
  bjornlandet: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' }
  ],
  blajungfrun: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'boat-kalmar', text: 'Boat from Kalmar' },
    { value: 'boat-osm', text: 'Boat from Oskarshamn' }
  ],
  dalby: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  farvidaberget: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  fulufjallet: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'norrflaket', text: 'Norrflaket entrance' },
    { value: 'south', text: 'South entrance' },
    { value: 'west', text: 'West entrance' }
  ],
  garphyttan: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' }
  ],
  gotska: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'boat-nynashamn', text: 'Boat from Nynäshamn' },
    { value: 'boat-visby', text: 'Boat from Visby' }
  ],
  hamra: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' }
  ],
  haparanda: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'boat', text: 'Boat access' }
  ],
  kosterhavet: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'koster-south', text: 'South Koster Island' },
    { value: 'koster-north', text: 'North Koster Island' },
    { value: 'boat-strömstad', text: 'Boat from Strömstad' }
  ],
  muddus: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  norra: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' }
  ],
  padjelanta: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'west', text: 'West entrance' }
  ],
  peljekaise: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' }
  ],
  sarek: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'aktse', text: 'Aktse entrance' },
    { value: 'kvikkjokk', text: 'Kvikkjokk entrance' },
    { value: 'saltoluokta', text: 'Saltoluokta entrance' },
    { value: 'rietavare', text: 'Rietavare entrance' }
  ],
  soderasen: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  stenshuvud: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  stora: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'boat', text: 'Boat access' }
  ],
  store: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  tyresta: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  tiveden: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  tresticklan: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' },
    { value: 'south', text: 'South entrance' }
  ],
  vadvetjåkka: [
    { value: 'suggest', text: 'Suggest one for me' },
    { value: 'main', text: 'Main entrance' },
    { value: 'north', text: 'North entrance' }
  ]
};

// Update entrance options when park is selected
function updateEntranceOptions() {
  console.log('updateEntranceOptions called');
  const parkSelect = document.getElementById('parkSelect');
  const entranceSelect = document.getElementById('entrance');
  const selectedPark = parkSelect.value;
  
  console.log('Selected park:', selectedPark);
  
  entranceSelect.innerHTML = '<option value="">Choose entrance...</option>';
  
  if (selectedPark && parkEntrances[selectedPark]) {
    console.log('Found entrances:', parkEntrances[selectedPark]);
    parkEntrances[selectedPark].forEach(entrance => {
      const option = document.createElement('option');
      option.value = entrance.value;
      option.textContent = entrance.text;
      entranceSelect.appendChild(option);
    });
  } else {
    console.log('No entrances found for park:', selectedPark);
    // Add a generic entrance option for parks without specific entrances
    const option = document.createElement('option');
    option.value = 'main';
    option.textContent = 'Main entrance';
    entranceSelect.appendChild(option);
  }
}

// Helper function to get and validate form data
function getFormData() {
  const parkSelect = document.getElementById('parkSelect');
  const season = document.getElementById('season');
  const duration = document.getElementById('duration');
  const accommodation = document.getElementById('accommodation');
  const originCity = document.getElementById('originCity');
  const transport = document.getElementById('transport');
  const hikeDifficulty = document.getElementById('hikeDifficulty');
  const entrance = document.getElementById('entrance');

  // Validate form
  if (!parkSelect.value || !season.value || !duration.value || !accommodation.value || !originCity.value || !transport.value || !entrance.value) {
    alert('Please fill in all required fields.');
    return null;
  }

  // Return formatted data
  return {
    parkName: parkSelect.options[parkSelect.selectedIndex].text,
    seasonText: season.options[season.selectedIndex].text,
    durationText: duration.options[duration.selectedIndex].text,
    accommodationText: accommodation.options[accommodation.selectedIndex].text,
    transportText: transport.options[transport.selectedIndex].text,
    transportValue: transport.value,
    entranceText: entrance.options[entrance.selectedIndex].text,
    originCity: originCity.value,
    seasonValue: season.value,
    parkId: parkSelect.value,
    hikeDifficulty: hikeDifficulty.value
  };
}
