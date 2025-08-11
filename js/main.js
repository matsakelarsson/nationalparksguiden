// Main Application Module
class NationalParkGuideApp {
  constructor() {
    this.generatedPDF = null;
    this.init();
  }

  init() {
    console.log('National Park Guide App initializing...');
    
    // Load parks data
    parksDataManager.loadParksData();
    
    // Set up event listeners
    this.setupEventListeners();
    
    console.log('App initialized successfully');
  }

  setupEventListeners() {
    const parkSelect = document.getElementById('parkSelect');
    if (parkSelect) {
      parkSelect.addEventListener('change', updateEntranceOptions);
      console.log('Event listener added for park selection');
    } else {
      console.log('parkSelect not found');
    }
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  window.app = new NationalParkGuideApp();
});
