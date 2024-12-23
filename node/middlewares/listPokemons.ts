export async function listPokemons(ctx: Context) {
  const {
    clients: { pokemon },
  } = ctx

  try {
    const response = await pokemon.getPokemons()

    const { results } = response

    console.log('response', response)

    ctx.status = 200
    ctx.body = {
      pokemons: results,
    }
  } catch (error) {
    ctx.status = 500
    console.log(error)
    ctx.body = 'Internal server error'
  }
}
