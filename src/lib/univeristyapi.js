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

export async function getStudentNoticeBoard() {
  try {
    const response = await fetch(
      "http://localhost:8080/university/wordpress/wp-json/wp/v2/pages?slug=student-noticeboard"
    );
    const data = await response.json();
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

export async function getImage(){
  try {
    const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/media");
    const data = await response.json();
    return data;
  } catch (error) {
    
  }
 
}