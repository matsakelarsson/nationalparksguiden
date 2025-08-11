// PDF Generation Logic

function generatePDF() {
  console.log('Generate PDF function called');
  
  // Get and validate form data
  const formData = getFormData();
  if (!formData) return;

  // Get selected values
  const { parkName, seasonText, durationText, accommodationText, transportText, entranceText } = formData;

  try {
    // Create PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: `${parkName} - National Park Guide`,
      subject: 'Personalized National Park Visit Guide',
      author: 'Swedish National Park Guide',
      creator: 'National Park Guide Generator'
    });

    // Add title
    doc.setFontSize(24);
    doc.setTextColor(44, 62, 80);
    doc.text(`${parkName}`, 105, 30, { align: 'center' });

    // Add trip details table
    doc.setFontSize(12);
    doc.setTextColor(44, 62, 80);
    
    const tripDetails = [
      ['Trip Details', ''],
      ['National Park', parkName],
      ['Season', seasonText],
      ['Duration', durationText],
      ['Accommodation', accommodationText],
      ['Departure City', formData.originCity],
      ['Transportation', transportText],
      ['Park Entrance', entranceText]
    ];

    doc.autoTable({
      startY: 60,
      head: [['Field', 'Value']],
      body: tripDetails.slice(1),
      theme: 'grid',
      headStyles: {
        fillColor: [102, 126, 234],
        textColor: 255,
        fontSize: 12,
        fontStyle: 'bold'
      },
      bodyStyles: {
        fontSize: 11,
        textColor: [44, 62, 80]
      },
      alternateRowStyles: {
        fillColor: [248, 249, 250]
      }
    });

    // Add park information and overview
    let currentY = doc.lastAutoTable.finalY + 20;
    
    doc.setFontSize(16);
    doc.setTextColor(52, 73, 94);
    doc.text('Park Information & Overview', 20, currentY);
    currentY += 15;
    
    doc.setFontSize(11);
    doc.setTextColor(44, 62, 80);
    
    // Get park data for overview
    const parkData = parksDataManager.getPark(formData.parkId);
    if (parkData && parkData.overview) {
      // Add park description
      const description = parkData.overview.description;
      const lines = doc.splitTextToSize(description, 160); // Wrap text to fit page width
      
      lines.forEach(line => {
        if (currentY > 250) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(line, 25, currentY);
        currentY += 8;
      });
      
      currentY += 10;
      
      // Add key highlights
      if (parkData.overview.highlights) {
        doc.setFontSize(12);
        doc.setTextColor(52, 73, 94);
        doc.text('Key Highlights:', 25, currentY);
        currentY += 10;
        
        doc.setFontSize(10);
        doc.setTextColor(44, 62, 80);
        
        parkData.overview.highlights.forEach(highlight => {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(`• ${highlight}`, 30, currentY);
          currentY += 8;
        });
      }
      
      currentY += 15;
    }

    // Add transportation guide based on user's choice
    currentY += 10;
    doc.setFontSize(16);
    doc.setTextColor(52, 73, 94);
    doc.text('Transportation Guide', 20, currentY);
    currentY += 15;

    doc.setFontSize(11);
    doc.setTextColor(44, 62, 80);
    
    // Get transportation info from park data
    // Map transport values to JSON keys
    const transportKeyMap = {
      'car': 'by_car',
      'train': 'by_train', 
      'bus': 'by_bus',
      'plane': 'by_plane',
      'train-bus': 'by_train' // Default to train info for combined transport
    };
    
    const transportKey = transportKeyMap[formData.transportValue] || formData.transportValue;
    const transportInfo = parksDataManager.getTransportationInfo(formData.parkId, transportKey);
    if (transportInfo) {
      // Add specific transportation details
      const transportDetails = [
        `Mode: ${transportText}`,
        `From: ${formData.originCity}`,
        `To: ${parkName}`
      ];
      
      transportDetails.forEach(detail => {
        if (currentY > 250) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(detail, 25, currentY);
        currentY += 10;
      });
      
      currentY += 5;
      
      // Add transportation-specific tips
      if (transportInfo.description) {
        const lines = doc.splitTextToSize(transportInfo.description, 160);
        lines.forEach(line => {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(line, 25, currentY);
          currentY += 8;
        });
        currentY += 5;
      }
      
      // Add specific details based on transport type
      if (formData.transportValue === 'car') {
        if (transportInfo.parking) {
          doc.text(`Parking: ${transportInfo.parking}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.road_conditions) {
          doc.text(`Road Conditions: ${transportInfo.road_conditions}`, 25, currentY);
          currentY += 10;
        }
      } else if (formData.transportValue === 'train') {
        if (transportInfo.frequency) {
          doc.text(`Frequency: ${transportInfo.frequency}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.duration) {
          doc.text(`Duration: ${transportInfo.duration}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.cost) {
          doc.text(`Cost: ${transportInfo.cost}`, 25, currentY);
          currentY += 10;
        }
      } else if (formData.transportValue === 'bus') {
        if (transportInfo.frequency) {
          doc.text(`Frequency: ${transportInfo.frequency}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.duration) {
          doc.text(`Duration: ${transportInfo.duration}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.cost) {
          doc.text(`Cost: ${transportInfo.cost}`, 25, currentY);
          currentY += 10;
        }
      } else if (formData.transportValue === 'plane') {
        if (transportInfo.airlines) {
          doc.text(`Airlines: ${transportInfo.airlines}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.duration) {
          doc.text(`Flight Duration: ${transportInfo.duration}`, 25, currentY);
          currentY += 10;
        }
        if (transportInfo.transfer) {
          doc.text(`Transfer: ${transportInfo.transfer}`, 25, currentY);
          currentY += 10;
        }
      }
    } else {
      // Fallback if no specific transport info
      doc.text(`Transportation: ${transportText}`, 25, currentY);
      currentY += 10;
      doc.text(`From: ${formData.originCity}`, 25, currentY);
      currentY += 10;
      doc.text(`To: ${parkName}`, 25, currentY);
      currentY += 10;
    }
    
    currentY += 10;

    // Add Wildlife and Flora section
    doc.setFontSize(16);
    doc.setTextColor(52, 73, 94);
    doc.text('Local Wildlife and Flora', 20, currentY);
    currentY += 15;

    doc.setFontSize(11);
    doc.setTextColor(44, 62, 80);
    
    // Get wildlife and flora info from park data
    const natureInfo = parksDataManager.getNatureInfo(formData.parkId, formData.seasonValue);
    if (natureInfo && natureInfo.wildlife) {
      // Add Wildlife section
      doc.setFontSize(12);
      doc.setTextColor(52, 73, 94);
      doc.text('Wildlife', 25, currentY);
      currentY += 10;
      
      doc.setFontSize(10);
      doc.setTextColor(44, 62, 80);
      
      // Add mammals
      if (natureInfo.wildlife.mammals) {
        doc.text('Mammals:', 30, currentY);
        currentY += 8;
        natureInfo.wildlife.mammals.forEach(animal => {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(`• ${animal}`, 35, currentY);
          currentY += 6;
        });
        currentY += 5;
      }
      
      // Add birds
      if (natureInfo.wildlife.birds) {
        doc.text('Birds:', 30, currentY);
        currentY += 8;
        natureInfo.wildlife.birds.forEach(bird => {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(`• ${bird}`, 35, currentY);
          currentY += 6;
        });
        currentY += 5;
      }
      
      // Add best viewing time for selected season
      if (natureInfo.wildlife.best_viewing) {
        doc.text(`Best viewing (${formData.seasonText}): ${natureInfo.wildlife.best_viewing}`, 30, currentY);
        currentY += 10;
      }
    }
    
    // Add Flora section
    if (natureInfo && natureInfo.flora) {
      currentY += 5;
      doc.setFontSize(12);
      doc.setTextColor(52, 73, 94);
      doc.text('Flora', 25, currentY);
      currentY += 10;
      
      doc.setFontSize(10);
      doc.setTextColor(44, 62, 80);
      
      // Add trees
      if (natureInfo.flora.trees) {
        doc.text('Trees:', 30, currentY);
        currentY += 8;
        natureInfo.flora.trees.forEach(tree => {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(`• ${tree}`, 35, currentY);
          currentY += 6;
        });
        currentY += 5;
      }
      
      // Add flowers
      if (natureInfo.flora.flowers) {
        doc.text('Flowers and Plants:', 30, currentY);
        currentY += 8;
        natureInfo.flora.flowers.forEach(flower => {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.text(`• ${flower}`, 35, currentY);
          currentY += 6;
        });
        currentY += 5;
      }
      
      // Add best viewing time for selected season
      if (natureInfo.flora.best_viewing) {
        doc.text(`Best viewing (${formData.seasonText}): ${natureInfo.flora.best_viewing}`, 30, currentY);
        currentY += 10;
      }
    }
    
    currentY += 10;

    // Add Recommended Hiking Trails section
    doc.setFontSize(16);
    doc.setTextColor(52, 73, 94);
    doc.text('Recommended Hiking Trails', 20, currentY);
    currentY += 15;

    doc.setFontSize(11);
    doc.setTextColor(44, 62, 80);
    
    // Get trail recommendations based on user preference
    let trailsToShow = [];
    
    if (formData.hikeDifficulty === 'easy') {
      trailsToShow = parksDataManager.getTrailsByDifficulty(formData.parkId, 'easy');
    } else if (formData.hikeDifficulty === 'moderate') {
      trailsToShow = parksDataManager.getTrailsByDifficulty(formData.parkId, 'moderate');
    } else if (formData.hikeDifficulty === 'challenging') {
      trailsToShow = parksDataManager.getTrailsByDifficulty(formData.parkId, 'challenging');
    } else {
      // Show all trails if no preference selected
      const easyTrails = parksDataManager.getTrailsByDifficulty(formData.parkId, 'easy');
      const moderateTrails = parksDataManager.getTrailsByDifficulty(formData.parkId, 'moderate');
      const challengingTrails = parksDataManager.getTrailsByDifficulty(formData.parkId, 'challenging');
      trailsToShow = [...easyTrails, ...moderateTrails, ...challengingTrails];
    }
    
    // Display trails based on user preference
    if (trailsToShow.length > 0) {
      trailsToShow.forEach(trail => {
        if (currentY > 250) {
          doc.addPage();
          currentY = 20;
        }
        
        // Trail name and difficulty
        doc.setFontSize(11);
        doc.setTextColor(52, 73, 94);
        doc.text(`${trail.name} (${getDifficultyLabel(trail)})`, 30, currentY);
        currentY += 8;
        
        // Trail stats
        doc.setFontSize(9);
        doc.setTextColor(44, 62, 80);
        doc.text(`${trail.distance_km} km • ${trail.duration_hours} hours • +${trail.elevation_gain}m`, 30, currentY);
        currentY += 8;
        
        // Starting point
        if (trail.starting_point) {
          doc.text(`Starting point: ${trail.starting_point}`, 30, currentY);
          currentY += 8;
        }
        
        // Description
        const descLines = doc.splitTextToSize(trail.description, 150);
        descLines.forEach(line => {
          doc.text(line, 30, currentY);
          currentY += 6;
        });
        
        currentY += 8;
      });
    } else {
      doc.text('No trails available for the selected difficulty level.', 30, currentY);
      currentY += 10;
    }
    
    currentY += 10;

    // Add guide sections
    const guideSections = [
      'Packing Checklist',
      'Safety Information',
      'Photography Tips',
      'Emergency Contacts'
    ];
    
    doc.setFontSize(16);
    doc.setTextColor(52, 73, 94);
    doc.text('Guide Sections', 20, currentY);
    currentY += 15;

    doc.setFontSize(11);
    doc.setTextColor(44, 62, 80);
    
    guideSections.forEach((section, index) => {
      if (currentY > 250) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(section, 25, currentY);
      currentY += 12;
    });

    // Add seasonal tips
    currentY += 10;
    doc.setFontSize(14);
    doc.setTextColor(52, 73, 94);
    doc.text('Seasonal Tips', 20, currentY);
    currentY += 15;

    doc.setFontSize(10);
    doc.setTextColor(44, 62, 80);
    
    const seasonalTips = getSeasonalTips(formData.seasonValue, formData.parkId);
    seasonalTips.forEach(tip => {
      if (currentY > 250) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(`• ${tip}`, 25, currentY);
      currentY += 10;
    });

    // Store the generated PDF
    window.generatedPDF = doc;
    
    // Open PDF directly in new tab
    const pdfBlob = window.generatedPDF.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    // Open PDF in new tab - browser will use its native PDF viewer
    window.open(pdfUrl, '_blank');
    
    // Clean up the URL after a delay to allow the browser to load it
    setTimeout(() => {
      URL.revokeObjectURL(pdfUrl);
    }, 1000);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
}
