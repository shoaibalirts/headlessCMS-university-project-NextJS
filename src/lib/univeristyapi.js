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
export async function getStudentNoticeBoard() {
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
export async function getStudentNoticeBoardCategoriesIds() {
  try {
    
    const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/categories?name=student-noticeboard");
    const data = await response.json();
    return data;
  } catch (error) {}
}

export async function getStudentNoticeBoardCategoryPosts(CATEGORY_ID) {
  try {
    
    const response = await fetch(`http://localhost:8080/university/wordpress/wp-json/wp/v2/posts?categories=${CATEGORY_ID}`);
    const data = await response.json();
    
    return data;
  } catch (error) {}
}

// Logo image in header --------------------------------

export async function getLogo(){
  try {
    const response = await fetch("http://localhost:8080/university/wordpress/wp-json/custom/v1/university-logo");
    const data = await response.json();
    console.log("urllogo: ", data);
    return data;
  } catch (error) {
    console.log("ERROR: ",error);
  }
}

// Posts related to slug (news) --------------------------------
export async function getNews() {
  try {
    const response = await fetch(
      "http://localhost:8080/university/wordpress/wp-json/wp/v2/pages?slug=news"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getNewsCategoriesIds() {
  try {
    
    const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/categories?name=news");
    const data = await response.json();
    return data;
  } catch (error) {}
}
export async function getNewsCategoryPosts(CATEGORY_ID) {
  try {
    
    const response = await fetch(`http://localhost:8080/university/wordpress/wp-json/wp/v2/posts?categories=${CATEGORY_ID}`);
    const data = await response.json();
    
    return data;
  } catch (error) {}
}