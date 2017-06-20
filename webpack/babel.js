/**
 * Created by Misha on 18.06.2017.
 */
module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }]
                }
            ]
        }
    };
};