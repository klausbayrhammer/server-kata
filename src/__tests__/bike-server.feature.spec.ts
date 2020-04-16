import 'jest'
import fetch from 'node-fetch'

it('returns a bike if it has been added before', async () => {
    const bike = {
        color: 'red',
        frameSize: 'XXL'
    }
    await fetch('http://localhost:3000/bike/', { method: 'POST', body: JSON.stringify(bike)})

    const allBikes = await(await fetch('http://localhost:3000/bikes/')).json()

    expect(allBikes).toContain(bike)
})
