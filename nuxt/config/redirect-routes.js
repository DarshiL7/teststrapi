module.exports =  [
    // { from: '^/myoldurl/(.*)$', to: '/comeallhere' }, // Many urls to one
    // { from: '^/anotherold/(.*)$', to: '/new/$1' }, // One to one mapping
    { from: '^/abc', to: '/about', statusCode: 301 },
    { from: '^/da', to: '/about', statusCode: 404 },
    // {
    //     from: '^/someUrlHere/(.*)$',
    //     to: (from, req) => {
    //       const param = req.url.match(/functionAsync\/(.*)$/)[1]
    //       return `/posts/${param}`
    //     }
    //   }
  ]
