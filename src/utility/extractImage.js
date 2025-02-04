function extractImage(content) {
    // Create a new DOMParser instance
    const parser = new DOMParser();
    
    // Parse the HTML string into a document
    const doc = parser.parseFromString(content, 'text/html');
    
    // Find the first <img> element in the parsed content
    const imgElement = doc.querySelector('img');
    
    if (imgElement) {
      return imgElement.outerHTML; // Return the entire <img> tag as a string
    }
    
    return null; // Return null if no <img> tag is found
  }