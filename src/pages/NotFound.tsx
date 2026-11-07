import { Seo } from '@/components/Seo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-32 text-center">
      <Seo title="Page not found | Tea Break Chai" description="This page could not be found." />
      <span className="text-xs font-semibold uppercase tracking-widest2 text-tea-brown">
        404
      </span>
      <h1 className="font-display text-4xl text-charcoal-900 md:text-5xl">
        This page has steeped a little too long.
      </h1>
      <p className="max-w-md text-charcoal-500">
        We couldn&rsquo;t find the page you were looking for. Let&rsquo;s get you back to
        something warm.
      </p>
      <Button href="/">Back to home</Button>
    </Container>
  )
}
