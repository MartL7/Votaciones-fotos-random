export const toastAlert = (object: ToastOptions) => {
  const { title, message, type, location, icon, theme, dismissible } = object

  window.toast({
      title: title,
      message: message,
      type: type,
      icon: icon,
      theme: theme,
      location: location,
      dismissible: dismissible
  })
}