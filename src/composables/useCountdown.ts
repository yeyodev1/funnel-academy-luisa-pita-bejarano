import { computed, onMounted, onUnmounted, ref } from 'vue'

const STORAGE_KEY = 'bakanology_offer_expires_at'
const OFFER_DURATION = 60 * 60 * 1000

export function useCountdown() {
  const remaining = ref(0)
  let intervalId: ReturnType<typeof window.setInterval> | undefined

  const update = () => {
    const expiresAt = Number(localStorage.getItem(STORAGE_KEY))
    remaining.value = Number.isFinite(expiresAt) ? Math.max(0, expiresAt - Date.now()) : 0
  }

  onMounted(() => {
    let expiresAt = Number(localStorage.getItem(STORAGE_KEY))
    if (!Number.isFinite(expiresAt) || expiresAt <= 0) {
      expiresAt = Date.now() + OFFER_DURATION
      localStorage.setItem(STORAGE_KEY, String(expiresAt))
    }
    update()
    intervalId = window.setInterval(update, 1000)
  })

  onUnmounted(() => {
    if (intervalId !== undefined) window.clearInterval(intervalId)
  })

  const hours = computed(() => Math.floor(remaining.value / 3600000))
  const minutes = computed(() => Math.floor((remaining.value % 3600000) / 60000))
  const seconds = computed(() => Math.floor((remaining.value % 60000) / 1000))
  const isActive = computed(() => remaining.value > 0)
  const price = computed(() => {
    if (remaining.value > 40 * 60000) return 27
    if (remaining.value > 20 * 60000) return 37
    return 47
  })

  const format = (value: number) => String(value).padStart(2, '0')

  return {
    hours: computed(() => format(hours.value)),
    minutes: computed(() => format(minutes.value)),
    seconds: computed(() => format(seconds.value)),
    isActive,
    price,
  }
}
