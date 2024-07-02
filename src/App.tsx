import { Smile, Star, UserPlus } from 'lucide-react'
import './App.css'
import { useTranslation, Trans } from 'react-i18next'
import { Button } from './components/ui/button'

function App() {
  const { t, i18n } = useTranslation()

  const langs = [{ value: "en", label: "🇺🇸"}, { value: "zh", label: "🇨🇳"}]

  const currentLangIndex = langs.findIndex(lang => lang.value === i18n.language) || 0

  const otherLangIndex = currentLangIndex === 0 ? 1 : 0

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='flex flex-1 flex-col w-full space-y-8 max-w-md px-4 mt-16'>
        <div>
          <div className='mb-4 flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <UserPlus className='w-8 h-8' />
              <h1 className='text-xl font-semibold'>{t('title')}</h1>
            </div>
            <Button variant="ghost" className='text-lg px-2 py-1 h-8' onClick={() => i18n.changeLanguage(langs[otherLangIndex].value)}>
              {langs[currentLangIndex].label}
            </Button>
          </div>
          <Trans i18nKey="description" components={{
            offline: <a href='https://github.com/offline-studio' className='underline underline-offset-2 text-primary font-semibold' target='_blank' />
          }}>
            <p>How to let users create their first EOS accounts has been a dilemma for the entire EOS network since the first day it existed. As RAM prices skyrocketed, the issue became even more serious.</p>
            <p>This site, powered by <a href='https://www.eoslabs.io/' target='_blank'>Offline Studio</a>, aims to lower the threshold by distributing FREE EOS accounts to those who need them.</p>
          </Trans>
        </div>
        <div className='rounded-md bg-secondary text-secondary-foreground border border-border p-6'>
          <div className='flex flex-col space-y-4'>
            <h1 className='text-xl font-semibold'>{t("guide.title")}</h1>
            <p>{t("guide.description")}</p>
            <Button variant="outline" className='w-32' asChild>
              <a href='https://t.me/eoshelper_bot?start=tp'>
                <img src='/telegram.svg' className='w-4 h-4 mr-2' alt='telegram' />
                EOS Helper
              </a>
            </Button>
          </div>
          <div className='flex items-center space-x-2 mt-12'>
            <Star className='w-6 h-6' />
            <span className='text-sm font-semibold'>{t('guide.alert')}</span>
          </div>
        </div>
      </div>
      <footer className='py-8'>
        <div className='flex items-center space-x-2 text-sm'>
          <Smile className='w-4 h-4' />
          <span>{t("footer.tip")}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
