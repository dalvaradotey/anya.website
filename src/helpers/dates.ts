import moment from 'moment'

const months: any = {
  '01': 'enero',
  '02': 'febrero',
  '03': 'marzo',
  '04': 'abril',
  '05': 'mayo',
  '06': 'junio',
  '07': 'julio',
  '08': 'agosto',
  '09': 'septiembre',
  '10': 'octubre',
  '11': 'noviembre',
  '12': 'diciembre',
}

export const getHumanDate = (date: string): string => {
  const dateMoment = moment(date)
  return `${dateMoment?.format('DD')} de ${months?.[dateMoment?.format('MM')]} del ${dateMoment?.format('YYYY')}`
}
