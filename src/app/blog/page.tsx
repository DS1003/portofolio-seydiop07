import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* <Heading marginBottom="l" variant="display-strong-s">
        Le blog arrive bientôt !
      </Heading> */}
      <Column fillWidth flex={1} style={{ minHeight: 320, alignItems: "center", justifyContent: "center", display: "flex" }}>
        <Heading variant="display-strong-m" color="accent">Coming Soon !</Heading>
        <p style={{marginTop: 16, color: '#888', fontSize: '1.1rem'}}>La section blog arrive très bientôt. Restez connecté !</p>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
