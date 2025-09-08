import { Column, Meta, Schema, Heading } from "@once-ui-system/core";
import { baseURL, about, person, work, newsletter } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Mailchimp } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="s">
      <Schema
        as="article"
        baseURL={baseURL}
        title={work.title}
        description={work.description}
        path={work.path}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/work`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* <Heading marginBottom="l" variant="display-strong-s">
        Le work arrive bientôt !
      </Heading> */}
      <Column fillWidth flex={1} style={{ minHeight: 320, alignItems: "center", justifyContent: "center", display: "flex" }}>
        <Heading variant="display-strong-m" color="accent">Coming Soon !</Heading>
        <p style={{marginTop: 16, color: '#888', fontSize: '1.1rem'}}>La section work arrive très bientôt. Restez connecté !</p>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
