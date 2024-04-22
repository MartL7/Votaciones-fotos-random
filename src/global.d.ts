interface ToastOptions {
	title: string
	message: string
	type?: "success" | "error" | "warning" | "info"
	location?:
		| "top-right"
		| "top-center"
		| "top-left"
		| "bottom-right"
		| "bottom-center"
		| "bottom-left"
	icon?: boolean
	theme?: string
	dismissible?: boolean
}

interface Window {
	toast: (options: ToastOptions) => void
}