/**
 * Created by Misha on 30.05.2017.
 */

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                    loader: 'url-loader'
                }
            ]
        }
    }
};