import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  // Create RSS feed with XSL stylesheet reference
  const rssWithStyle = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="/rss.xsl" type="text/xsl"?>
${await getRssString({
    title: 'Fluid Innovation Lab News',
    description: 'Latest updates from the Fluid Innovation Lab - Research breakthroughs, publications, and announcements in fluid dynamics and engineering.',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),
    trailingSlash: SITE.trailingSlash,
  })}`;

  return new Response(rssWithStyle, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
