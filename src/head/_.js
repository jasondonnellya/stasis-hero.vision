import { Component } from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";

class Head extends Component {
    render() {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>Stasis Hero: Vision</title>

                    {/* Global site tag (gtag.js) - Google Analytics */}
                    {
                        process.env.NODE_ENV === 'production' &&
                        <>
                            <script async src="https://www.googletagmanager.com/gtag/js?id=G-8M5T4QZV7G"></script>
                            <script>
                                {`
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', 'G-8M5T4QZV7G');
                                `}
                            </script>
                        </>
                    }
                </Helmet>
            </HelmetProvider>
        )
    }
}

export default Head