import accounting from 'accounting'

const currenciesSettings: any = {
  CLP: {
    id: 'CLP',
    symbol: 'CLP$ ',
    thousand: '.',
    decimal: ',',
    precision: 0,
    is_base: true,
  },
  USD: {
    id: 'USD',
    symbol: 'US$ ',
    thousand: ',',
    decimal: '.',
    precision: 2,
    is_base: true,
  },
  ARS: {
    id: 'ARS',
    symbol: 'ARS$ ',
    thousand: '.',
    decimal: ',',
    precision: 0,
    is_base: true,
  },
  PEN: {
    id: 'PEN',
    symbol: 'S/ ',
    thousand: ',',
    decimal: '.',
    precision: 2,
    is_base: true,
  },
  BRL: {
    id: 'BRL',
    symbol: 'R$ ',
    thousand: '.',
    decimal: ',',
    precision: 2,
    is_base: false,
  },
  EUR: {
    id: 'EUR',
    symbol: '€ ',
    thousand: ',',
    decimal: '.',
    precision: 2,
    is_base: false,
  },
  COP: {
    id: 'COP',
    symbol: 'COP$ ',
    thousand: '.',
    decimal: ',',
    precision: 0,
    is_base: true,
  },
  MXN: {
    id: 'MXN',
    symbol: 'MXN$ ',
    thousand: ',',
    decimal: '.',
    precision: 2,
  },
}

export const setCurrencyFormat = (amount: number, currency: string) => {
  const { symbol, precision, thousand } = currenciesSettings[currency]

  return accounting.formatMoney(amount, '$', precision, thousand)
}
