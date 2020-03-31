import { useState, useMemo } from 'react'
import en from 'assets/i18n/en-US.json'
import br from 'assets/i18n/pt-BR.json'
import flattenWrapper from 'flatten-obj'

const flatten = flattenWrapper()

export const messagesProvider = {
  'en-US': flatten(en),
  'pt-BR': flatten(br),
}

export const useIntlProvider = () => {
  const [locale, setLocale] = useState('en-US')
  const messages = useMemo(() => {
    return messagesProvider[locale]
  }, [locale])

  return { locale, messages, setLocale }
}
