// Utility Functions

function getDifficultyLabel(trail) {
  // Determine difficulty based on trail properties
  if (trail.distance_km <= 3 && trail.duration_hours <= 2) {
    return 'Easy';
  } else if (trail.distance_km <= 8 && trail.duration_hours <= 5) {
    return 'Moderate';
  } else {
    return 'Challenging';
  }
}

function getSeasonalTips(season, parkId) {
  // Use the proper method from ParksDataManager
  const seasonalInfo = parksDataManager.getSeasonalInfo(parkId, season);
  if (seasonalInfo && seasonalInfo.packing_tips) {
    return seasonalInfo.packing_tips;
  }
  
  // Fallback to generic tips if no park data
  const genericTips = {
    spring: [
      'Spring is perfect for bird watching and seeing wildflowers bloom',
      'Trails may be muddy - bring waterproof footwear',
      'Temperatures can vary greatly - pack layers',
      'Check for any seasonal trail closures'
    ],
    summer: [
      'Peak season - book accommodations well in advance',
      'Bring plenty of water and sun protection',
      'Best time for swimming in lakes and rivers',
      'Expect more visitors and busier trails'
    ],
    autumn: [
      'Beautiful fall colors make for excellent photography',
      'Cooler temperatures perfect for longer hikes',
      'Fewer crowds and more peaceful experience',
      'Some facilities may close for the season'
    ],
    winter: [
      'Check weather conditions and trail accessibility',
      'Bring warm clothing and proper winter gear',
      'Some trails may require snowshoes or skis',
      'Limited facilities and shorter daylight hours'
    ]
  };
  
  return genericTips[season] || genericTips.spring;
}
