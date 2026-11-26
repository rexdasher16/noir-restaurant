import PageHeader from "@/components/PageHeader";
import LinkButton from "@/components/ui/LinkButton";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main">
      <PageHeader eyebrow="404" title="This table isn't here" description="The page you were looking for doesn't exist." />
      <Container className="py-16">
        <LinkButton href="/">Back to home</LinkButton>
      </Container>
    </main>
  );
}
