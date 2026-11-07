import SectionTitle from "../components/SectionTitle"
import Tile from "../components/Tile"
import { posts } from "../data/portfolio"
import type { ModalData } from "../components/Modal"

type NewsProps = {
  onOpen: (data: ModalData) => void
}

const News = ({ onOpen }: NewsProps) => {
  return (
    <div className="enter mx-auto w-full max-w-[968px] px-5 py-24 sm:px-10">
      <SectionTitle kicker="News" title="Latest News" />
      <ul className="grid gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post.title} className="bg-card shadow-[0_0_20px_rgb(0_0_0_/_7%)]">
            <button
              type="button"
              className="group block w-full text-left"
              onClick={() =>
                onOpen({
                  title: post.title,
                  kicker: post.category,
                  summary: post.body,
                  points: [],
                  art: post.art,
                  meta: [{ label: "Date", value: post.date }],
                })
              }
            >
              <div className="aspect-[16/10] overflow-hidden">
                <div className="h-full transition-transform duration-300 group-hover:scale-105">
                  <Tile art={post.art} label={post.title} />
                </div>
              </div>
              <div className="px-8 py-7">
                <p className="mb-4 border-b border-line pb-3 font-display text-[13px] text-muted">
                  By {post.category}
                  <span className="px-2">/</span>
                  {post.date}
                </p>
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <span className="read-more mt-5">
                  <span>Read more</span>
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News
