// Parks Data Management Module
class ParksDataManager {
  constructor() {
    this.parks = {};
    this.loaded = false;
  }

  // Load all park data
  async loadParksData() {
    try {
      // Load Abisko data
      const abiskoResponse = await fetch('data/parks/abisko.json');
      if (abiskoResponse.ok) {
        this.parks.abisko = await abiskoResponse.json();
      } else {
        console.error('Failed to load Abisko data');
      }
      
      this.loaded = true;
      console.log('Parks data loaded successfully');
    } catch (error) {
      console.error('Error loading parks data:', error);
    }
  }

  // Get park data by ID
  getPark(id) {
    return this.parks[id] || null;
  }

  // Get all available parks
  getAllParks() {
    return Object.values(this.parks);
  }

  // Get seasonal information for a park
  getSeasonalInfo(parkId, season) {
    const park = this.getPark(parkId);
    if (!park || !park.seasons[season]) {
      return null;
    }
    return park.seasons[season];
  }

  // Get trail recommendations based on difficulty
  getTrailsByDifficulty(parkId, difficulty) {
    const park = this.getPark(parkId);
    if (!park || !park.trails[difficulty]) {
      return [];
    }
    return park.trails[difficulty];
  }

  // Get accommodation options
  getAccommodationOptions(parkId, type = 'all') {
    const park = this.getPark(parkId);
    if (!park || !park.accommodation) {
      return [];
    }
    
    if (type === 'all') {
      return [
        ...park.accommodation.within_park,
        ...park.accommodation.nearby,
        ...park.accommodation.camping
      ];
    }
    
    return park.accommodation[type] || [];
  }

  // Get transportation information
  getTransportationInfo(parkId, method) {
    const park = this.getPark(parkId);
    if (!park || !park.transportation[method]) {
      return null;
    }
    return park.transportation[method];
  }

  // Get safety information
  getSafetyInfo(parkId, season = null) {
    const park = this.getPark(parkId);
    if (!park || !park.safety) {
      return null;
    }
    
    const safety = park.safety;
    if (season && safety.seasonal_considerations[season]) {
      return {
        general: safety.general_tips,
        seasonal: safety.seasonal_considerations[season],
        emergency: safety.emergency
      };
    }
    
    return safety;
  }

  // Get wildlife and flora information
  getNatureInfo(parkId, season = null) {
    const park = this.getPark(parkId);
    if (!park) return null;
    
    const nature = {
      wildlife: park.wildlife,
      flora: park.flora
    };
    
    if (season) {
      nature.wildlife.best_viewing = park.wildlife.best_viewing[season];
      nature.flora.best_viewing = park.flora.best_viewing[season];
    }
    
    return nature;
  }

  // Get photography tips
  getPhotographyInfo(parkId, season = null) {
    const park = this.getPark(parkId);
    if (!park || !park.photography) {
      return null;
    }
    
    const photo = park.photography;
    if (season && photo.seasonal_opportunities[season]) {
      return {
        locations: photo.best_locations,
        seasonal: photo.seasonal_opportunities[season],
        tips: photo.tips
      };
    }
    
    return photo;
  }

  // Check if data is loaded
  isDataLoaded() {
    return this.loaded;
  }

  // Get park entrance information
  getEntrances(parkId) {
    const park = this.getPark(parkId);
    return park?.entrances || [];
  }

  // Get practical information
  getPracticalInfo(parkId) {
    const park = this.getPark(parkId);
    return park?.practical_info || null;
  }

  // Get local culture information
  getCulturalInfo(parkId) {
    const park = this.getPark(parkId);
    return park?.local_culture || null;
  }

  // Get regulations
  getRegulations(parkId) {
    const park = this.getPark(parkId);
    return park?.regulations || null;
  }
}

// Create global instance
const parksDataManager = new ParksDataManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ParksDataManager;
}
