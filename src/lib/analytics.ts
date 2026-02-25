import { createScript, isScriptInjected, track } from '@databuddy/sdk'

type EventProps = Record<string, string | number | boolean>

function clientId(): string | undefined {
  return import.meta.env?.VITE_DATABUDDY_CLIENT_ID
}

function normalizeText(value: string | null | undefined): string | undefined {
  if (!value) return undefined
  const text = value.trim().replace(/\s+/g, ' ')
  if (!text) return undefined
  return text.slice(0, 140)
}

function interactionTarget(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null
  const hit = target.closest('a,button,[role="button"],input[type="button"],input[type="submit"]')
  return hit instanceof HTMLElement ? hit : null
}

function trackInteraction(element: HTMLElement): void {
  const tag = element.tagName.toLowerCase()
  const href = element instanceof HTMLAnchorElement ? element.getAttribute('href') ?? '' : ''
  const label =
    normalizeText(element.getAttribute('data-track-label')) ??
    normalizeText(element.textContent) ??
    normalizeText(element.getAttribute('aria-label')) ??
    'unknown'
  const section =
    normalizeText(element.closest('section')?.id) ??
    normalizeText(element.closest('header')?.id) ??
    'root'
  const eventName = element.getAttribute('data-track') ?? 'ui_click'
  const props: EventProps = {
    label,
    tag,
    section
  }
  if (href) props.href = href
  track(eventName, props)
}

export function trackWebEvent(name: string, properties?: EventProps): void {
  if (!clientId()) return
  track(name, properties ?? {})
}

export function initWebAnalytics(): (() => void) | undefined {
  const id = clientId()
  if (!id || typeof document === 'undefined') return

  if (!isScriptInjected()) {
    const script = createScript({
      clientId: id,
      trackErrors: false,
      trackInteractions: false,
      trackPerformance: false,
      trackWebVitals: false,
      trackOutgoingLinks: false
    })
    document.head.appendChild(script)
  }

  const onClick = (event: MouseEvent): void => {
    const target = interactionTarget(event.target)
    if (!target) return
    trackInteraction(target)
  }

  document.addEventListener('click', onClick, true)
  track('page_view', { path: window.location.pathname })

  return () => {
    document.removeEventListener('click', onClick, true)
  }
}
