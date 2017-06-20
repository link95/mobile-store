/**
 * Created by Misha on 18.06.2017.
 */
module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }]
        }
    };
};