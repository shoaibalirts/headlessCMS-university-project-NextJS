import he from "he";
import { getAllCategories, getCategoryPosts } from "@/lib/univeristyapi";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";

export default async function NewsPage() {
  // -------------------
  // Get All Categories available in wordpress
  const categories = await getAllCategories();
  // console.log("All Categories: ", categories);

  // Get only one Category named news
  const newsCategory = categories.filter(
    (category) => category.slug === "news"
  );
  // console.log("newsCategory id: ", newsCategory[0].id);

  // Each Category has id
  // Get All Posts spacific to this category id
  const posts = await getCategoryPosts(newsCategory[0].id);
  console.log("NewsPosts", posts);

  return (
    <>
      <Header />
      <main>
        {/* Posts Outer Container */}
        <div className="mt-4 shadow-xl m-8">
          {/* Card Container */}
          {posts.map((post) => {
            return (
              <div key={post.id} className="mt-4 border border-black p-2">
                <p>{new Date(post.date_gmt).toLocaleDateString()}</p>
                <h2 className="text-2xl font-bold">
                  {he.decode(post.title.rendered)}
                </h2>
                <div className="relative h-16 w-[600px]">
                  {/* <Image
                    src={logo}
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt="university logo"
                    className="hidden md:block"
                  /> */}
                </div>
                <p>{post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
