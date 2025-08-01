const blogPluginExports = require('@docusaurus/plugin-content-blog');

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);
  const pluginOptions = pluginArgs[1];

  return {
    ...blogPluginInstance,
    contentLoaded: async function (params) {
      const { content, actions } = params;
      const recentPostsLimit = 4;
      const recentPosts = [...content.blogPosts].slice(0, recentPostsLimit);
      const allPosts = [...content.blogPosts];

      async function createRecentPostModule(blogPost, index) {
        if (!blogPost?.metadata?.source || !blogPost?.metadata?.permalink) {
          console.warn(
            `Skipping recent blog post at index ${index}: missing metadata`
          );
          return null;
        }
        return {
          metadata: await actions.createData(
            `home-page-recent-post-metadata-${index}.json`,
            JSON.stringify({
              title: blogPost.metadata.title,
              description: blogPost.metadata.description,
              frontMatter: blogPost.metadata.frontMatter,
              content: { metadata: blogPost.metadata },
            })
          ),
          Preview: {
            __import: true,
            path: blogPost.metadata.source,
            query: { truncated: true },
          },
        };
      }

      async function createMorePostModule(blogPost, index) {
        if (!blogPost?.metadata?.source || !blogPost?.metadata?.permalink) {
          console.warn(
            `Skipping blog post at index ${index}: missing metadata`
          );
          return null;
        }
        return {
          metadata: await actions.createData(
            `blog-page-more-post-metadata-${index}.json`,
            JSON.stringify({
              title: blogPost.metadata.title,
              description: blogPost.metadata.description,
              frontMatter: blogPost.metadata.frontMatter,
              content: { metadata: blogPost.metadata },
            })
          ),
          Preview: {
            __import: true,
            path: blogPost.metadata.source,
          },
        };
      }

      actions.addRoute({
        path: process.env.GITHUB_ACTIONS
          ? `${process.env.REACT_APP_BASE_URL}`
          : '/',
        exact: true,
        component: '@site/src/pages/home.tsx',
        modules: {
          homePageBlogMetadata: await actions.createData(
            'home-page-blog-metadata.json',
            JSON.stringify({
              blogTitle: pluginOptions.blogTitle,
              blogDescription: pluginOptions.blogDescription,
              totalPosts: content.blogPosts.length,
              totalRecentPosts: recentPosts.length,
            })
          ),
          recentPosts: await Promise.all(
            recentPosts.map(createRecentPostModule)
          ).then((results) => results.filter(Boolean)),
        },
      });

      const seenPermalinks = new Set();
      for (let i = 0; i < allPosts.length; i++) {
        const blogPost = allPosts[i];
        if (
          !blogPost?.metadata?.permalink ||
          seenPermalinks.has(blogPost.metadata.permalink)
        ) {
          console.warn(
            `Skipping blog post at index ${i}: missing or duplicate permalink`
          );
          continue;
        }
        seenPermalinks.add(blogPost.metadata.permalink);
        actions.addRoute({
          path: blogPost.metadata.permalink,
          exact: true,
          component: '@site/src/theme/BlogPostPage/index.js',
          modules: {
            blogPostPageMetadata: await actions.createData(
              `blog-page-${i}-metadata.json`,
              JSON.stringify({
                blogTitle: pluginOptions.blogTitle,
                blogDescription: pluginOptions.blogDescription,
                totalPosts: content.blogPosts.length,
                totalRecentPosts: recentPosts.length,
              })
            ),
            allPosts: await Promise.all(
              allPosts.map(createMorePostModule)
            ).then((results) => results.filter(Boolean)),
          },
        });
      }

      return blogPluginInstance.contentLoaded(params);
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
