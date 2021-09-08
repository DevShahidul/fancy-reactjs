import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Fancy | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-wrap">
        <div className="fancy-item-area">
          <div className="container">
            <div className="row gx-0">
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="item-wrapper">
                  <img className="img-fluid" src="assets/img/item-1.jpg" alt="Item Img" />
                  <span class="brand-tag">002 — BRANDS</span>
                </div>
                <div className="item-wrapper text-end">
                  <img className="img-fluid" src="assets/img/item-2.jpg" alt="Item Img" />
                  <span class="brand-tag brand-tag-1">002 — BRANDS</span>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="item-wrapper">
                  <img className="img-fluid" src="assets/img/item-3.jpg" alt="Item Img" />
                  <span class="brand-tag">002 — BRANDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
