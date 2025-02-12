import Image from "next/image";
import ArticleService from "@/services/Articles";
import { PageWrapper, Pagination } from "@/components";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; limit?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const articles = await ArticleService.getHomeArticles(currentPage, limit);
  const latestArticles = await ArticleService.getHomeLatestArticles();

  return (
    <PageWrapper>
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Algo Chamativo</p>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {latestArticles.data.map(({ title, image }, index) => {
            return (
              <div key={index} className="flex-center relative overflow-hidden">
                <div className="h-full w-full">
                  <Image
                    src={`/assets/images/articles/${image}`}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    width={600}
                    height={400}
                  />
                </div>
                <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="flex flex-col gap-4">
              {articles.data.map(({ title, excerpt, image }, index) => {
                return (
                  <div
                    key={index}
                    className="flex bg-slate-800 rounded-md py-4"
                  >
                    <div className="flex items-center">
                      <div className="h-40 rounded-r-lg overflow-hidden">
                        <Image
                          src={`/assets/images/articles/${image}`}
                          alt={title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105 rounded-r-lg"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 pl-4">
                      <h2 className="text-3xl mb-4 text-indigo-400">{title}</h2>
                      <p className="flex-grow">{excerpt}</p>
                      <button className="bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max">
                        Ler mais
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="my-8">
              <Pagination
                currentPage={articles.metadata.page}
                totalPages={articles.metadata.totalPages}
              />
            </div>
          </div>
          <div className="col-span-4 bg-emerald-500">D</div>
        </div>
      </div>
    </PageWrapper>
  );
}
