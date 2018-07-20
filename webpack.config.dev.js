loaders: [
    {
        test:/\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.dev')
    },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
]