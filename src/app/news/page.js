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

  // console.log("NewsPosts", posts);

  return (
    <>
      <Header>News</Header>
      <main className="w-full">
        {/* Posts Outer Container */}
        <div className="">
          {/* Card Container */}
          {posts.map((post) => {
            // let textWithBreaks = post.text.replace(/\n/g, "<br />");

            return (
              <div key={post.id} className="bg-slate-200 mt-8">
                <div className="px-32 font-bold text-3xl tracking-wide">
                  <p className="py-4 font-normal">
                    {new Date(post.date_gmt).toLocaleDateString()}
                  </p>
                  <h2 className="text-2xl font-bold">
                    {he.decode(post.title.rendered)}
                  </h2>
                </div>

                <div className="relative h-screen my-4">
                  <Image
                    src={post.image}
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt="beans"
                  />
                </div>
                <p className="px-32 tracking-wide">{post.text}</p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
