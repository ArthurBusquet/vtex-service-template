import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { getAppSettings } from '../helpers/Helper'

export default class Pokemon extends ExternalClient {
  private settings: Record<string, string>
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://pokeapi.co', context, {
      ...options,
      headers: {},
    })
    this.settings = {}
  }

  private async getSettings() {
    this.settings = await getAppSettings(this.context)

    console.log('settings', this.settings)
  }

  private async getHeaders() {
    await this.getSettings()
    return {
      'X-VTEX-API-AppKey': this.settings.vtexAppKey,
      'X-VTEX-API-AppToken': this.settings.vtexAppToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'cache-Control': 'no-cache',
    }
  }

  public async getPokemons(): Promise<any> {
    return this.http.get(`/api/v2/pokemon`, {
      headers: await this.getHeaders(),
    })
  }
}
