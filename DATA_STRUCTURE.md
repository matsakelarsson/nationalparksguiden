# 🏞️ National Parks Data Structure

## Overview
This document explains the data structure used for storing comprehensive information about Swedish national parks. The data is stored in JSON format and organized to provide rich, detailed information for PDF generation.

## File Organization
```
data/
└── parks/
    ├── abisko.json          # Abisko National Park
    ├── sarek.json           # Sarek National Park (future)
    ├── fulufjallet.json     # Fulufjället National Park (future)
    └── ...                  # More parks
```

## Data Structure

### Core Information
- **Basic Details**: Name, location, size, establishment year
- **Geographic Data**: Coordinates, elevation, nearest cities
- **Overview**: Description, highlights, key features

### Seasonal Information
Each season (spring, summer, autumn, winter) includes:
- **Weather**: Temperature ranges, conditions
- **Activities**: Recommended activities for that season
- **Packing Tips**: Essential items to bring
- **Best Viewing**: Wildlife and flora viewing opportunities

### Trail Information
Organized by difficulty level:
- **Easy**: Family-friendly, short walks
- **Moderate**: Half-day hikes, some elevation
- **Challenging**: Full-day hikes, significant elevation gain

### Accommodation Options
- **Within Park**: Mountain stations, lodges
- **Nearby**: Guesthouses, hotels in surrounding areas
- **Camping**: Designated camping areas and facilities

### Transportation
Detailed information for each method:
- **By Car**: Driving directions, parking, road conditions
- **By Train**: Schedules, duration, costs
- **By Bus**: Local connections, frequency
- **By Plane**: Nearest airports, transfer options

### Practical Information
- **Visitor Centers**: Hours, services, facilities
- **Best Times to Visit**: Peak seasons, shoulder seasons
- **Costs**: Entry fees, parking, guided tours
- **Safety**: General tips, seasonal considerations, emergency contacts

## Adding New Parks

### Step 1: Create JSON File
1. Create a new file in `data/parks/` directory
2. Use the park's ID as the filename (e.g., `sarek.json`)
3. Follow the exact structure of `abisko.json`

### Step 2: Update Data Loader
1. Add the new park to `js/parks-data.js`
2. Update the `loadParksData()` method
3. Test data loading

### Step 3: Update Form Options
1. Add the park to the dropdown in `index.html`
2. Update entrance options if needed
3. Test form functionality

## Data Sources
- **Primary Sources**: 
  - [Sveriges Nationalparker](https://www.sverigesnationalparker.se)
  - [Svenska Turistföreningen](https://www.svenskaturistforeningen.se)
- **Additional Sources**: 
  - Local tourism websites
  - Park-specific information
  - Visitor reviews and tips

## Data Quality Guidelines
- **Accuracy**: Verify all information from official sources
- **Completeness**: Fill in all fields when possible
- **Seasonality**: Ensure seasonal information is accurate
- **Updates**: Review and update data annually
- **Local Knowledge**: Include insider tips and local recommendations

## Example Usage
```javascript
// Get park information
const park = parksDataManager.getPark('abisko');

// Get seasonal tips
const summerTips = parksDataManager.getSeasonalInfo('abisko', 'summer');

// Get trail recommendations
const easyTrails = parksDataManager.getTrailsByDifficulty('abisko', 'easy');

// Get accommodation options
const camping = parksDataManager.getAccommodationOptions('abisko', 'camping');
```

## Next Steps
1. **Complete Abisko data** (currently comprehensive)
2. **Add 2-3 more major parks** (Sarek, Fulufjället, Stora Sjöfallet)
3. **Integrate with PDF generation** for richer content
4. **Add seasonal images** and visual content
5. **Include local business recommendations**

## Notes
- All distances are in kilometers
- Temperatures are in Celsius
- Costs are in Swedish Krona (SEK)
- Coordinates use decimal degrees (WGS84)
- Seasonal information follows Swedish climate patterns
