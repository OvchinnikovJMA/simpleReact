import App from "next/app";
import Head from "next/head";
import React from "react";
import '../index.css'
class MyApp extends App {
    componentDidMount() {

    }
    render() {
        return(
            <React.Fragment>
                <Head>👾</Head>
                <div className="container">
                    Hello world from NextJS
                    <a className="link" target='_blank' href="https://github.com/OvchinnikovJMA">GitHub</a>
                </div>
            </React.Fragment>
        )
    }
}

export default MyApp;