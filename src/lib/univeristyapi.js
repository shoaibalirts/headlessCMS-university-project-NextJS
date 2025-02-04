import { parse } from 'node-html-parser';

// Logo image in header --------------------------------

export async function getLogo(){
  try {
    const response = await fetch("http://localhost:8080/university/wordpress/wp-json/custom/v1/university-logo");
    const data = await response.json();
    // console.log("urllogo: ", data);
    return data;
  } catch (error) {
    console.log("ERROR: ",error);
  }
}

export async function getPrograms() {
  try {
    const response = await fetch(
      "http://localhost:8080/university/wordpress/wp-json/wp/v2/program"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Posts related to slug (student-noticeboard) --------------------------------
export async function getStudentNoticeBoardPageContent() {
  try {
    const response = await fetch(
      "http://localhost:8080/university/wordpress/wp-json/wp/v2/pages?slug=student-noticeboard"
    );
    const data = await response.json();
    // console.log(data);
    
    return data;
  } catch (error) {
    console.log(error);
  }
}

// All Categories available in WP Dashboard
export async function getAllCategories() {
  try {
    
    const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/categories");
    const data = await response.json();
    // console.log("Categories: ", data);
    
    return data;
  } catch (error) {}
}


// Get All Posts against each category id 
export async function getCategoryPosts(CATEGORY_ID) {
  try {
    
    const response = await fetch(`http://localhost:8080/university/wordpress/wp-json/wp/v2/posts?categories=${CATEGORY_ID}`);
    const data = await response.json();
    console.log("DATA: ",data);
    const processedPosts = data.map(post => {
      const root = parse(post.content.rendered);
      const image = root.querySelector('p img')?.getAttribute('src');
      const text = root.querySelectorAll('p')
        .filter(p => !p.querySelector('img'))
        .map(p => p.textContent)
        .join('\n')
        .trim();
      // console.log(image);
      // console.log(text);
      
     
      return {
        ...post,
        image,
        text,
      };
    });
    
    // return data;
    return processedPosts;
  } catch (error) {}
}



