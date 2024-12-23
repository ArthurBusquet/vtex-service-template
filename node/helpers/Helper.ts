import { Apps } from '@vtex/api'

const getAppSettings = async (vtex: any) => {
  const apps = new Apps(vtex)

  console.log('teste', process.env.VTEX_APP_ID)

  const data = await apps.getAppSettings(process.env.VTEX_APP_ID as string)

  return data
}

export { getAppSettings }
