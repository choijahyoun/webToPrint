import {wrapper} from '../store/store'
import '../scss/style.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
        <>
          <Head>
              <title>webToPrint</title>
              <link rel="shortcut icon" href="/static/img/favi.png" />
              <link rel="icon" href="/static/img/favi.png" sizes="32x32" />
              <link rel="icon" href="/static/img/favi.png" sizes="192x192" />
              <link rel="apple-touch-icon-precomposed" href="/static/img/favi.png" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="format-detection" content="telephone=no" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="author" content="nouthemes" />
              <meta name="keywords" content="Martfury, React, eCommerce, Template" />
              <meta name="description" content="Martfury - React eCommerce Template" />
              <link
                  href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
                  rel="stylesheet"
              /> 
              {/* 아이콘 */}
              <link
                  rel="stylesheet"
                  href="/static/fonts/Linearicons/Font/demo-files/demo.css"
              />
              <link
                  rel="stylesheet"
                  href="/static/fonts/font-awesome/css/font-awesome.min.css"
              />
              <link
                  rel="stylesheet"
                  type="text/css"
                  href="/static/css/bootstrap.min.css"
              />
              <link
                  rel="stylesheet"
                  type="text/css"
                  href="/static/css/slick.min.css"
              />
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
              <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
              <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>

              {/* slider에 관련된 라이브러리 */}
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              {/* 다음 우편번호 api */}
              <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
          </Head>
          <Component {...pageProps} />
        </>
      );
}

export default wrapper.withRedux(MyApp);
