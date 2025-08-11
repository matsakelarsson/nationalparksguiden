# Swedish National Park Guide PDF Generator

A simple web application that generates personalized PDF guides for visiting Swedish national parks based on user preferences.

## Features

- **Form-based input** for trip planning:
  - National park selection (29 Swedish parks available)
  - Season selection (Spring, Summer, Autumn, Winter)
  - Trip duration (Day trip to 2 weeks)
  - Accommodation preferences (Tent, Cabin, or Both)
  - Departure city input
  - Transportation options (Car, Train, Bus, or Train+Bus)
  - Park entrance selection (varies by park)

- **PDF Generation** with:
  - Professional formatting and styling
  - Trip details table
  - Guide sections overview
  - Seasonal tips and recommendations
  - Proper metadata and file naming

- **User Experience**:
  - Modern, responsive design
  - Form validation
  - PDF preview modal
  - Download functionality
  - Mobile-friendly interface

## How to Use

1. **Open the application**: Simply open `index.html` in any modern web browser
2. **Fill out the form**: Select your preferences for all required fields
3. **Generate PDF**: Click the "Generate PDF" button
4. **Preview**: Review your guide in the preview modal
5. **Download**: Click "Download PDF" to save the file to your device

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **PDF Generation**: Uses jsPDF library for client-side PDF creation
- **Styling**: Modern CSS with gradient backgrounds and responsive design
- **Dependencies**: 
  - jsPDF (via CDN)
  - jsPDF AutoTable plugin (via CDN)

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript features
- CSS Grid and Flexbox
- Modern CSS properties

## File Structure

```
nationalparksguiden/
├── index.html          # Main application file
├── css/
│   └── style.css      # Styling and layout
└── README.md          # This file
```

## Customization

The application can be easily customized by:
- Adding more national parks to the selection
- Modifying the seasonal tips and recommendations
- Adjusting the PDF layout and content
- Changing the color scheme and styling

## License

This project is open source and available under the MIT License.
