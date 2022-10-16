import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.json-generator.com/templates/-xdNcNKYtTFG/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: '214bda7e-7827-4ab4-975b-9a62f5015306',
          name: {
            last: 'Pace',
            first: 'Irma',
          },
          email: 'chandra.oneill@emtrac.career',
          picture: 'https://placebear.com/231/228',
          location: {
            latitude: 22.37,
            longitude: 114.01,
          },
        },
        {
          _id: '7355c108-5302-41e9-bc41-e60a8c5e2d99',
          name: {
            last: 'Terry',
            first: 'Jaime',
          },
          email: 'scott.richards@portaline.moe',
          picture: 'https://placebear.com/233/166',
          location: {
            latitude: 22.34,
            longitude: 113.41,
          },
        },
        {
          _id: '2ef52f10-83ca-4186-900a-ab0bc432583f',
          name: {
            last: 'Wise',
            first: 'Solomon',
          },
          email: 'shana.velazquez@arctiq.florist',
          picture: 'https://placebear.com/126/58',
          location: {
            latitude: 22.39,
            longitude: 114.17,
          },
        },
      ]),
    )
  }),
]
