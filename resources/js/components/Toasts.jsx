import { useUI } from '../context/UIContext'

export default function Toasts() {
  const { toasts } = useUI()
  return (
    <div className="toast-container" id="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="toast" role="status">
          {t.message}
        </div>
      ))}
    </div>
  )
}