import { ArrowRight, Calendar, Clock, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'Building Efficient Web Scrapers with Python',
    excerpt: 'Learn best practices for creating robust, maintainable web scraping solutions that respect rate limits and handle edge cases gracefully.',
    date: 'Coming Soon',
    readTime: '8 min read',
    category: 'Tutorial',
  },
  {
    title: 'Data Engineering Pipelines with Airflow',
    excerpt: 'A deep dive into orchestrating complex data workflows using Apache Airflow, from setup to production deployment.',
    date: 'Coming Soon',
    readTime: '12 min read',
    category: 'Guide',
  },
  {
    title: 'From Data to Insights: Analytics Best Practices',
    excerpt: 'How to transform raw data into actionable insights using Python, pandas, and visualization libraries.',
    date: 'Coming Soon',
    readTime: '10 min read',
    category: 'Insights',
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Blog
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Thoughts & Insights
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Writing about software engineering, data, and the lessons learned along the way.
            </p>
          </div>

          {/* Coming soon message */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12 text-center">
            <PenLine className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Blog Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm currently working on some articles to share my experiences and learnings. 
              Stay tuned for upcoming content!
            </p>
          </div>

          {/* Preview posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-soft group opacity-60"
              >
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">
                  {post.category}
                </span>

                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
